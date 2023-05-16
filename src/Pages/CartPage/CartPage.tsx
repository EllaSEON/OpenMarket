import { useState, useEffect } from "react";
import MinusIcon from "../../assets/images/icon-minus-line.svg";
import PlustIcon from "../../assets/images/icon-plus-line.svg";
import CartItem from "../../components/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as S from "./style";
import {
  fetchGetCartList,
  fetchGetProductDetail,
} from "../../features/cartListSlice";
import { RootState } from "../../store/store";
import Spinner from "../../components/common/Spinner/Spinner";

function CartPage() {
  const dispatch = useAppDispatch();
  const TOKEN = useAppSelector((state: RootState) => state.login.token) || "";
  const cartItems = useAppSelector(
    (state: RootState) => state.cartList.cartItems
  );
  // console.log(cartItems);
  const cartStatus = useAppSelector(
    (state: RootState) => state.cartList.status
  );

  // 장바구니 정보 가져오기
  useEffect(() => {
    if (TOKEN) {
      dispatch(fetchGetCartList(TOKEN));
    }
  }, [TOKEN, dispatch]);

  // 상품 상세 정보 가져오기
  useEffect(() => {
    const getProductDetails = async () => {
      for (const cartItem of cartItems) {
        // 이미 상품 상세 정보를 가져온 경우는 제외
        if (cartItem.item) {
          continue;
        }
        dispatch(fetchGetProductDetail(cartItem.product_id));
      }
    };

    if (cartItems.length > 0) {
      getProductDetails();
    }
  }, [cartItems, dispatch]);

  if (cartStatus === "loading") {
    return <Spinner />;
  }

  return (
    <S.CartPageLayout>
      <S.CartText>장바구니</S.CartText>
      <S.MenuUl>
        <input type="checkbox" />
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </S.MenuUl>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.cart_item_id}
          quantity={cartItem.quantity}
          cartItem={cartItem}
        />
      ))}
      {cartItems.length === 0 ? (
        <S.NoItemBox>
          <p>장바구니에 담긴 상품이 없습니다.</p>
          <small>원하는 상품을 장바구니에 담아보세요!</small>
        </S.NoItemBox>
      ) : (
        <S.PriceTextWrapper>
          <S.PriceBox>
            <S.PriceCategoryTxt>총 상품금액</S.PriceCategoryTxt>
            <strong>46,500</strong>
            <span> 원</span>
          </S.PriceBox>
          <img src={MinusIcon} alt="마이너스 아이콘" />
          <S.PriceBox>
            <S.PriceCategoryTxt>상품 할인</S.PriceCategoryTxt>
            <strong>0</strong>
            <span> 원</span>
          </S.PriceBox>
          <img src={PlustIcon} alt="플러스 아이콘" />
          <S.PriceBox>
            <S.PriceCategoryTxt>배송비</S.PriceCategoryTxt>
            <strong>0</strong>
            <span> 원</span>
          </S.PriceBox>
          <S.PriceBox>
            <S.PriceCategoryTxt>결제 예정 금액</S.PriceCategoryTxt>
            <S.PaymentPriceTxt>0</S.PaymentPriceTxt>
            <span> 원</span>
          </S.PriceBox>
        </S.PriceTextWrapper>
      )}
    </S.CartPageLayout>
  );
}

export default CartPage;

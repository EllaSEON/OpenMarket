import { useState, useEffect } from "react";
import CartItem from "../../components/cart/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as S from "./style";
import {
  checkAllItem,
  fetchGetCartList,
  fetchGetProductDetail,
} from "../../features/cartListSlice";
import { RootState } from "../../store/store";
import Spinner from "../../components/common/Spinner/Spinner";
import TotalPrice from "../../components/cart/TotalPrice/TotalPrice";
import CheckCircleBtn from "../../components/common/CheckBtn/CheckCircleBtn";

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

  const areAllItemsChecked = useAppSelector((state) =>
    state.cartList.cartItems.every((item) => item.isChecked)
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
        <CheckCircleBtn
          isChecked={areAllItemsChecked}
          onChange={() => dispatch(checkAllItem())}
        />
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
        <TotalPrice />
      )}
    </S.CartPageLayout>
  );
}

export default CartPage;

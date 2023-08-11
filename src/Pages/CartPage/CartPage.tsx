import { useState, useEffect } from "react";
import CartItem from "../../components/cart/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as S from "./style";
import { checkAllItem } from "../../features/cartListSlice";
import { RootState } from "../../store/store";
import TotalPrice from "../../components/cart/TotalPrice/TotalPrice";
import CheckCircleBtn from "../../components/common/CheckBtn/CheckCircleBtn";
import { CartItemType } from "../../types/Cart.type";
import useFetchCartItems from "../../hooks/queries/useFetchCartItems";

function CartPage() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: RootState) => state.login.token) || "";

  const areAllItemsChecked = useAppSelector((state) =>
    state.cartList.cartItems.every((item) => item.isChecked)
  );

  // 장바구니 정보 가져오기
  let { cartItems } = useFetchCartItems(token);

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
      {cartItems.map((cartItem: CartItemType) => (
        <CartItem
          key={cartItem.cart_item_id}
          cartItemId={cartItem.cart_item_id}
          quantity={cartItem.quantity}
          cartItem={cartItem.productDetail}
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

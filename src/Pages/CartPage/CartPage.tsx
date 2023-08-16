import { useState } from "react";
import CartItem from "../../components/cart/CartItem/CartItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as S from "./style";
import { RootState } from "../../store/store";
import TotalPrice from "../../components/cart/TotalPrice/TotalPrice";
import CheckCircleBtn from "../../components/common/CheckBtn/CheckCircleBtn";
import { CartItemType } from "../../types/Cart.type";
import useFetchCartItems from "../../hooks/queries/useFetchCartItems";
import {
  setDeliveryTotalPrice,
  setSelectedTotalPrice,
} from "../../features/cartListSlice";

function CartPage() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: RootState) => state.login.token) || "";

  // 장바구니 정보 가져오기
  const { cartItems } = useFetchCartItems(token);

  const priceArray = cartItems.map(
    (item: CartItemType) => item.productDetail.price
  );
  const deliveryFeeArray = cartItems.map(
    (item: CartItemType) => item.productDetail.shipping_fee
  );

  const initialTotalPrice = priceArray.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );
  dispatch(setSelectedTotalPrice(initialTotalPrice));

  const initialTotalDeliveryFee = deliveryFeeArray.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );
  dispatch(setDeliveryTotalPrice(initialTotalDeliveryFee));

  //체크박스 로직
  const [isCheckedArray, setIsCheckedArray] = useState(
    new Array(cartItems.length).fill(true)
  );
  const [isAllChecked, setIsAllChecked] = useState(true);

  // 각 개별 아이템 체크박스 토글
  const handleToggleCheckbox = (index: number) => {
    const newIsCheckedArray = [...isCheckedArray];
    //체크박스를 클릭했을 때 토클 true이면 false로 변경해줌
    newIsCheckedArray[index] = !newIsCheckedArray[index];
    setIsCheckedArray(newIsCheckedArray);
    // console.log(newIsCheckedArray);

    // 모든 체크박스가 체크되어 있으면 전체 선택 체크박스도 체크, 아니면 해제
    setIsAllChecked(newIsCheckedArray.every((val) => val));
  };

  const handleToggleAllCheckbox = () => {
    const newValue = !isAllChecked;
    setIsAllChecked(newValue);
    setIsCheckedArray(new Array(cartItems.length).fill(newValue));
  };
  return (
    <S.CartPageLayout>
      <S.CartText>장바구니</S.CartText>
      <S.MenuUl>
        <CheckCircleBtn
          isChecked={isAllChecked}
          onChange={handleToggleAllCheckbox}
        />
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </S.MenuUl>
      {cartItems.map((cartItem: CartItemType, index: number) => (
        <CartItem
          key={cartItem.cart_item_id}
          cartItemId={cartItem.cart_item_id}
          quantity={cartItem.quantity}
          cartItem={cartItem.productDetail}
          isChecked={isCheckedArray[index]}
          onToggle={() => handleToggleCheckbox(index)}
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

import React from "react";
import { useState } from "react";
import AmountBtn from "../../common/AmountBtn/AmountBtn";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import { fetchDeleteProduct } from "../../../features/cartListSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import * as S from "./style";
import { openModal } from "../../../features/modalSlice";
import { ProductDetailType } from "../../../types/Cart.type";

interface CartItemProps {
  cartItem: ProductDetailType;
  quantity: number;
  cartItemId: number;
}

function CartItem({ cartItem, quantity, cartItemId }: CartItemProps) {
  const dispatch = useAppDispatch();
  const TOKEN = useAppSelector((state: RootState) => state.login.token) || "";
  const modal = useAppSelector((state: RootState) => state.modal.isOpen);
  const [count, setCount] = useState(quantity);

  const handleOpenDeleteModal = () => {
    dispatch(openModal());
  };

  const handleConfirmDelete = () => {
    dispatch(fetchDeleteProduct({ TOKEN, cart_item_id: cartItemId }));
  };

  // const handleCheckboxToggle = () => {
  //   dispatch(checkItem({ product_id: cartItem.product_id }));
  // };
  return (
    <S.ProductList>
      {modal && (
        <Modal onClickYes={handleConfirmDelete}>삭제하시겠습니까?</Modal>
      )}
      {/* <CheckCircleBtn
        isChecked={cartItem.isChecked}
        onChange={handleCheckboxToggle}
      /> */}
      <S.ProductInfoBox>
        <img src={cartItem.image} alt="상품이미지" />
        <div>
          <S.ShopText>{cartItem.store_name}</S.ShopText>
          <S.ProductNameTxt>{cartItem.product_name}</S.ProductNameTxt>
          <S.ProductPriceTxt>
            {cartItem.price.toLocaleString()}원
          </S.ProductPriceTxt>
          <S.ShipText>
            {cartItem.shipping_method === "PARCEL" ? "직접배송" : "택배배송"} /
            {cartItem.shipping_fee
              ? `${cartItem.shipping_fee.toLocaleString()}원`
              : "무료배송"}
          </S.ShipText>
        </div>
      </S.ProductInfoBox>
      <AmountBtn
        count={count}
        setCount={setCount}
        stock={cartItem.stock}
        productId={cartItem.product_id}
        cartId={cartItemId}
      />
      <S.TotalPriceWrapper>
        <S.TotalPriceTxt>
          {cartItem.price !== undefined && cartItem.shipping_fee !== undefined
            ? (cartItem.price * count + cartItem.shipping_fee).toLocaleString()
            : "가격 정보 없음"}{" "}
          원
        </S.TotalPriceTxt>
        <Button type="button" size="s" onClick={handleOpenDeleteModal}>
          삭제
        </Button>
      </S.TotalPriceWrapper>
    </S.ProductList>
  );
}
export default React.memo(CartItem);

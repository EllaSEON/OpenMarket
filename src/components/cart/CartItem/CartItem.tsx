import React from "react";
import { useState } from "react";
import AmountBtn from "../../common/AmountBtn/AmountBtn";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import {
  CartItems,
  checkItem,
  fetchDeleteProduct,
} from "../../../features/cartListSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import * as S from "./style";
import { openModal } from "../../../features/modalSlice";
import CheckCircleBtn from "../../common/CheckBtn/CheckCircleBtn";

interface CartItemProps {
  cartItem: CartItems;
  quantity: number;
}

function CartItem({ cartItem, quantity }: CartItemProps) {
  const dispatch = useAppDispatch();
  const TOKEN = useAppSelector((state: RootState) => state.login.token) || "";
  const modal = useAppSelector((state: RootState) => state.modal.isOpen);
  const [count, setCount] = useState(quantity);

  const handleOpenDeleteModal = () => {
    dispatch(openModal());
  };

  const handleConfirmDelete = () => {
    dispatch(
      fetchDeleteProduct({ TOKEN, cart_item_id: cartItem.cart_item_id })
    );
  };

  const handleCheckboxToggle = () => {
    dispatch(checkItem({ product_id: cartItem.product_id }));
  };
  return (
    <S.ProductList>
      {modal && (
        <Modal onClickYes={handleConfirmDelete}>삭제하시겠습니까?</Modal>
      )}
      <CheckCircleBtn
        isChecked={cartItem.isChecked}
        onChange={handleCheckboxToggle}
      />
      <S.ProductInfoBox>
        <img src={cartItem.item?.image} alt="상품이미지" />
        <div>
          <S.ShopText>{cartItem.item?.store_name}</S.ShopText>
          <S.ProductNameTxt>{cartItem.item?.product_name}</S.ProductNameTxt>
          <S.ProductPriceTxt>
            {cartItem.item?.price.toLocaleString()}원
          </S.ProductPriceTxt>
          <S.ShipText>
            {cartItem.item?.shipping_method === "PARCEL"
              ? "직접배송"
              : "택배배송"}{" "}
            /
            {cartItem.item?.shipping_fee
              ? `${cartItem.item?.shipping_fee.toLocaleString()}원`
              : "무료배송"}
          </S.ShipText>
        </div>
      </S.ProductInfoBox>
      <AmountBtn
        count={count}
        setCount={setCount}
        stock={cartItem.item?.stock}
        productId={cartItem.item?.product_id}
        cartId={cartItem.cart_item_id}
      />
      <S.TotalPriceWrapper>
        <S.TotalPriceTxt>
          {cartItem.item?.price !== undefined &&
          cartItem.item?.shipping_fee !== undefined
            ? (
                cartItem.item?.price * count +
                cartItem.item?.shipping_fee
              ).toLocaleString()
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

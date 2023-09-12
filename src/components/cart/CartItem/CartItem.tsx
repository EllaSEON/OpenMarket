import React, { useState } from "react";
import AmountBtn from "../../common/AmountBtn/AmountBtn";
import Modal from "../../common/Modal/Modal";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import * as S from "./style";
import { ProductDetailType } from "../../../types/Cart.type";
import CheckCircleBtn from "../../common/CheckBtn/CheckCircleBtn";
import { useDeleteCartItem } from "../../../hooks/queries/useDeleteCartItems";

interface CartItemProps {
  cartItem: ProductDetailType;
  quantity: number;
  cartItemId: number;
  isChecked: boolean;
  onToggle: () => void;
}

function CartItem({
  cartItem,
  quantity,
  cartItemId,
  isChecked,
  onToggle,
}: CartItemProps) {
  const { totalPrice, totalShippingFee } = useAppSelector(
    (state) => state.paymentAmount
  );
  const token = useAppSelector((state: RootState) => state.login.token) || "";
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [count, setCount] = useState(quantity);
  // console.log(cartItem);

  const { deleteCartItemMutation } = useDeleteCartItem({
    totalPrice,
    totalShippingFee,
    cartItem,
    count,
  });

  const handleOpenDeleteModal = () => {
    setIsOpenModal(true);
    // console.log("클릭된값", cartItemId);
  };

  const handleConfirmDelete = () => {
    const data = {
      token: token,
      cart_item_id: cartItemId,
    };
    // console.log("삭제되는 값", data.cart_item_id);
    deleteCartItemMutation.mutate(data);
    setIsOpenModal(false);
  };
  return (
    <S.ProductList>
      {isOpenModal && (
        <Modal
          onClickYes={handleConfirmDelete}
          onClickNo={() => {
            setIsOpenModal(false);
          }}
          onClickOutside={() => {
            setIsOpenModal(false);
          }}
        >
          삭제하시겠습니까?
        </Modal>
      )}
      <S.MobileDeleteBtnWrapper>
        <CheckCircleBtn isChecked={isChecked} onChange={onToggle} />
        {/* 모바일용 스타일 */}
        <S.MobileDeleteBtn type="button" onClick={handleOpenDeleteModal}>
          ✖️
        </S.MobileDeleteBtn>
      </S.MobileDeleteBtnWrapper>
      <S.ProductInfoBox>
        <img
          src={`https://res.cloudinary.com/dgwitjjjd/image/fetch/c_scale,w_600/f_auto/q_auto/${cartItem?.image}
        `}
          alt="상품이미지"
        />
        <div style={{ width: "200px" }}>
          <S.ShopText>{cartItem?.store_name}</S.ShopText>
          <S.ProductNameTxt>{cartItem?.product_name}</S.ProductNameTxt>
          <S.ProductPriceTxt>
            {cartItem?.price.toLocaleString()}원
          </S.ProductPriceTxt>
          <S.ShipText>
            {cartItem?.shipping_method === "PARCEL" ? "직접배송" : "택배배송"} /
            {cartItem?.shipping_fee
              ? `${cartItem?.shipping_fee.toLocaleString()}원`
              : "무료배송"}
          </S.ShipText>
        </div>
      </S.ProductInfoBox>
      <AmountBtn
        count={count}
        setCount={setCount}
        stock={cartItem?.stock}
        productId={cartItem?.product_id}
        cartId={cartItemId}
        isChecked={isChecked}
        productPrice={cartItem?.price}
      />
      <S.TotalPriceWrapper>
        <S.TotalPriceTxt>
          {cartItem?.price !== undefined && cartItem?.shipping_fee !== undefined
            ? (
                cartItem?.price * count +
                cartItem?.shipping_fee
              ).toLocaleString()
            : "가격 정보 없음"}{" "}
          원
        </S.TotalPriceTxt>
        <S.WebDeleteBtn type="button" size="s" onClick={handleOpenDeleteModal}>
          삭제
        </S.WebDeleteBtn>
      </S.TotalPriceWrapper>
    </S.ProductList>
  );
}
export default React.memo(CartItem);

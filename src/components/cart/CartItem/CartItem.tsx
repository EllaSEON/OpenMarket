import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AmountBtn from "../../common/AmountBtn/AmountBtn";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import * as S from "./style";
import { ProductDetailType } from "../../../types/Cart.type";
import cartAPI from "../../../API/cartAPI";
// import CheckCircleBtn from "../../common/CheckBtn/CheckCircleBtn";

interface CartItemProps {
  cartItem: ProductDetailType;
  quantity: number;
  cartItemId: number;
}

function CartItem({ cartItem, quantity, cartItemId }: CartItemProps) {
  const token = useAppSelector((state: RootState) => state.login.token) || "";
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [count, setCount] = useState(quantity);
  const queryClient = useQueryClient();

  const deleteCartItemMutation = useMutation(cartAPI.deleteCartItem, {
    onMutate: async (data) => {
      // 낙관적 업데이트를 덮어쓰지 않기위해 쿼리를 수동으로 삭제
      await queryClient.cancelQueries({
        queryKey: ["cartList", token],
      });

      // 이전값
      const previousCartItems = queryClient.getQueryData(["cartList", token]);

      // 새로운 값으로 낙관적 업데이트를 진행
      queryClient.setQueryData(["cartList", token], (oldData: any) => {
        // console.log(oldData);
        const filteredData = oldData.results.filter(
          (item: any) => item.cart_item_id !== data.cart_item_id
        );
        return { ...oldData, results: filteredData };
      });

      // 값이 들어있는 context 객체 반환
      return { previousCartItems };
    },
    // mutation이 실패해서 데이터 업데이트가 되지 않았을때 onMutate에서 반환된 이전의 백업된 context를 사용하여 롤백 진행
    onError: (error, context: any) => {
      queryClient.setQueryData(["cartList", token], context.previousCartItems);
    },
  });

  const handleOpenDeleteModal = () => {
    setIsOpenModal(true);
    console.log("클릭된값", cartItemId);
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

  // const handleCheckboxToggle = () => {
  //   dispatch(checkItem({ product_id: cartItem.product_id }));
  // };
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
      {/* <CheckCircleBtn
        isChecked={cartItem.isChecked}
        onChange={handleCheckboxToggle}
      /> */}
      <S.ProductInfoBox>
        <img src={cartItem?.image} alt="상품이미지" />
        <div>
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
        <Button type="button" size="s" onClick={handleOpenDeleteModal}>
          삭제
        </Button>
      </S.TotalPriceWrapper>
    </S.ProductList>
  );
}
export default React.memo(CartItem);

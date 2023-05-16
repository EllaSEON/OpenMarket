import React from "react";
import { useState } from "react";
import AmountBtn from "../common/AmountBtn/AmountBtn";
import Button from "../../components/common/Button/Button";
import { CartItems } from "../../features/cartListSlice";
import * as S from "./style";

interface CartItemProps {
  cartItem: CartItems;
  quantity: number;
}

function CartItem({ cartItem, quantity }: CartItemProps) {
  const [count, setCount] = useState(quantity);
  return (
    <S.ProductList>
      <input type="checkbox" />
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
                cartItem.item?.price * quantity +
                cartItem.item?.shipping_fee
              ).toLocaleString()
            : "가격 정보 없음"}{" "}
          원
        </S.TotalPriceTxt>
        <Button type="button" size="s">
          삭제
        </Button>
      </S.TotalPriceWrapper>
    </S.ProductList>
  );
}
export default React.memo(CartItem);

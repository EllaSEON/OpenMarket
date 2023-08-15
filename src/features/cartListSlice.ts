import { createSlice } from "@reduxjs/toolkit";

export interface Item {
  image: string;
  price: number;
  product_id: number;
  product_info: string;
  product_name: string;
  seller: number;
  store_name: string;
  shipping_fee: number;
  shipping_method: string;
  stock: number;
}

export interface CartItems {
  my_cart: number;
  is_active: boolean;
  cart_item_id: number;
  product_id: number;
  quantity: number;
  isChecked: boolean;
  item: Item | null;
}

interface CartListState {
  status: string;
  cartItems: CartItems[];
  selectedTotalPrice: number;
  deliveryPrice: number;
  error: string;
}

const initialState: CartListState = {
  status: "idle",
  cartItems: [],
  selectedTotalPrice: 0,
  deliveryPrice: 0,
  error: "",
};

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    // 장바구니 개별 아이템 체크박스
    checkItem: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.product_id === action.payload.product_id
      );
      // 상품 선택 상태를 toggle
      if (cartItem) {
        cartItem.isChecked = !cartItem.isChecked;
        // 상품이 선택 되면 가격을 추가하고, 그렇지 않으면 뺌
        if (cartItem.isChecked) {
          state.selectedTotalPrice +=
            (cartItem.item?.price || 0) * cartItem.quantity;
          state.deliveryPrice += cartItem.item?.shipping_fee || 0;
        } else {
          state.selectedTotalPrice -=
            (cartItem.item?.price || 0) * cartItem.quantity;
          state.deliveryPrice -= cartItem.item?.shipping_fee || 0;
        }
      }
    },
    // 장바구니 모든 아이템 체크박스
    checkAllItem: (state) => {
      const areAllItemsChecked = state.cartItems.every(
        (item) => item.isChecked
      );

      if (areAllItemsChecked) {
        state.cartItems.forEach((item) => {
          item.isChecked = false;
        });
        state.selectedTotalPrice = 0;
        state.deliveryPrice = 0;
      } else {
        state.cartItems.forEach((item) => {
          item.isChecked = true;
          state.selectedTotalPrice = state.cartItems.reduce(
            (totalPrice, cartItem) => {
              if (cartItem.isChecked && cartItem.item) {
                totalPrice += cartItem.item.price * cartItem.quantity;
              }
              return totalPrice;
            },
            0
          );
          state.deliveryPrice = state.cartItems.reduce(
            (totalShippingFee, cartItem) => {
              if (cartItem.isChecked && cartItem.item) {
                totalShippingFee += cartItem.item.shipping_fee;
              }
              return totalShippingFee;
            },
            0
          );
        });
      }
    },
  },
});

export const { checkItem, checkAllItem } = cartSlice.actions;

export default cartSlice.reducer;

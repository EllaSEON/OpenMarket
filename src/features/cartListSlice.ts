import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/config";

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

export interface CartItem {
  my_cart: number;
  is_active: boolean;
  cart_item_id: number;
  product_id: number;
  quantity: number;
  isChecked: boolean;
  item: Item;
}

interface CartListState {
  status: string;
  detailStatus: string;
  cartItems: CartItem[];
  error: string;
}

const initialState: CartListState = {
  status: "idle",
  detailStatus: "idle",
  cartItems: [],
  error: "",
};

// 카트 상품 가져오기
export const fetchGetCartList = createAsyncThunk(
  "cartList/fetchGetCartList",
  async (TOKEN: string) => {
    try {
      const config = {
        headers: {
          Authorization: `JWT ${TOKEN}`,
        },
      };
      let result = await axios.get(`${BASE_URL}/cart/`, config);
      console.log(result.data);
      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetCartList.pending, (state) => {
        state.status = "Loading";
        state.error = "";
      })
      .addCase(fetchGetCartList.fulfilled, (state, action) => {
        state.cartItems = action.payload.results;
      })
      .addCase(fetchGetCartList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something was wrong";
      });
  },
});

export default cartSlice.reducer;

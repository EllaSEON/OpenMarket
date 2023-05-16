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
  error: string;
}

const initialState: CartListState = {
  status: "idle",
  cartItems: [],
  error: "",
};

// 장바구니 상품 정보 가져오기
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
      // console.log(result.data);
      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const fetchGetProductDetail = createAsyncThunk(
  "products/fetchGetProductDetail",
  async (productId: number) => {
    try {
      const detailResults = await axios.get(
        `${BASE_URL}/products/${productId}`
      );
      // console.log(detailResults.data);
      return detailResults.data;
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
        state.status = "loading";
        state.error = "";
      })
      .addCase(fetchGetCartList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload.results.map((cartItem: CartItems) => ({
          ...cartItem,
          item: null, // 초기에는 item을 null로 설정합니다.
        }));
      })
      .addCase(fetchGetCartList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something was wrong";
      })
      .addCase(fetchGetProductDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        const productId = action.payload.product_id; // product_id 속성 사용
        const cartItem = state.cartItems.find(
          (item) => item.product_id === productId
        ); //기존 cartItem 의 product_id 와 fetchGetProductDetail 의 product_id 와 비교해서 같은거일때 cartItem 의 item 값에 추가
        if (cartItem) {
          cartItem.item = action.payload;
        }
      });
  },
});

export default cartSlice.reducer;

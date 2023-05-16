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

interface ModifiedQuantity {
  TOKEN: string;
  product_id: number;
  cart_item_id: number;
  quantity: number;
  is_active: Boolean;
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
      const result = await axios.get(`${BASE_URL}/cart/`, config);
      // console.log(result.data);
      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

// 상세 상품 정보 가져오기
export const fetchGetProductDetail = createAsyncThunk(
  "products/fetchGetProductDetail",
  async (product_id: number) => {
    try {
      const detailResults = await axios.get(
        `${BASE_URL}/products/${product_id}`
      );
      // console.log(detailResults.data);
      return detailResults.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

// 장바구니 수량 변경
export const fetchModifyCartQuantity = createAsyncThunk(
  "cartList/fetchModifyCartQuantity",
  async ({
    TOKEN,
    product_id,
    cart_item_id,
    quantity,
    is_active,
  }: ModifiedQuantity) => {
    try {
      const config = {
        headers: {
          Authorization: `JWT ${TOKEN}`,
        },
      };
      const data = { product_id, quantity, is_active };
      const quantityResults = await axios.put(
        `${BASE_URL}/cart/${cart_item_id}/`,
        data,
        config
      );
      console.log(quantityResults.data);
      return quantityResults.data;
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
        const productId = action.payload.product_id; // product_id 속성 사용
        const cartItem = state.cartItems.find(
          (item) => item.product_id === productId
        ); //기존 cartItem 의 product_id 와 fetchGetProductDetail 의 product_id 와 비교해서 같은거일때 cartItem 의 item 값에 추가
        if (cartItem) {
          cartItem.item = action.payload;
        }
      })
      //장바구니 수량 수정
      .addCase(fetchModifyCartQuantity.fulfilled, (state, action) => {
        const { cart_item_id, quantity } = action.payload;
        const cartItem = state.cartItems.find(
          (item) => item.cart_item_id === cart_item_id
        );
        if (cartItem) {
          cartItem.quantity = quantity;
        }
      });
  },
});

export default cartSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";
import { Product } from "../types/Product.type";

export interface ProductDetail {
  image?: string;
  price?: number;
  product_id?: number;
  product_info?: string;
  product_name?: string;
  shipping_fee?: number;
  shipping_method?: string;
  store_name?: string;
  stock?: number;
}

interface ProductState {
  status: "loading" | "succeeded" | "failed";
  error: string;
  products: Product[];
  productDetail: ProductDetail;
  totalPage: number;
}

const initialState: ProductState = {
  status: "loading",
  error: "",
  products: [],
  productDetail: {} as ProductDetail,
  totalPage: 1,
};

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

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProductDetail: (state) => {
      state.productDetail = {};
    },
  },
});

export const { clearProductDetail } = productSlice.actions;
export default productSlice.reducer;

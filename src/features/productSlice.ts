import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/config";

//state product 타입
export interface Product {
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

interface ProductDetail extends Product {}

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

export const fetchGetProducts = createAsyncThunk(
  "products/fetchGetProducts",
  async (currentPage: number) => {
    try {
      const products = await axios.get(
        `${BASE_URL}/products?page=${currentPage}`
      );
      // console.log(products.data);
      return products.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const fetchSearch = createAsyncThunk(
  "products/fetchSearch",
  async (keyword: string) => {
    try {
      const searchResults = await axios.get(
        `${BASE_URL}/products/?search=${keyword}`
      );
      return searchResults.data;
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
      console.log(detailResults.data);
      return detailResults.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGetProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = "";
        state.products = action.payload.results;
        state.totalPage = Math.floor(action.payload.count / 15 + 1);
      })
      .addCase(fetchGetProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something is wrong";
        state.products = [];
      })
      // 상품 검색
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.products = action.payload.results;
      })
      // 상품 디테일
      .addCase(fetchGetProductDetail.fulfilled, (state, action) => {
        state.productDetail = action.payload;
      });
  },
});

export default productSlice.reducer;

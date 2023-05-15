import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/config";

interface CartItem {
  my_cart?: number;
  cart_item_id?: number;
  product_id?: number;
  quantity?: number;
}

interface CartSliceProps {
  item: CartItem;
  status: string;
  error: string;
}

interface PostCartType {
  TOKEN: string;
  product_id: number;
  quantity: number;
  check: boolean;
}

const initialState: CartSliceProps = {
  item: {},
  status: "idle",
  error: "",
};

export const fetchPostCart = createAsyncThunk(
  "cart/fetchPostCart",
  async ({ TOKEN, product_id, quantity, check }: PostCartType) => {
    try {
      const config = {
        headers: {
          Authorization: `JWT ${TOKEN}`,
        },
      };
      const data = { product_id, quantity, check };
      const result = await axios.post(`${BASE_URL}/cart/`, data, config);
      console.log(result.data);
      return result.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const postCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostCart.fulfilled, (state, action) => {
        state.item = action.payload;
        state.status = "succeeded";
        state.error = "";
      })
      .addCase(fetchPostCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something is wrong";
        state.item = {};
      });
  },
});

export default postCartSlice.reducer;

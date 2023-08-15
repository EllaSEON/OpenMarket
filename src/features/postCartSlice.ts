import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

const initialState: CartSliceProps = {
  item: {},
  status: "idle",
  error: "",
};

export const postCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default postCartSlice.reducer;

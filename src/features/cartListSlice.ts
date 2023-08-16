import { createSlice } from "@reduxjs/toolkit";

export interface initialType {
  selectedTotalPrice: number;
  deliveryTotalPrice: number;
}

const initialState: initialType = {
  selectedTotalPrice: 0,
  deliveryTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    setSelectedTotalPrice: (state, action) => {
      state.selectedTotalPrice = action.payload;
    },
    setDeliveryTotalPrice: (state, action) => {
      state.deliveryTotalPrice = action.payload;
    },
  },
});

export const { setSelectedTotalPrice, setDeliveryTotalPrice } =
  cartSlice.actions;

export default cartSlice.reducer;

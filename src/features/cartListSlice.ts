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
    updateSelectedTotalPrice: (state, action) => {
      state.selectedTotalPrice = action.payload;
    },
    updateDeliveryTotalPrice: (state, action) => {
      state.deliveryTotalPrice = action.payload;
    },
    resetTotalPrices: (state) => {
      state.selectedTotalPrice = 0;
      state.deliveryTotalPrice = 0;
    },
  },
});

export const {
  updateSelectedTotalPrice,
  updateDeliveryTotalPrice,
  resetTotalPrices,
} = cartSlice.actions;

export default cartSlice.reducer;

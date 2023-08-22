import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalShippingFee: 0,
};
const paymentAmountSlice = createSlice({
  name: "paymentAmount",
  initialState,
  reducers: {
    setPaymentAmount: (state, action) => {
      state.totalPrice =
        action.payload.totalPrice < 0 ? 0 : action.payload.totalPrice;
      state.totalShippingFee =
        action.payload.totalShippingFee < 0
          ? 0
          : action.payload.totalShippingFee;
    },
  },
});

export const { setPaymentAmount } = paymentAmountSlice.actions;
export default paymentAmountSlice.reducer;

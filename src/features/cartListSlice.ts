import { createSlice } from "@reduxjs/toolkit";

export interface initialType {
  selectedTotalPrice: number;
  deliveryPrice: number;
}

const initialState: initialType = {
  selectedTotalPrice: 0,
  deliveryPrice: 0,
};

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    checkItem: (state,action) => {
      
    },
  },
});

// export const { checkItem, checkAllItem } = cartSlice.actions;

export default cartSlice.reducer;

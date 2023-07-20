import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../utils/Cookies";

const tokenItem = getCookie("token");

interface LoginState {
  token?: string | null;
  userType?: string;
}

const initialState: LoginState = {
  token: tokenItem ? tokenItem : null,
  userType: "BUYER",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    changeUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});

export let { updateToken, changeUserType } = loginSlice.actions;

export default loginSlice.reducer;

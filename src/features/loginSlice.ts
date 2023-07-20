// 로그인 관련 token 과 userType을 전역상태로 저장하는 파일입니다.

import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../utils/Cookies";

interface LoginState {
  token?: string | null;
  userType?: string;
}

const tokenItem = getCookie("token");

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

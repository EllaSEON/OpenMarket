// 로그인 관련 token 과 userType을 전역상태로 저장하는 파일입니다.

import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../utils/Cookies";

interface LoginState {
  token?: string | null;
  userType?: "BUYER" | "SELLER";
}

// 전역상태는 새로고침 하면 초기화 되기 때문에 토큰은 쿠키에서 받아온 값을,
// userType 은 로컬스토리지에서 받아온 값을 초기값으로 설정한다.

const tokenItem = getCookie("token");
const userTypeItem = localStorage.getItem("userType");
const userType =
  userTypeItem === "BUYER" || userTypeItem === "SELLER"
    ? userTypeItem
    : undefined;

const initialState: LoginState = {
  token: tokenItem ? tokenItem : null,
  userType: userType,
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
      localStorage.setItem("userType", action.payload);
    },
  },
});

export let { updateToken, changeUserType } = loginSlice.actions;

export default loginSlice.reducer;

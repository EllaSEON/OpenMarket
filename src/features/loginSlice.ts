import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/config";
import { getCookie, removeCookie } from "../utils/Cookies";

const tokenItem = getCookie("token");
const typeItem = getCookie("userType");
const TOKEN = tokenItem === null ? null : tokenItem;
// const USER_TYPE = typeItem === null ? null : typeItem;

interface LoginState {
  error: string;
  token?: string | null;
  userType?: string;
}

const initialState: LoginState = {
  error: "",
  token: TOKEN ? TOKEN : null,
  userType: "BUYER",
};

export const fetchLogout = createAsyncThunk("login/fetchLogout", async () => {
  try {
    const response = await axios.post(`${BASE_URL}/accounts/logout/`);
    console.log(response);
    removeCookie("token");
    removeCookie("userType");
  } catch (error: any) {
    console.log(error.response.data);
  }
});

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
  extraReducers: (builder) => {
    builder
      // 로그아웃
      .addCase(fetchLogout.fulfilled, (state) => {
        state.token = null;
        state.userType = "BUYER";
        state.error = "";
      });
  },
});

export let { updateToken, changeUserType } = loginSlice.actions;

export default loginSlice.reducer;

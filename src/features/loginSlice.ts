import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/config";
import { setCookie, getCookie, removeCookie } from "../utils/Cookies";

const tokenItem = getCookie("token");
const typeItem = getCookie("userType");
const TOKEN = tokenItem === null ? null : tokenItem;
const USER_TYPE = typeItem === null ? null : typeItem;

interface LoginData {
  username: string;
  password: string;
  login_type: string;
}

interface LoginState {
  loginStatus: "loading" | "succeeded" | "failed";
  logoutStatus: "succeeded";
  error: string;
  token?: string | null;
  userType?: string;
}

const initialState: LoginState = {
  loginStatus: "loading",
  logoutStatus: "succeeded",
  error: "",
  token: TOKEN ? TOKEN : null,
  userType: USER_TYPE ? USER_TYPE : "BUYER",
};

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (
    { username, password, login_type }: LoginData,
    { rejectWithValue }
  ) => {
    try {
      const data = { username, password, login_type };
      const response = await axios.post(`${BASE_URL}/accounts/login/`, data);
      console.log(response.data);

      if (response.data) {
        setCookie("token", response.data.token);
        setCookie("userType", response.data.user_type);
      }
      return {
        token: response.data.token,
        userType: response.data.user_type,
      };
    } catch (error: any) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

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
  reducers: {},
  extraReducers: (builder) => {
    // 로그인
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loginStatus = "succeeded";
        state.error = "";
        state.token = action.payload.token;
        state.userType = action.payload.userType;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loginStatus = "failed";
        state.error =
          (action.payload as string | undefined) || action.error.message || "";
      })
      // 로그아웃
      .addCase(fetchLogout.fulfilled, (state) => {
        state.logoutStatus = "succeeded";
        state.loginStatus = "failed";
        state.token = null;
        state.userType = "BUYER";
        state.error = "";
      });
  },
});

export default loginSlice.reducer;

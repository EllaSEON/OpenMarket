import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/config";
import { setCookie, getCookie } from "../utils/Cookies";

const item = getCookie("token");
const TOKEN = item === null ? null : JSON.parse(item || "{}").token;

interface LoginData {
  username: string;
  password: string;
  login_type: string;
}

interface LoginState {
  status: "loading" | "succeeded" | "failed";
  error: string;
  token?: string | null;
}

const initialState: LoginState = {
  status: "loading",
  error: "",
  token: TOKEN ? TOKEN : null,
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
      return response.data;
    } catch (error: any) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = "";
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          (action.payload as string | undefined) || action.error.message || "";
      });
  },
});

export default loginSlice.reducer;

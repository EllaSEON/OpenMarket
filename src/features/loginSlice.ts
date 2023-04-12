import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/config";

interface LoginData {
  username: string;
  password: string;
  login_type: string;
}

interface InitalState {
  status: "loading" | "succeeded" | "failed";
  error: string;
}

const initialState: InitalState = {
  status: "loading",
  error: "",
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

      // if (response.data) {
      //   sessionStorage.setItem("token", JSON.stringify(response.data));
      // }
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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import store from "../store/store";
import { BASE_URL } from "../constant/config";

interface joinState {
  valid: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: joinState = {
  valid: false,
  status: "idle",
};

// 아이디 유효성 검증
export const fetchIdValidate = createAsyncThunk(
  "join/fetchIdValidate",
  async (id: string) => {
    const response = await axios.post<boolean>(
      `${BASE_URL}/accounts/signup/valid/username/`,
      { id }
    );
    return response.data;
  }
);

const joinSlice = createSlice({
  name: "join",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdValidate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIdValidate.fulfilled, (state, action) => {
        state.status = "idle";
        state.valid = action.payload;
      })
      .addCase(fetchIdValidate.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default joinSlice;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
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
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/accounts/signup/valid/username/`,
        { username: id }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error("Error in fetchIdValidate:", axiosError.response?.data);
      return thunkAPI.rejectWithValue(axiosError.response?.data);
    }
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

export default joinSlice.reducer;

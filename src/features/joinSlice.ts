import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/config";

interface joinState {
  valid: boolean;
  status: "succeededID" | "succeededBusiness" | "loading" | "failed";
  error: string;
}

const initialState: joinState = {
  valid: false,
  status: "loading",
  error: "",
};

// 아이디 유효성 검증
export const fetchIdValidate = createAsyncThunk(
  "join/fetchIdValidate",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/accounts/signup/valid/username/`,
        { username: id }
      );
      // console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.FAIL_Message);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

// 사업자번호 유효성 검증
export const fetchBusinessValidate = createAsyncThunk(
  "join/fetchBusinessValidate",
  async (businessNo: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/accounts/signup/valid/company_registration_number/`,
        { company_registration_number: businessNo }
      );
      // console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.FAIL_Message);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

const joinSlice = createSlice({
  name: "join",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 아이디 중복확인
    builder
      .addCase(fetchIdValidate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIdValidate.fulfilled, (state, action) => {
        state.status = "succeededID";
        state.valid = action.payload;
      })
      .addCase(fetchIdValidate.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          (action.payload as string) || "Something is wrong in id :<";
      });
    // 사업자 등록 번호 검증
    builder
      .addCase(fetchBusinessValidate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBusinessValidate.fulfilled, (state, action) => {
        state.status = "succeededBusiness";
        state.valid = action.payload;
      })
      .addCase(fetchBusinessValidate.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          (action.payload as string) || "Something is wrong in Business No :<";
      });
  },
});

export default joinSlice.reducer;

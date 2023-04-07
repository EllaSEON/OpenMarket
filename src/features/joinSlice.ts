import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/config";

interface joinState {
  valid: boolean;
  error: string | { [key: string]: string } | null;
  successMsg: {
    Success: string;
  };
}

const initialState: joinState = {
  valid: false,
  error: null,
  successMsg: {
    Success: "",
  },
};

export interface BuyerPostData {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
}

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
      // console.log(error.response.data.FAIL_Message);
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
      // console.log(error.response.data.FAIL_Message);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

// 회원가입
export const fetchBuyerJoin = createAsyncThunk(
  "join/fetchBuyerJoin",
  async (
    { username, password, password2, phone_number, name }: BuyerPostData,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}/accounts/signup/`, {
        username,
        password,
        password2,
        phone_number,
        name,
      });
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data.FAIL_Message);
    }
  }
);

// 회원가입

const joinSlice = createSlice({
  name: "join",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 아이디 중복확인
    builder
      .addCase(fetchIdValidate.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchIdValidate.fulfilled, (state, action) => {
        state.valid = action.payload.valid;
        state.successMsg = action.payload;
        state.error = null;
      })
      .addCase(fetchIdValidate.rejected, (state, action) => {
        state.error =
          (action.payload as string) || "Something is wrong in id :<";
      });
    // 사업자 등록 번호 검증
    builder
      .addCase(fetchBusinessValidate.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchBusinessValidate.fulfilled, (state, action) => {
        state.error = null;
        state.valid = action.payload.valid;
        state.successMsg = action.payload;
      })
      .addCase(fetchBusinessValidate.rejected, (state, action) => {
        state.error =
          (action.payload as string) || "Something is wrong in Business No :<";
      });
    // 구매자 회원가입
    builder
      .addCase(fetchBuyerJoin.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchBuyerJoin.fulfilled, (state, action) => {
        state.error = null;
        state.valid = action.payload.valid;
      })
      .addCase(fetchBuyerJoin.rejected, (state, action) => {
        state.error =
          (action.payload as string) || "Something is wrong in BuyerJoin :<";
      });
  },
});

export default joinSlice.reducer;

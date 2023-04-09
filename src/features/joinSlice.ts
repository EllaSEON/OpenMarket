import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constant/config";

interface joinState {
  valid: boolean;
  error: null | string;
}

const initialState: joinState = {
  valid: false,
  error: null,
};

interface BasePostData {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
}

export interface BuyerPostData extends BasePostData {}

export interface SellerPostData extends BasePostData {
  company_registration_number: string;
  store_name: string;
}

// 아이디 & 사업자 번호 유효성 검증
const createValidationThunk = (url: string, field: string) =>
  createAsyncThunk(
    `join/fetch${field}Validate`,
    async (value: string, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}${url}`, {
          [field]: value,
        });
        return response.data.Success;
      } catch (error: any) {
        return rejectWithValue(error.response.data.FAIL_Message);
      }
    }
  );

// 아이디 유효성 검증
export const fetchIdValidate = createValidationThunk(
  "/accounts/signup/valid/username/",
  "username"
);

// 사업자번호 유효성 검증
export const fetchBusinessValidate = createValidationThunk(
  "/accounts/signup/valid/company_registration_number/",
  "company_registration_number"
);

// 구매자 회원가입
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
      return rejectWithValue(error.response.data);
    }
  }
);

// 판매자 회원가입
export const fetchSellerJoin = createAsyncThunk(
  "join/fetchSellerJoin",
  async (
    {
      username,
      password,
      password2,
      phone_number,
      name,
      company_registration_number,
      store_name,
    }: SellerPostData,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}/accounts/signup_seller/`, {
        username,
        password,
        password2,
        phone_number,
        name,
        company_registration_number,
        store_name,
      });
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
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
        state.error = null;
      })
      .addCase(fetchIdValidate.fulfilled, (state, action) => {
        state.valid = action.payload.valid;
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
    // 판매자 회원가입
    builder
      .addCase(fetchSellerJoin.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchSellerJoin.fulfilled, (state, action) => {
        state.error = null;
        state.valid = action.payload.valid;
      })
      .addCase(fetchSellerJoin.rejected, (state, action) => {
        state.error =
          (action.payload as string) || "Something is wrong in SellerJoin :<";
      });
  },
});

export default joinSlice.reducer;

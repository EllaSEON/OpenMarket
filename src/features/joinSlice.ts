import { createSlice } from "@reduxjs/toolkit";

interface joinState {
  valid: boolean;
  error: null | string;
}

const initialState: joinState = {
  valid: false,
  error: null,
};

const joinSlice = createSlice({
  name: "join",
  initialState,
  reducers: {},
});

export default joinSlice.reducer;

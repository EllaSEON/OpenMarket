import { createSlice } from "@reduxjs/toolkit";
import store from "../store/store";

const joinInitial = {
  id: "",
};
const 조인슬라이스 = createSlice({
  name: "joinInputs",
  initialState: joinInitial,
  reducers: {
    setJoinInputs(state, action) {
      state.id = "park";
    },
  },
});

export default 조인슬라이스;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

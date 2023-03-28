import { configureStore } from "@reduxjs/toolkit";
import joinSlice from "../features/joinSlice";

export default configureStore({
  reducer: {
    joinSlice: joinSlice.reducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import joinSliceReducer from "../features/joinSlice";
import loginSliceReducer from "../features/loginSlice";
import productSlice from "../features/productSlice";

export const store = configureStore({
  reducer: {
    join: joinSliceReducer,
    login: loginSliceReducer,
    products: productSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

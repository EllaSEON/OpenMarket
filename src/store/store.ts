import { configureStore } from "@reduxjs/toolkit";
import joinSliceReducer from "../features/joinSlice";
import loginSliceReducer from "../features/loginSlice";
import productSlice from "../features/productSlice";
import modalSlice from "../features/modalSlice";
import postCartSlice from "../features/postCartSlice";

export const store = configureStore({
  reducer: {
    join: joinSliceReducer,
    login: loginSliceReducer,
    products: productSlice,
    modal: modalSlice,
    cart: postCartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

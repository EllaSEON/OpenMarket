import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "../features/loginSlice";
import modalSliceReducer from "../features/modalSlice";
import postCartSliceReducer from "../features/postCartSlice";
import cartListSliceReducer from "../features/cartListSlice";

export const store = configureStore({
  reducer: {
    login: loginSliceReducer,
    modal: modalSliceReducer,
    cart: postCartSliceReducer,
    cartList: cartListSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import joinSliceReducer from "../features/joinSlice";

export const store = configureStore({
  reducer: {
    join: joinSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

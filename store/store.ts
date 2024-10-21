import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./post/postsReducer";
import usersReducer from "./user/usersReducer";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { commentsReducer } from "./comments/commentsReducer";
import postsReducer from "./post/postsReducer";
import usersReducer from "./user/usersReducer";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

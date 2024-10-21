import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { mockedPosts, Post } from "../../data";

type PostsState = Post[];
const initialState: PostsState = mockedPosts;

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    AddPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
  },
});

export const { AddPost } = postsSlice.actions;
export default postsSlice.reducer;

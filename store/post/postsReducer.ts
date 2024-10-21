import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { mockedPosts, Post, PostCreate } from "../../data";

type PostsState = Post[];
const initialState: PostsState = mockedPosts;

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    AddPost: (state, action: PayloadAction<PostCreate>) => {
      state.push({ id: Date.now().toString(), ...action.payload, userId: "1" });
    },
  },
});

export const { AddPost } = postsSlice.actions;
export default postsSlice.reducer;

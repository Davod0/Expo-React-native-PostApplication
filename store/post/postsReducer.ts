import { createSlice } from "@reduxjs/toolkit";
import { mockedPosts, Post } from "../../data";
import { AddPost } from "./postsActions";

type PostsState = Post[];
const initialState: PostsState = mockedPosts;

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddPost.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;

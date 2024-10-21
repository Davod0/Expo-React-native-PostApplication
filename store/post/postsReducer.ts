import { createSlice } from "@reduxjs/toolkit";
import { mockedPosts, Post } from "../../data";
import { AddPost } from "./postsActions";

type PostsState = {
  list: Post[];
  isLoading: boolean;
  error?: string;
};
const initialState: PostsState = {
  list: mockedPosts,
  isLoading: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddPost.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(AddPost.fulfilled, (state, action) => {
      state.list.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(AddPost.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;

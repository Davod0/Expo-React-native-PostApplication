import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../data";
import { RootState } from "../store";

const initialState: Post = {
  id: "",
  title: "",
  content: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    AddPost: (state, action: PayloadAction<Post>) => {},
  },
});

export const { AddPost } = postSlice.actions;

export default postSlice.reducer;

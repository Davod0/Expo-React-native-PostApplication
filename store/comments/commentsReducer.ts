import { createSlice } from "@reduxjs/toolkit";
import { Comment, mockedComments } from "../../data";

type commentState = {
  list: Comment[];
  isLoading: boolean;
  error?: string;
};

const initialState: commentState = {
  list: mockedComments,
  isLoading: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
});

export const commentsReducer = commentsSlice.reducer;
export const {} = commentsSlice.actions;

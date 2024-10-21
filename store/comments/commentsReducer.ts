import { createSlice } from "@reduxjs/toolkit";
import { Comment, mockedComments } from "../../data";
import { addComment } from "./commentsActions";

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
  extraReducers: (builder) => {
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
  },
});

export const commentsReducer = commentsSlice.reducer;
export const {} = commentsSlice.actions;

import { Post, PostCreate } from "../../data";
import { createAppAsyncThunk } from "../hooks";

export const AddPost = createAppAsyncThunk<Post, PostCreate>(
  "posts/addPost",
  async (data, thunkApi) => {
    const state = thunkApi.getState();

    if (!state.users.loggedInUser) {
      return thunkApi.rejectWithValue("No logged in user");
    }
    return {
      id: Date.now().toString(),
      userId: state.users.loggedInUser.uid,
      ...data,
    };
  }
);

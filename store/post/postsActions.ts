import { Post, PostCreate } from "../../data";
import { createAppAsyncThunk } from "../hooks";

export const AddPost = createAppAsyncThunk<Post, PostCreate>(
  "posts/addPost",
  async (data, thunkApi) => {
    const state = thunkApi.getState();

    if (!state.users.loggedInUser) {
      return thunkApi.rejectWithValue("No logged in user");
    }

    await wait(5000);

    return {
      id: Date.now().toString(),
      userId: state.users.loggedInUser.uid,
      ...data,
    };
  }
);

const wait = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

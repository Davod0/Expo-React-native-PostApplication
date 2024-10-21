import { Comment, CommentCreate } from "../../data";
import { createAppAsyncThunk } from "../hooks";

export const addComment = createAppAsyncThunk<Comment, CommentCreate>(
  "comments/addComment",
  async (commentCreate, thunkApi) => {
    const state = thunkApi.getState();

    if (!state.users.loggedInUser) {
      return thunkApi.rejectWithValue("No looged in user");
    }

    const comment: Comment = {
      id: Date.now().toString(),
      userId: state.users.loggedInUser.uid,
      ...commentCreate,
    };

    return comment;
  }
);

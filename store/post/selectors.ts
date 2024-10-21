import { RootState } from "../store";

export const selectPostId = (state: RootState) => state.post.content;

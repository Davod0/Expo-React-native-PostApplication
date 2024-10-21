import { RootState } from "../store";

export const selectCommentsById = (postId: string) => (state: RootState) =>
  state.comments.list
    .filter((comment) => comment.postId === postId)
    .map((comment) => ({
      ...comment,
      user: state.users.list.find((user) => user.uid === comment.userId),
    }));

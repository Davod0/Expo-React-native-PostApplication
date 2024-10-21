import { RootState } from "../store";

export const selectPosts = (state: RootState) => state.posts;
export const selectPostsWithUser = (state: RootState) => {
  const posts = selectPosts(state);
  return posts.map((post) => {
    return {
      ...post,
      user: state.users.list.find((user) => user.uid === post.userId),
    };
  });
};

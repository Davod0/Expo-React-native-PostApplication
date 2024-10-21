export type Post = {
  id: string;
  title: string;
  content: string;
  userId: string;
};

export type User = {
  uid: string;
  name: string;
};

export type PostCreate = Omit<Post, "id" | "userId">;

export const mockedUsers: User[] = [
  {
    uid: "1",
    name: "Davod",
  },
  {
    uid: "2",
    name: "Frida",
  },
];

export const mockedPosts: Post[] = [
  {
    id: "1",
    title: "Post 1",
    content: "Content 1te  rt whywhr ynhnhehryw",
    userId: "1",
  },
  {
    id: "2",
    title: "Post 2",
    content: "Contenxxxxxxxxxvebnr ney nyenth ntmthemjt 2",
    userId: "2",
  },
  {
    id: "2",
    title: "Post 3",
    content: "Content 3 vfh k awl uqeli veak",
    userId: "2",
  },
  {
    id: "1",
    title: "Post 4",
    content: "Content 4 bhjkrw biyq buqeor  erqui ",
    userId: "1",
  },
];

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

export type Comment = {
  id: string;
  postId: string;
  userId: string;
  content: string;
};

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

export const mockedComments: Comment[] = [
  {
    id: "1",
    postId: "1",
    userId: "2",
    content: "Great post! I really liked the way you explained this topic.",
  },
  {
    id: "2",
    postId: "2",
    userId: "1",
    content:
      "Interesting perspective, but I think there's another angle to consider.",
  },
  {
    id: "3",
    postId: "3",
    userId: "1",
    content:
      "Thanks for sharing this! Helped me understand this concept better.",
  },
  {
    id: "4",
    postId: "4",
    userId: "2",
    content: "Good post, but I feel like you could expand on certain points.",
  },
  {
    id: "5",
    postId: "1",
    userId: "1",
    content:
      "I'm glad you enjoyed the post! I'll definitely look into the feedback you gave.",
  },
];

export const mockedPosts: Post[] = [
  {
    id: "1",
    title: "Post 1",
    content: "An overview of recent trends in technology and their impact.",
    userId: "1",
  },
  {
    id: "2",
    title: "Post 2",
    content:
      "How to stay productive while working from home in a fast-paced environment.",
    userId: "2",
  },
  {
    id: "3",
    title: "Post 3",
    content:
      "The importance of mental health in the workplace and how to prioritize it.",
    userId: "2",
  },
  {
    id: "4",
    title: "Post 4",
    content: "A deep dive into web development frameworks and their strengths.",
    userId: "1",
  },
  {
    id: "5",
    title: "Post 5",
    content:
      "Understanding the basics of blockchain technology and its future potential.",
    userId: "1",
  },
];

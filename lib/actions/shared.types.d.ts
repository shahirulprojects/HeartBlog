// ".d.ts" file is used to provide TypeScript type information about an API that's written in JavaScript (basically we get the TypeScript benefits of static type checking while still using a pure JavaScript library)
import { Schema } from "mongoose";

import { IUser } from "@/mongodb";

export interface ViewPostParams {
  postId: string;
  userId: string | undefined;
}

export interface CreatePostParams {
  title: string;
  content: string;
  author: Schema.Types.ObjectId | IUser;
  path: string;
}

export interface GetPostsParams {
  searchQuery?: string;
  filter?: string;
}

export interface GetPostByIdParams {
  postId: string;
}

export interface CreateUserParams {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

export interface GetUserByIdParams {
  userId: string;
}

export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
}

export interface DeleteUserParams {
  clerkId: string;
}

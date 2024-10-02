/* eslint-disable no-unused-vars */
"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { CreateUserParams, DeleteUserParams } from "./shared.types";
import Post from "@/database/post.model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params; // pass the userId as parameters

    const user = await User.findOne({ clerkId: userId });
    // based on the userId we can find the user from the database using the User model
    // clerkId:userId means that we search the user by clerkId

    return user;
  } catch (error) {
    console.error("Error getting user by ID:", error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await User.create(userData);

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();

    const { clerkId } = params;

    const user = await User.findOne({ clerkId });

    // if user does not exist
    if (!user) {
      throw new Error("User not found");
    }

    // if the user exists,we have to delete the user from the database and also delete the posts,answers,comments,etc that have been made by the user

    // deleting all posts posted by the user
    await Post.deleteMany({ author: user._id });

    // delete the user
    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

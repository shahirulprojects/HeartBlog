"use server";

import Post from "@/database/post.model";
import { connectToDatabase } from "../mongoose";
import { CreatePostParams, GetPostByIdParams } from "./shared.types";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

// we are dealing with asynchronous code so that's why we will have the try and catch block to handle if the call succeed or not
export async function createPost(params: CreatePostParams) {
  try {
    connectToDatabase();

    const { title, content, author, path } = params;
    // destructuring the params
    // accepting parameters from the front end (everything we pass from our form).The path is going to be an URL to the page that we have to reload (the homepage) because we have to revalidate it so that next.js know something has change

    // create the post
    await Post.create({
      title,
      content,
      author,
    });

    revalidatePath(path); // to remove the need to reload the homepage everytime a new post is added
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

export async function getPostById(params: GetPostByIdParams) {
  try {
    connectToDatabase();

    const { postId } = params;

    const post = await Post.findById(postId).populate({
      path: "author",
      model: User,
      select: "id_ clerkId name picture",
    }); // selecting only the id,clerkId,name,picture

    return post;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    throw error;
  }
}

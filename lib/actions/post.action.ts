"use server";

import Post from "@/database/post.model";
import { connectToDatabase } from "../mongoose";
import {
  CreatePostParams,
  GetPostByIdParams,
  GetPostsParams,
} from "./shared.types";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";
import { FilterQuery } from "mongoose";

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

export async function getPosts(params: GetPostsParams) {
  try {
    connectToDatabase();

    const { searchQuery, filter } = params;

    const query: FilterQuery<typeof Post> = {}; // how to read: query of a type FilterQuery and we are filtering something that are a type of Post. {} means that our query at the start is just an empty object

    // if a search query is provided, filter posts by title or content
    if (searchQuery) {
      query.$or = [
        { title: { $regex: new RegExp(searchQuery, "i") } },
        { content: { $regex: new RegExp(searchQuery, "i") } }, // if the content contains the keyword of the search we will also display it
      ];
    }

    let sortOptions = {};

    switch (filter) {
      case "newest":
        sortOptions = { createdAt: -1 }; // sort by the latest posts asked
        break;

      default:
        break;
    }
    const posts = await Post.find(query) // to find post

      .populate({ path: "author", model: User })

      .sort(sortOptions); // to sort from newest post to oldest post (the newer post will be at the top)

    return { posts };
  } catch (error) {
    console.error("Error fetching posts:", error);
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

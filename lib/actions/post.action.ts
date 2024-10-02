"use server";

import { connectToDatabase } from "../mongoose";

export async function createPost(params: any) {
  try {
    connectToDatabase();
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

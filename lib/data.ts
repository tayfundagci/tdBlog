import { mdlPost } from "@/models/Post";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath, unstable_noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
  }
}

export const getPost = async (slug: string) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
  }
}

export const createPost = async (post: mdlPost) => {
  try {
    connectToDb();
    const newPost = new Post(post);
    await newPost.save();
    revalidatePath('/blog');
  } catch (err) {
    console.log(err);
  }
}

export const updatePost = async (id: string, post: mdlPost) => {
  try {
    connectToDb();
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
    return updatedPost;
  } catch (err) {
    console.log(err);
  }
}

export const deletePost = async (id: string) => {
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath('/blog');
  } catch (err) {
    console.log(err);
  }
}

export const getUser = async (id: string) => {
  unstable_noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
  }
}

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
  }
}


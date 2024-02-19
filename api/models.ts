import { IPost } from "@/models/Post";
import { IUser } from "@/models/User";
import mongoose from "mongoose";
import { Schema, InferSchemaType } from 'mongoose';

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, unique: true, min: 3, max: 20 },
  email: { type: String, required: true, unique: true, max: 50 },
  password: { type: String, required: true, min: 6 },
  isAdmin: { type: Boolean, default: false },
  img: { type: String },
}, { timestamps: true });

const postSchema = new mongoose.Schema<IPost>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  userId: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  img: { type: String },
}, { timestamps: true });

type User = InferSchemaType<typeof userSchema>;
type Post = InferSchemaType<typeof postSchema>;

export const User = mongoose.models.User as mongoose.Model<User> || mongoose.model('User', userSchema);
export const Post = mongoose.models.Post as mongoose.Model<Post> || mongoose.model('Post', postSchema);

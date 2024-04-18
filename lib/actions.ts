"use server"
import { signIn, signOut } from "./auth"
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt"

export const handleLogout = async () => {
  await signOut();
}

export const createUser = async (formData: any) => {
  "use client"
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "Passwords do not match!"
  }

  try {
    connectToDb();

    const user = await User.findOne({ username })
    if (user != null)
      return "Username already exists"

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      img: img
    })
    await newUser.save();
    console.log("saved to db");

  } catch (err) {
    console.log(err);


  }
}

export const userLogin = async (formData: any) => {
  const { username, password } = Object.fromEntries(formData);

  try {

    await signIn("credentials", {
      username, password
    })

  } catch (err) {
    console.log(err);
  }

}
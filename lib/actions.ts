"use server"
import { signIn, signOut } from "./auth"
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcrypt"

export const handleLogout = async () => {
  await signOut();
}

export const createUser = async (previousState: any, formData: any) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match!" }
  }

  try {
    connectToDb();

    const user = await User.findOne({ username })
    if (user != null)
      return { error: "Username already exists" }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      img: img
    })
    await newUser.save();
    return { success: true }

  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" }

  }
}

export const userLogin = async (previousState: any, formData: any) => {
  const { username, password } = Object.fromEntries(formData);

  try {

    await signIn("credentials", { username, password })
    return { success: true }

  } catch (err: any) {
    console.log(err);
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" }
    }
    throw err;
  }

} 
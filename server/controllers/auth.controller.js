import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    email === "" ||
    username === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }
  try {
    const hashedPass = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPass });
    await newUser.save();
    res.status(200).json({ message: "Signed in successfully!" });
  } catch (error) {
    next(error);
  }
};

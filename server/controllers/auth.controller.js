import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const passw = bcryptjs.compareSync(password, user.password);
    if (!passw) {
      return res.status(404).json({ message: "Wrong Password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

    const { password: pass, ...rest } = user._doc;
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const google = async (req, res, next) => {
  const { name, email, photoURL } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json(rest);
    } else {
      const genPassword = Math.random().toString(36).slice(-8);
      const hashedPass = bcryptjs.hashSync(genPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-3),
        email,
        password: hashedPass,
        profilePicture: photoURL,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

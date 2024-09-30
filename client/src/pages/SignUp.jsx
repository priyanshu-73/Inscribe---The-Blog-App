import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to={"/"} className="font-bold dark:text-white">
            <span className="text-5xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Inscribe
            </span>
          </Link>
          <p className="text-sm mt-4 font-semibold">
            Welcome to Inscribe, the go-to platform for sharing insightful
            blogs, creative ideas, and meaningful stories. Join a community of
            writers, readers, and thinkers who inspire and engage through
            thoughtful content!
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <Label value="email" />
              <TextInput type="text" placeholder="email" id="email" />
            </div>
            <div>
              <Label value="password" />
              <TextInput type="password" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
            <div className="flex gap-1 text-lg">
              <span>Have an account?</span>
              <Link
                to={"/sign-in"}
                className="font-semibold text-blue-500 hover:text-blue-400"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import { Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { loading } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure("All Fields are required"));
      return;
    }
    try {
      dispatch(signInStart());
      const res = await axios.post("/api/auth/signin", formData, {
        headers: { "Content-Type": "application/json" },
      });
      const data = res.data;
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
      toast.success("Signed in successfully");
    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.message(error.message);
    }
  };
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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="email" />
              <TextInput
                type="email"
                placeholder="email"
                onChange={handleChange}
                id="email"
              />
            </div>
            <div>
              <Label value="password" />
              <TextInput
                type="password"
                placeholder="password"
                onChange={handleChange}
                id="password"
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign in"
              )}
            </Button>
            <OAuth />
            <div className="flex gap-1 text-lg">
              <span>Don't have an account?</span>
              <Link
                to={"/sign-up"}
                className="font-semibold text-blue-500 hover:text-blue-400"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";

export default function Signup() {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-center w-1/2">
        <h1 className="text-center text-[36px] text-[#4F00C1]">Sign up</h1>
        <form className="flex flex-col space-y-6 mx-auto mt-10 w-1/2">
          <input type="text" name="username" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <div className="space-y-2 w-full">
            <label>Upload profile picture</label>
            <input
              className="w-full"
              type="file"
              name="avatar"
              placeholder="Upload a profile picture"
            />
          </div>

          <button
            type="submit"
            className="bg-[#4F00C1] h-[48px] text-white rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-8 text-center">
          Already have an account?{" "}
          <a className="text-[#4F00C1]" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

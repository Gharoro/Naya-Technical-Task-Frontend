import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-center w-1/2">
        <h1 className="text-center text-[36px] text-[#4F00C1]">
          Log In to continue
        </h1>
        <form className="flex flex-col space-y-6 mx-auto mt-10 w-1/2">
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <a href="/forgot_password" className="text-center text-[#4F00C1]">
            Forgot password?
          </a>

          <button
            type="submit"
            className="bg-[#4F00C1] h-[48px] text-white rounded"
          >
            Log In
          </button>
        </form>
        <p className="mt-8 text-center">
          Don't have an account?{" "}
          <a className="text-[#4F00C1]" href="/signup">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
}

"use client"
import React from "react";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={() => signIn("google")}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInButton;

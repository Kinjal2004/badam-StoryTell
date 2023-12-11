"use client";
import React from "react";
import { signIn} from "next-auth/react";


const SignInButton = () => {
 
  const handleSignIn = async () => {
    await signIn("google");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome!</h1>
        <p className="text-gray-600 text-center mb-6">
          Sign in to access your account
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full"
          onClick={handleSignIn}
        >
          Sign In with Google to explore more features
        </button>
        <p className="text-sm text-center mt-4 text-gray-500">
          By signing in, you agree to our terms.
        </p>
      </div>
    </div>
  );
};

export default SignInButton;

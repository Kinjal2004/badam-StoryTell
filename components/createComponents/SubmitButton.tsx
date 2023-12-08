"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  const handleButtonClick = () => {
    onClick();
    toast.success("Your story has been posted!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleHover = (
    e: React.MouseEvent<HTMLTextAreaElement | HTMLHeadingElement>
  ) => {
    const x = Math.floor(Math.random() * 20); // Adjust the range of motion
    const y = Math.floor(Math.random() * 50);
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleHoverOut = (
    e: React.MouseEvent<HTMLTextAreaElement | HTMLHeadingElement>
  ) => {
    e.currentTarget.style.transition = "transform 0.5s ease";
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  return (
    <>
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        onClick={handleButtonClick}
        className="mt-4 bg-gradient-to-r from-pink-600 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-full"
      >
        Post Your Story
      </button>
      <ToastContainer />
    </>
  );
};

export default SubmitButton;

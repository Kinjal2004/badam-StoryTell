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

  const handleHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = Math.floor(Math.random() * 20); 
    const y = Math.floor(Math.random() * 50);
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleHoverOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transition = "transform 0.5s ease";
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  return (
    <>
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        onClick={handleButtonClick}
        className=" d-flex justify-center mt-4 bg-gradient-to-r from-pink-600 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded-full sm:text-lg lg:text-xl" // Adjusted text size for responsiveness
        style={{
          width: "50%", 
          maxWidth: "200px",
          marginRight: "10px",
        }}
      >
        Post Your Story
      </button>
      <ToastContainer />
    </>
  );
};

export default SubmitButton;

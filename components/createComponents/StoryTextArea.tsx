"use client";
import React from "react";

interface StoryTextAreaProps {
  story: string;
  onStoryChange: (value: string) => void;
}

const StoryTextArea: React.FC<StoryTextAreaProps> = ({
  story,
  onStoryChange,
}) => {
  const handleHover = (
    e: React.MouseEvent<HTMLTextAreaElement | HTMLHeadingElement>
  ) => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleHoverOut = (
    e: React.MouseEvent<HTMLTextAreaElement | HTMLHeadingElement>
  ) => {
    e.currentTarget.style.transition = "transform 0.5s ease";
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  return (
    <div className="relative">
      <h1
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        className="text-4xl font-bold mb-4 sm:mb-12 transition duration-300 ease-in-out bg-gradient-to-r from-purple-900 to-indigo-900  text-transparent bg-clip-text"
      >
        Create Your Story
      </h1>
      <textarea
        value={story}
        onChange={(e) => onStoryChange(e.target.value)}
        className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none text-gray-700 bg-gradient-to-br from-blue-700 to-pink-500 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      ></textarea>
    </div>
  );
};

export default StoryTextArea;

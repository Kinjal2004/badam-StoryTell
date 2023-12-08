import React from "react";

interface StoryTextAreaProps {
  story: string;
  onStoryChange: (value: string) => void;
}

const StoryTextArea: React.FC<StoryTextAreaProps> = ({
  story,
  onStoryChange,
}) => {
  return (
    <textarea
      value={story}
      onChange={(e) => onStoryChange(e.target.value)}
      placeholder="Write your story here..."
      className="w-80 h-48 p-2 border border-gray-300 rounded-lg resize-none"
    ></textarea>
  );
};

export default StoryTextArea;

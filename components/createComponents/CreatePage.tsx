"use client";
import React, { useState } from "react";
import StoryTextArea from "./StoryTextArea";
import SubmitButton from "./SubmitButton";

const CreatePage: React.FC = () => {
  const [story, setStory] = useState<string>("");

  const handleStoryChange = (value: string) => {
    setStory(value);
  };

  

  const handleSubmit = () => {
    console.log("Submitted story:", story);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div style={{ maxWidth: "600px", width: "90%" }}>
        {" "}
        {/* Adjust the width for smaller screens */}
        <StoryTextArea story={story} onStoryChange={handleStoryChange} />
        <SubmitButton onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default CreatePage;

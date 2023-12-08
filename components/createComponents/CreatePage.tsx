"use client"
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
    <div
      className="bg-cover bg-center min-h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage:
          "https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-meniscus-fire-cloud-imagination-background-image_2190874.jpg",
      }}
    >
      <h1 className="text-4xl font-bold mb-6">Create Your Story</h1>
      <StoryTextArea story={story} onStoryChange={handleStoryChange} />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default CreatePage;

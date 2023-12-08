"use client";
import React, { useState } from "react";
import StoryTextArea from "./StoryTextArea";
import SubmitButton from "./SubmitButton";

const CreatePage: React.FC = () => {
  const [story, setStory] = useState<string>("");

  const handleStoryChange = (value: string) => {
    setStory(value);
  };

  const backgroundImageStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    backgroundImage: `url("https://img.freepik.com/premium-photo/space-planet-landscape-background-generative-ai_983314-2054.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: "50%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    filter: "brightness(120%)",
  };

  const handleSubmit = () => {
    console.log("Submitted story:", story);
  };

  return (
    <div style={backgroundImageStyle}>
      <StoryTextArea story={story} onStoryChange={handleStoryChange} />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default CreatePage;

"use client";
import React, { useState } from "react";
import StoryTextArea from "./StoryTextArea";
import SubmitButton from "./SubmitButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePage: React.FC = () => {
  const [story, setStory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);

  const handleStoryChange = (value: string) => {
    setStory(value);
  };

  const handleSubmit = () => {
    console.log("Submitted Title:", title);
    console.log("Submitted Story:", story);
    console.log("Selected Genres:", genres);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div style={{ maxWidth: "600px", width: "90%" }}>
        {" "}
        <StoryTextArea story={story} onStoryChange={handleStoryChange} />
        <div className="mb-4">
          <p className="mb-2">Genres:</p>
          <div className="flex flex-wrap">
            {[
              "Fantasy",
              "Horror",
              "Science Fiction",
              "Romantic",
              "Non-Fiction",
              "Mystery",
              "Fable",
              "Legend",
              "Thriller",
              "Comedy",
              "Folklore",
            ].map((genre) => (
              <button
                key={genre}
                className={`mr-2 mb-2 py-2 px-4 rounded-md text-white ${
                  genres.includes(genre) ? "bg-green-500" : "bg-red-500"
                } hover:bg-blue-600 focus:outline-none focus:bg-blue-600`}
                onClick={() => handleGenreChange(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        <SubmitButton onClick={handleSubmit} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreatePage;

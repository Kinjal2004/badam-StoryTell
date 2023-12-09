"use client";
import React, { useState } from "react";
import StoryTextArea from "./StoryTextArea";
import SubmitButton from "./SubmitButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CreatePage: React.FC = () => {
  const [story, setStory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);

  const handleStoryChange = (value: string) => {
    setStory(value);
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleGenreChange = (selectedGenre: string) => {
    const genreIndex = genres.indexOf(selectedGenre);
    let updatedGenres: string[];

    if (genreIndex === -1) {
      updatedGenres = [...genres, selectedGenre];
      toast.success(`${selectedGenre} tag added`, { className: "green-toast" });
    } else {
      updatedGenres = genres.filter((genre) => genre !== selectedGenre);
      toast.error(`${selectedGenre} tag removed`, { className: "red-toast" });
    }

    setGenres(updatedGenres);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("./api/createStory", {
        title,
        story,
        genres,
      });

      console.log("Server Response:", response);
      console.log("Submitted Title:", title);
      console.log("Submitted Story:", story);
      console.log("Selected Genres:", genres);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-300 flex justify-center items-center">
      <div className="max-w-lg w-full mx-4 p-6 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Story Title"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className=" bg-black text-white mt-20 w-full mb-4 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
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

"use client";
import React, { useState } from "react";
import StoryTextArea from "./StoryTextArea";
import SubmitButton from "./SubmitButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

interface CreatePageProps{
  userData : any;
}

const CreatePage: React.FC<CreatePageProps> = ({userData}) => {
  const [story, setStory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [genres, setGenres] = useState<string[]>([]);
  const author = userData?(userData.user.email):(null);

  const handleStoryChange = (value: string) => {
    setStory(value);
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleGenreChange = (selectedGenre: string) => {
    setGenres([selectedGenre]);
    toast.success(`${selectedGenre} tag added`, { className: "green-toast" });
  };


  const handleSubmit = async () => {
    try {
      if (!title || !story || genres.length === 0) {
        console.error(
          "Error: Title, story, or genres is empty. Cannot submit."
        );
        return;
      }
      const selectedGenre = genres[0] || "";
      const response = await axios.post("./api/createStory", {
        title: title,
        story: story,
        genres: selectedGenre,
        author: author,
      });

      console.log("Submitted Title:", title);
      console.log("Submitted Story:", story);
      console.log("Selected Genre:", selectedGenre);
      console.log("Author:",author);

      console.log("Server Response:", response.data);

      setTitle("");
      setStory("");
      setGenres([]);
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

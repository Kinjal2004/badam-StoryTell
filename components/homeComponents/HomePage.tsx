"use client";
import React, { useState } from "react";
import ExploreFeed from "./ExploreFeed";
import Leaderboard from "./Leaderboard";

interface HomePageProps {
  postData: Post[];
}

interface Post {
  id: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  tag: string;
  liked: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ postData }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-cyan-500 to-purple-700">
      <ExploreFeed stories={postData} />
      <Leaderboard stories={postData} />
    </div>
  );
};

export default HomePage;

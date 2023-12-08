"use client";
import React, { useState } from "react";
import ExploreFeed from "./ExploreFeed";
import Leaderboard from "./Leaderboard";

interface HomePageProps {
  postData: Post[];
}

interface Post {
  id: number;
  user: string;
  content: string;
  likes: number;
  tags: string[];
  liked: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ postData }) => {
  return (
    <div>
      <ExploreFeed stories={postData} />
      <Leaderboard stories={postData} />
    </div>
  );
};

export default HomePage;

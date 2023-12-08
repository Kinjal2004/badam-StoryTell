"use client";
import React, { useState } from "react";
import ExploreFeed from "./ExploreFeed";
import Search from "./Search";
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
}

const HomePage: React.FC<HomePageProps> = ({ postData }) => {
  return (
    <div>
      <Search stories={postData} />
      <ExploreFeed stories={postData} />
      <Leaderboard stories={postData} />
    </div>
  );
};

export default HomePage;

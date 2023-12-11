"use client";
import React, { useState } from "react";
import ExploreFeed from "./ExploreFeed";
import Leaderboard from "./Leaderboard";

interface HomePageProps {
  postData: Post[];
  likeData: Like[];
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

interface Like{
  id: string;
  user: string;
  userId: string;
  postId : string;
}


const HomePage: React.FC<HomePageProps> = ({ postData, likeData }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-cyan-500 to-purple-700">
      <ExploreFeed stories={postData} likes={likeData}/>
      <Leaderboard stories={postData} />
    </div>
  );
};

export default HomePage;

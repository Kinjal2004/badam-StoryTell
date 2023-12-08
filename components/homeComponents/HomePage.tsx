"use client";
import React, { useState } from "react";
import ExploreFeed from "./ExploreFeed";
import Search from "./Search";
import Leaderboard from "./Leaderboard";

interface Post {
  id: number;
  user: string;
  content: string;
  likes: number;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, user: "User1", content: "Post 1", likes: 10 },
    { id: 2, user: "User2", content: "Post 2", likes: 15 },
    { id: 3, user: "User3", content: "Post 3", likes: 12 },
    { id: 4, user: "User4", content: "Post 4", likes: 19 },
    { id: 5, user: "User5", content: "Post 5", likes: 24 },
    { id: 6, user: "User6", content: "Post 6", likes: 54 },
    { id: 7, user: "User7", content: "Post 7", likes: 36 },
  ]);

  const handleLike = (postId: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div>
      <Search posts={posts} />
      <ExploreFeed />

      <Leaderboard posts={posts} />
    </div>
  );
};

export default HomePage;

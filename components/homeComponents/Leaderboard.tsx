"use client";
import React from "react";
import { FaTrophy } from "react-icons/fa";

interface Post {
  id: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  tag: string;
  liked: boolean;
}

interface LeaderboardProps {
  stories: Post[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ stories }) => {
  const sortedPosts = [...stories].sort((a, b) => b.likes - a.likes);

  return (
    <div className="mt-5 p-6 rounded-lg shadow-md ">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-2xl text-white font-bold">Leaderboard</h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {sortedPosts.map((post, index) => (
          <div key={post.id} className="bg-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-white">
                {index + 1}.
              </span>
              {(index === 0 || index === 1 || index === 2) && (
                <span className="text-sm inline-flex items-center text-white">
                  {index === 0 && <FaTrophy className="mr-1 text-yellow-400" />}
                  {index === 1 && <FaTrophy className="mr-1 text-gray-300" />}
                  {index === 2 && <FaTrophy className="mr-1 text-orange-500" />}
                  Rank {index + 1}
                </span>
              )}
              {index > 2 && (
                <span className="text-sm text-white">Rank {index + 1}</span>
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-white font-semibold mb-1">
                {post.title}
              </p>
              <p className="text-sm text-gray-300">
                by {post.author} - Likes: {post.likes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;

"use client";
import React from "react";

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
    <div className="mt-5 bg-gradient-to-l from-purple-400 to-indigo-300  p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className="divide-y divide-gray-300">
        {sortedPosts.map((post, index) => (
          <div key={post.id} className="py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-semibold">{index + 1}.</span>
              <div>
                <span className="flex items-center">
                  <p className="text-lg font-semibold mr-2">{post.title}</p>
                  <p className="text-lg font-semibold mr-2">by</p>
                  <p className="text-lg font-semibold">{post.author}</p>
                </span>
                <p className="text-gray-600">Likes: {post.likes}</p>
              </div>
            </div>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
              Rank {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;

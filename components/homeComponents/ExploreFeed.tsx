"use client";
import React, { useState } from "react";

interface Post {
  id: number;
  user: string;
  content: string;
  likes: number;
  tags: string[];
}

interface ExploreFeedProps {
  stories: Post[];
}

const ExploreFeed: React.FC<ExploreFeedProps> = ({stories}) => {
  const [posts, setPosts] = useState<Post[]>(stories);

  const handleLike = (postId: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="s bg-gradient-to-r from-orange-400 to-blue-300">
      <h2 className=" mt-5 py-14 text-3xl font-bold text-center">
        Explore Feed
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg overflow-hidden">
            <div className="p-4">
              <p className="text-lg font-semibold">{post.user}</p>
              <p className="text-gray-600 mt-2">{post.content}</p>
              <p className="text-gray-500 mt-2">Likes: {post.likes}</p>
              <div className="flex justify-between mt-4">
                <div>
                  {post.tags.map((index,tag) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleLike(post.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
                >
                  Like
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreFeed;

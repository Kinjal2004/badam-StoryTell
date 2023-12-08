"use client"
import React, { useState } from "react";

interface Post {
  id: number;
  user: string;
  content: string;
  likes: number;
  tags: string[];
}

interface SearchProps {
  stories: Post[];
}

const Search: React.FC<SearchProps> = ({ stories }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = stories.filter(
    (post) =>
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className=" bg-gradient-to-r from-purple-400 to-indigo-300  p-6 mt-20 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 rounded-md py-2 px-4 w-full mb-6 focus:outline-none focus:border-blue-500"
      />
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-lg font-semibold">{post.user}</p>
                <p className="text-gray-600 mt-2">{post.content}</p>
                <p className="text-gray-500 mt-2">Likes: {post.likes}</p>
                <div className="flex flex-wrap mt-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No results found</p>
      )}
    </div>
  );
};

export default Search;

/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getSession } from "next-auth/react";

interface Post {
  id: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  tag: string;
  liked: boolean;
}

interface Like {
  id: string;
  user: string;
  userId: string;
  postId: string;
}

interface ExploreFeedProps {
  stories: Post[];
  likes: Like[];
}

const ExploreFeed: React.FC<ExploreFeedProps> = (
  { stories, likes },
  context
) => {
  const router = useRouter();
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>(stories);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [session, setSession] = useState(null);
  const likedPost = likes.map(like => like.postId)



  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession(context);
      setSession(session);
    };

    fetchData();
  }, [context]);

  const handleLike =
    (postId: string) => async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      try {
        const response = await axios.put("./api/updateLike", {
          id: postId,
          userName: session.user.name,
          email: session.user.email,
        });

        if (response.status === 200) {
          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.id === postId && !post.liked
                ? { ...post, likes: post.likes + 1, liked: true }
                : post
            )
          );
          window.location.reload()
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };

  const handleDislike =
    (postId: string) => async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      const targetLike = likes.find((like) => like.postId == postId);
      try {
        const response = await axios.put("./api/updateDislike", {
          id: postId,
          likeId: targetLike.id,
        });

        if (response.status === 200) {
          setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.id === postId && post.liked
                ? { ...post, likes: post.likes - 1, liked: false }
                : post
            )
          );
          window.location.reload()
        } else {
        }
      } catch (e) {
        console.log(e);
      }
    };

  const handleClick = (postId: string) => {
    setSelectedPost(postId === selectedPost ? null : postId);
    router.push(`/${postId}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="a̶r̶y̶a̶(honestly, ei random naam ta kar?)Kinjal">
      <h2 className=" text-white mt-5 py-14 text-3xl font-bold text-center">
        Explore Feed
      </h2>
      <div className="w-[60vw] mb-4 mx-auto flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300  rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-center">
        {!session ? (
          // Render this if the session exists
          <>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEOhvWmaylNLRBQ7IvyoJh22IUBjRde8AnQ&usqp=CAU"
              alt="Cute Avatar"
              className="w-24 h-24 mx-auto mb-4 rounded-full"
            />
            <h1 className="text-black text-xl mb-2">
              Hey there! Move to Profile Or Create Page and Sign in
            </h1>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-7">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className={` bg-white border border-blue-300 rounded-lg overflow-hidden transform transition-transform hover:scale-110`}
              onClick={() => handleClick(post.id)}
            >
              <div className="p-4">
                <p className="text-lg font-semibold">{post.title}</p>
                <p className="text-gray-600 mt-2">{post.content}</p>
                <p className="text-gray-500 mt-2">Likes: {post.likes}</p>
                <div className="flex justify-between mt-4">
                  <div>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {post.tag}
                    </span>
                  </div>
                  {session ? (
                    <div>
                    {(() => {
                      let liked = likedPost.includes(post.id);
                  
                      const handleClick = (postId, event) => {
                        if (liked) {
                          handleDislike(postId)(event);
                        } else {
                          handleLike(postId)(event);
                        }
                  
                      };
                  
                      return (
                        <>
                          <button
                            onClick={(event) => handleClick(post.id, event)}
                            disabled={liked}
                            className={`bg-blue-500 text-white px-3 py-1 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ${
                              liked ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                          >
                            {liked ? <FaThumbsUp /> : <FaThumbsUp />}
                          </button>
                          <button
                            onClick={(event) => handleClick(post.id, event)}
                            disabled={!liked}
                            className={`bg-red-500 text-white px-3 py-1 rounded-md mt-4 ml-2 hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300 ${
                              !liked ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                          >
                            {!liked ? <FaThumbsDown /> : <FaThumbsDown />}
                          </button>
                        </>
                      );
                    })()}
                  </div>
                  
                  
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No results found</p>
        )}
      </div>
    </div>
  );
};

export default ExploreFeed;

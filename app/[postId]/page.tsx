import { FC } from "react";
import { redirect } from "next/navigation";
import { getStoryData } from "../stories";

interface PageProps {
  params: { postId: string };
}

export default async function ({ params }) {
  const postData = await getStoryData();
  const post = postData.find((post) => post.id === params.postId);
  if (!post) {
    // Post not found, redirect to 404 page
    return null; // You can also render a 404 component here if you prefer
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Story Details</h1>
        <div className="border p-4 rounded-md shadow-md">
          <p className="mb-2">Title: {post.title}</p>
          <p className="mb-2">Author: {post.author}</p>
          <p className="mb-2">Content: {post.content}</p>
          <p className="mb-2">Likes: {post.likes}</p>
          <p className="mb-2">Tags: {post.tag}</p>
          <p className="mb-2">Time: {post.createdAt.toString()}</p>
        </div>
      </div>
    </div>
  );
}

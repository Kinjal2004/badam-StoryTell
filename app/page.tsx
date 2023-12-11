import HomePage from "@/components/homeComponents/HomePage";
import { getStoryData } from "./stories";
import { getServerSession } from "next-auth/next";
import prisma from "@/db";

export default async function Home(context: any) {
  const session = await getServerSession(context);
  const storyData = await getStoryData();
  let likeData = [];

  // Check if session exists before fetching likeData
  if (session) {
    likeData = await prisma.Like.findMany({
      where: {
        userId: session.user.email,
      },
    });
  }
  return <HomePage postData={storyData} likeData={likeData} />;
}


import prisma from "@/db";

export const getStoryData = async () => {
  const storyData = await prisma.Story.findMany();
  return storyData;
};

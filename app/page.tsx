import HomePage from "@/components/homeComponents/HomePage";

import prisma from "@/db";

export default async function Home(){
  const storyData = await prisma.Story.findMany();
  console.log(storyData)
  return <HomePage postData={storyData}/>;
};



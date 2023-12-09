import HomePage from "@/components/homeComponents/HomePage";
import { getStoryData } from "./stories";

export default async function Home() {
  const storyData = await getStoryData();
  return <HomePage postData={storyData} />;
}

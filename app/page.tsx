import HomePage from "@/components/homeComponents/HomePage";

const postData = [
  { id: 1, user: "User1", content: "Post 1", likes: 100, tags: ["Tag1", "Tag2"] },
  { id: 2, user: "User2", content: "Post 2", likes: 15, tags: ["Tag3", "Tag4"] },
  { id: 3, user: "User3", content: "Post 3", likes: 12, tags: ["Tag5", "Tag6"] },
  { id: 4, user: "User4", content: "Post 4", likes: 19, tags: ["Tag7", "Tag8"] },
  { id: 5, user: "User5", content: "Post 5", likes: 24, tags: ["Tag9", "Tag10"] },
  { id: 6, user: "User6", content: "Post 6", likes: 54, tags: ["Tag11", "Tag12"] },
  { id: 7, user: "User7", content: "Post 7", likes: 36, tags: ["Tag13", "Tag14"] },
];


const Home: React.FC = () => {
  return <HomePage postData={postData}/>;
};

export default Home;

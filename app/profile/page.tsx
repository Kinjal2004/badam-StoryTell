import React from "react";
import dynamic from "next/dynamic";
import { getServerSession } from "next-auth/next";
import SignInButton from "@/components/Login";

const Chart = dynamic(() => import("@/components/profileComponents/Chart"), {
  ssr: false,
});

const data = [
  { name: "Story 1", likes: 17 },
  { name: "Story 2", likes: 33 },
  { name: "Story 3", likes: 21 },
  { name: "Story 4", likes: 11 },
  { name: "Story 5", likes: 5 },
];

export default async function Dashboard(context: any) {
  const session = await getServerSession(context);
  const kitten_url = "https://t4.ftcdn.net/jpg/05/51/22/65/360_F_551226555_JoynWcUCPb7U68psjX0PnNG51WF4to2E.jpg"
  return (
    <div className="bg-slate-700 min-h-screen p-4">
      {session ? (
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-16 mb-4">
          <div className="flex flex-col items-center mb-6">
            <img
              src={session.user.image||kitten_url}
              className="w-20 h-20 rounded-full mb-4"
              style={{ objectFit: "cover" }}
            />

            <h1 className="text-2xl font-bold text-slate-700">
              {session.user.name}
            </h1>
            <p className="text-gray-600">{session.user.email}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-700 mb-4">
              Published Stories
            </h2>
            <ul>
              {data.map((story, index) => (
                <li key={index} className="mb-2">
                  {story.name}
                </li>
              ))}
            </ul>
          </div>

          <Chart chartData={data} />
        </div>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

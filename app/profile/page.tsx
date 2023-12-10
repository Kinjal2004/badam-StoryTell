import React from "react";
import dynamic from "next/dynamic";
import { getServerSession } from "next-auth/next";
import SignInButton from "@/components/Login";
import prisma from "@/db";
import DeleteButton from "@/components/profileComponents/DeleteButton";

const Chart = dynamic(() => import("@/components/profileComponents/Chart"), {
  ssr: false,
});

export default async function Dashboard(context: any) {
  const session = await getServerSession(context);
  const kitten_url =
    "https://t4.ftcdn.net/jpg/05/51/22/65/360_F_551226555_JoynWcUCPb7U68psjX0PnNG51WF4to2E.jpg";
  const uid = session ? session.user.email : "";

  const data = await prisma.Story.findMany({
    where: {
      author: uid,
    },
  });

  return (
    <div className="bg-slate-700 min-h-screen p-4">
      {session ? (
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-16 mb-4">
          <div className="flex flex-col items-center mb-6">
            <img
              src={session.user.image || kitten_url}
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
            {data && data.length > 0 ? (
              <ul className="list-none p-0">
                {data.map((story: any, index: any) => (
                  <li
                    key={index}
                    className="mb-2 flex items-center justify-between"
                  >
                    <div>
                    <span className="font-bold mr-2">{index + 1}.</span>
                    <span className="text-gray-800">{story.title}</span>
                    </div>
                    <DeleteButton id={story.id}/>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Publish a story</p>
            )}
          </div>

          {data && data.length > 0 && <Chart chartData={data} />}
        </div>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

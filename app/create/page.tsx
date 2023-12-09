import React from "react";
import { getServerSession } from "next-auth/next";
import SignInButton from "@/components/Login";
import CreatePage from "@/components/createComponents/CreatePage";

export default async function Create(context: any) {
  const session = await getServerSession(context);

  return (
    <div className="bg-slate-700 min-h-screen p-4">
      {session ? <CreatePage /> : <SignInButton />}
    </div>
  );
}

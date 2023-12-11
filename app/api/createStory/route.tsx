import prisma from "@/db";
import { NextResponse } from "next/server";
import { Request } from "next";

export async function POST(req: Request) {
  try {
    const data = await req.json();
   
    await prisma.Story.create({
      data:{
          title: data.title,
          content : data.story,
          likes : 0,
          tag : data.genres,
          liked : false,
          author : data.author,
      }
  })
    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.log(e);
  }
}

import prisma from "@/db";
import { NextResponse } from "next/server";
import { parse } from "url";
import { Request } from "next";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // console.log(data.title);
    // console.log(data.story);
    // console.log(data.genres);
    await prisma.Story.create({
      data:{
          title: data.title,
          content : data.story,
          likes : 0,
          tag : data.genres,
          liked : false,
      }
  })
    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.log(e);
  }
}

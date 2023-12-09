import prisma from "@/db";
import { NextResponse } from "next/server";
import { parse } from "url";
import { Request } from "next";

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    // console.log(data.title);
    // console.log(data.story);
    // console.log(data.genres);
    await prisma.Story.update({
      where: {
        id: data.id,
      },data:{
        likes:{
          decrement : 1,
        }
      }
    });
    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.log(e);
  }
}

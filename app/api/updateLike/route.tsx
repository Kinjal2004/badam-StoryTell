import prisma from "@/db";
import { NextResponse } from "next/server";
import { parse } from "url";
import { Request } from "next";

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    await prisma.Story.update({
      where: {
        id: data.id,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
    await prisma.Like.create({
      data: {
        user: data.userName,
        userId: data.email,
        postId: data.id,
      },
    });

    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.log(e);
  }
}

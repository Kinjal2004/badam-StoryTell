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
          decrement: 1,
        },
      },
    });
    await prisma.Like.delete({
      where:{
        id : data.likeId
      }
    })
    
    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.log(e);
  }
}

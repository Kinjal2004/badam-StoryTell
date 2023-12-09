import prisma from "@/db";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function POST(req: Request) {
  try {
    console.log(req.url);
    const { query } = parse(req.url, true);
    const title = query.title as string;
    console.log(title);
    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.log(e);
  }
}

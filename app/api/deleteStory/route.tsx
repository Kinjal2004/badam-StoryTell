import prisma from "@/db";
import { NextResponse } from "next/server";
import { Request } from "next";
import {parse} from "url";


export async function DELETE(req: Request) {
    try{
        const {query} = parse(req.url, true)
        const id = query.id as string;
        await prisma.Story.delete({
            where:{
                id : id,
            },
        });
        return NextResponse.json({ status: 200 });
    }catch(e){
        console.log(e)
    }
    
}
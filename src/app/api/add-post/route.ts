import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { title, content } = data;
        const published = true;
        console.log("client side data : ", data);
        const result = await prisma.post.create({
            data: {
                title,
                content,
                published,
                author: { create: { name: "aditya" } },
            }
        })
        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: "Invalid JSON provided" }, { status: 400 });
    }
}

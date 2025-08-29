import prisma from "../../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Correct function signature for Next.js 14 App Router
export async function DELETE(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } // params is now a Promise
) {
  try {
    // Await the params promise to get the actual values
    const resolvedParams = await params;
    const id = resolvedParams.id;

    // Use Prisma to delete the post with the matching ID
    const deletedPost = await prisma.post.delete({
      where: { id },
    });
    
    return NextResponse.json(deletedPost);
    
  } catch (error) {
    // Handle cases where the post might not exist
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete post or post not found" },
      { status: 500 }
    );
  }
}
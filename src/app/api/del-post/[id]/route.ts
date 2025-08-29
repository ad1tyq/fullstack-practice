import prisma from "../../../../../lib/prisma";
import { NextResponse } from "next/server";

// Add the correct types for the parameters
export async function DELETE(
    request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    // Use Prisma to delete the post with the matching ID
    const deletedPost = await prisma.post.delete({
      where: { id },
    });
    
    return NextResponse.json(deletedPost);
    
  } catch (error) {
    // Handle cases where the post might not exist
    return NextResponse.json(
      { error: "Failed to delete post or post not found" },
      { status: 500 }
    );
  }
}

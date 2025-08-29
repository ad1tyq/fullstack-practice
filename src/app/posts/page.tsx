import prisma from "../../../lib/prisma";
import Post from "@/components/Post";
import Link from "next/link";
async function getPosts() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true }
            }
        }
    })
    return posts;
}
async function Page() {
    const posts = await getPosts();
    if (posts.length === 0 || !posts) {
        return (
            <div className="min-h-screen flex flex-col items-center">
                <div className="flex flex-col gap-5 items-center m-5">
                    <h1 className="text-3xl font-bold">FEED</h1>
                    <div className="border p-4 mb-4 rounded-lg shadow-md w-full max-w-2xl bg-white">
                        <h2 className="text-2xl font-bold text-gray-800">No Posts Available</h2>
                    </div>
                    <Link href="/add-post" className="border py-2 text-sm hover:bg-white transition-all duration-300 
                    hover:text-black px-4 rounded-2xl">Add Post</Link>
                </div>
            </div>
        )
    }
    console.log({ posts });
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="flex gap-5 justify-center m-5">
                <h1 className="text-3xl font-bold">FEED</h1>
                <Link href="/add-post" className="border py-2 text-sm hover:bg-white transition-all duration-300 
                hover:text-black px-4 rounded-2xl">Add Post</Link>
            </div>
            {posts.map((post) => {
                return (
                    <div key={post.id} className="w-[30rem]">
                        <Post id={post.id}
                            title={post.title}
                            content={post.content}
                            published={post.published}
                            authorName={post.author?.name ?? null}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default Page;
"use client";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
function Page() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            await fetch('/api/add-post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content }),
            });
        } catch (error){
            console.log(error);
        }


        // Simulate API call delay
        setTimeout(() => {
            setIsLoading(false);
            setTitle('');
            setContent('');
            router.push('/posts');
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-2xl">
                {/* --- Header --- */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-white">Add New Post</h1>
                    <Link
                        href="/posts"
                        className="border py-2 text-sm hover:bg-white transition-all duration-300 hover:text-black
                        px-4 rounded-2xl">
                        Go Back
                    </Link>
                </div>

                {/* --- Form Card --- */}
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* --- Title Input --- */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                required
                                className="w-full p-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter a title for your post"
                            />
                        </div>

                        {/* --- Content Textarea --- */}
                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                                Content
                            </label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={handleContentChange}
                                required
                                rows={6}
                                className="w-full p-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Write your post content here..."
                            />
                        </div>

                        {/* --- Submit Button --- */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 disabled:bg-indigo-300 cursor-pointer transition-colors duration-300"
                        >
                            {isLoading ? 'Submitting...' : 'Submit Post'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
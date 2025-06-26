import { MDXRemote } from 'next-mdx-remote-client/rsc';
import posts from '../../../../public/cache/posts.json';

import Link from "next/link";

type PostData = {
    title: string;
    date: string;
    description: string;
    content: string;
    img: string;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postObject = posts[slug as keyof typeof posts];

    if (!postObject || typeof postObject !== 'object' || !('data' in postObject)) {
        return <div className="text-red-500">Post not found</div>;
    }

    const postData = postObject.data as PostData;

    return (
        <div>
            <div className="border-b py-2 mb-5 flex flex-row justify-between items-baseline">
                <h1 className="text-2xl font-bold">{postData.title || ' '}</h1>
                <span className="ml-3 text-sm text-gray-500 font-normal">{postData.date || ' '}</span>
            </div>
            <div className="flex md:flex-row flex-col-reverse gap-5">
                <div className="w-full lg:w-3/5">
                    <div className="mb-5 pt-5 w-full border-b pb-3" dangerouslySetInnerHTML={{ __html: postData.description || ' ' }}></div>
                    <div className="markdown-content">
                        <MDXRemote source={postObject.content} />
                    </div>
                </div>
                <div className="w-full lg:w-2/5 top-10 h-100 md:h-auto">
                    <Link href={postData.img} target="_blank" rel="noopener noreferrer">
                        <img src={postData.img} alt={postData.title} className="w-full h-full object-cover h-auto border rounded-md" />
                    </Link>
                </div>
            </div>

        </div>
    );
}
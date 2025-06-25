import path from "path";
import posts from '../../updates.json';
import SideCard from '@/app/components/SideCard';
import { readFile, access } from "fs/promises";

import { evaluate, type EvaluateOptions, MDXRemote } from "next-mdx-remote-client/rsc";

const POSTS_FOLDER = path.join('/../../src/content/posts');

type Frontmatter = {
    title: string;
    date: string;
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts[slug as keyof typeof posts];
    const source = await readPostFile(slug);

    if (!post || !source) {
        return <div>Post not found</div>;
    }

    const options: EvaluateOptions = {
        mdxOptions: {},
        parseFrontmatter: true,
    };

    const { content, frontmatter } = await evaluate<Frontmatter>({
        source,
        options
    });

    return (
        <div>
            <div className="border-b py-2 mb-5 flex flex-row justify-between items-baseline">
                <h1 className="text-2xl font-bold">{frontmatter.title || ' '}</h1>
                <span className="ml-3 text-sm text-gray-500 font-normal">{frontmatter.date || ' '}</span>
            </div>
            <div className="flex md:flex-row flex-col-reverse gap-5">
                <div className="w-full lg:w-3/5">
                    <div className="mb-5 pt-5 w-full border-b pb-3" dangerouslySetInnerHTML={{ __html: post.description || ' ' }}></div>
                    <div className="markdown-content">
                        {content}
                    </div>
                </div>
            </div>

        </div>
    );
}

async function readPostFile(slug: string) {
    const p = path.join(process.cwd(), POSTS_FOLDER, `${slug}.mdx`);
    const filePath = path.resolve(p);

    try {
        await access(filePath);
    } catch (err) {
        return null;
    }

    const fileContent = await readFile(filePath, { encoding: "utf8" });
    return fileContent;
}

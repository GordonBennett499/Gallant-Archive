import path from "path";
import { readFile, access } from "fs/promises";
import { evaluate, type EvaluateOptions } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";

const POSTS_FOLDER = path.join('/../../src/content/posts');

type Frontmatter = {
    slug: string;
    title: string;
    lastUpdated: string;
    date: string;
    description: string;
    content: string;
    img: string;
    tags?: string[];
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const postContent = await readPostFile(slug);
    const source = await readPostFile(slug);

    if (!postContent || !source) {
        return <div>Post not found</div>;
    }

    const options: EvaluateOptions = {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
        },
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
                    <div className="mb-5 w-full border-b pb-3" dangerouslySetInnerHTML={{ __html: frontmatter.description || ' ' }}></div>
                    <div className="markdown-content">
                        {content}
                    </div>
                </div>
                {frontmatter.img && (
                    <div className="w-full lg:w-2/5 top-10 h-100 md:h-auto">
                        <Link href={frontmatter.img} target="_blank" rel="noopener noreferrer">
                            <img src={frontmatter.img} alt={frontmatter.title} className="w-full h-full object-cover h-auto border rounded-md" />
                        </Link>
                    </div>
                )}
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
import { evaluate, EvaluateOptions, MDXRemote } from 'next-mdx-remote-client/rsc';
import SideCard from '@/app/components/SideCard';
import remarkGfm from 'remark-gfm';
import path from 'path';
import { access, readFile } from 'fs/promises';

const POSTS_FOLDER = path.join('/../../src/content/projects');

type Frontmatter = {
    title: string;
    description: string;
    content: string;
}

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
            <h1 className="text-2xl font-bold border-b py-2 mb-5">{frontmatter.title || ' '}</h1>
            <div className="flex md:flex-row flex-col-reverse gap-5">
                <div className="w-full lg:w-3/5">
                    <div className="mb-5 pt-5 w-full border-b pb-3" dangerouslySetInnerHTML={{ __html: frontmatter.description || ' ' }}></div>
                    <div className="markdown-content">
                        { content }
                    </div>
                </div>
                <div className="w-full lg:w-2/5 top-10">
                    <SideCard data={frontmatter} />
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
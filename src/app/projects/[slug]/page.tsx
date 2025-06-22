import path from "path";
import projects from '../../projects.json';
import SideCard from '@/app/components/SideCard';
import { readFile, access } from "fs/promises";

import { evaluate, type EvaluateOptions, MDXRemote } from "next-mdx-remote-client/rsc";

const POSTS_FOLDER = path.join('/../../src/content/projects');

type Frontmatter = {
    title: string;
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects[slug as keyof typeof projects];

    const source = await readPostFile(slug);
    const options: EvaluateOptions = {
        mdxOptions: {},
        parseFrontmatter: true,
    };

    if (!source) {
        return <div className="text-center text-red-500">Project not found</div>;
    }

    const { content, frontmatter } = await evaluate<Frontmatter>({
        source,
        options
    });

    return (
        <div>
            <h1 className="text-2xl font-bold border-b py-2 mb-5">{project.title || ' '}</h1>
            <div className="flex md:flex-row flex-col-reverse gap-5">
                <div className="w-full lg:w-3/5">
                    <div className="mb-5 pt-5 w-full border-b pb-3" dangerouslySetInnerHTML={{ __html: project.description || ' ' }}></div>
                    <div className="markdown-content">
                        {content}
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

import { MDXRemote } from 'next-mdx-remote-client/rsc';
import projects from '../../../../public/cache/projects.json';
import SideCard from '@/app/components/SideCard';

type ProjectData = {
    title: string;
    description: string;
    content: string;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const projectObject = projects[slug as keyof typeof projects];

    if (!projectObject || typeof projectObject !== 'object' || !('data' in projectObject)) {
        return <div className="text-red-500">Post not found</div>;
    }

    const projectData = projectObject?.data as ProjectData;

    return (
        <div>
            <h1 className="text-2xl font-bold border-b py-2 mb-5">{projectData.title || ' '}</h1>
            <div className="flex md:flex-row flex-col-reverse gap-5">
                <div className="w-full lg:w-3/5">
                    <div className="mb-5 pt-5 w-full border-b pb-3" dangerouslySetInnerHTML={{ __html: projectData.description || ' ' }}></div>
                    <div className="markdown-content">
                        <MDXRemote source={projectObject.content} />
                    </div>
                </div>
                <div className="w-full lg:w-2/5 top-10">
                    <SideCard data={projectData} />
                </div>
            </div>

        </div>
    );
}
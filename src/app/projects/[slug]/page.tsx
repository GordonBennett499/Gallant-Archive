import { log } from 'console';
import { promises as fs } from 'fs';
import projects from '../../projects.json';
import SideCard from '@/app/components/SideCard';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects[slug as keyof typeof projects];

    return (
        <div>
            <h1 className="text-2xl font-bold border-b py-2 mb-5">{project.title || ' '}</h1>
            <div className="flex md:flex-row flex-col-reverse gap-5">
                <div className="w-full lg:w-3/5">
                    <div className="mb-5 pt-5 w-full border-b pb-1" dangerouslySetInnerHTML={{ __html: project.description || ' ' }}></div>
                    <div dangerouslySetInnerHTML={{ __html: project.content || ' ' }}></div>
                </div>
                <div className="w-full lg:w-2/5 top-10">
                    <SideCard data={project} />
                </div>
            </div>

        </div>
    );
}
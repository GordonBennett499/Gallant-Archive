import { log } from 'console';
import {promises as fs} from 'fs';
import { getProject } from '@/app/api';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const project = await getProject(slug);

    return (
        <div>
            <h1 className="text-2xl font-bold border-b py-2 mb-5">{project.title}</h1>
            <div className="mb-5" dangerouslySetInnerHTML={{ __html: project.description || ' ' }}></div>
            <div dangerouslySetInnerHTML={{ __html: project.content || ' ' }}></div>
        </div>
    );
}
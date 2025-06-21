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
            <div className='flex md:flex-row  flex-col-reverse justify-between gap-5'>
                <div className='w-full w-md-[75%] min-w-[25%]'>
                    <div className="mb-5 pt-5 w-full border-b pb-1" dangerouslySetInnerHTML={{ __html: project.description || ' ' }}></div>
                    <div dangerouslySetInnerHTML={{ __html: project.content || ' ' }}></div>
                </div>
                <div className='w-full w-md-[25%] min-w-smtop-10 '>
                    <SideCard data={project} />
                </div>
            </div>

        </div>
    );
}
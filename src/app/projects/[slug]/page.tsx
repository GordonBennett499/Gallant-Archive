import { log } from 'console';
import {promises as fs} from 'fs';

export default async function Page({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params;

    console.log(process.cwd())
    const file = await fs.readFile(process.cwd() + '/../../public/projects.json', 'utf-8');
    const data = JSON.parse(file);

    const project = data[slug];    

    return (
        <div>
            <h1 className="text-2xl font-bold border-b py-2 mb-5">{project.title}</h1>
            <div className="mb-5" dangerouslySetInnerHTML={{__html: project.description}}></div>
            <div dangerouslySetInnerHTML={{__html: project.content}}></div>
        </div>
    );
}
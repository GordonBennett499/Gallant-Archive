import {promises as fs} from 'fs';
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from 'next/link';
import Card from "./components/Card";
import Progress from "./components/Progress";
import PromisesTable from './components/PromisesTable';
import projects from './projects.json';

export default async function Home() {

  return (
    <div className="">
      <div className="mb-10">
        <h2 className="text-xl font-bold mt-4 mb-2">Paul's Progress</h2>
        <p>Paul is working tirelessly to complete his course "The Complete Web Developer Course 3.0" on udemy.</p>
        <Progress title="Sections complete" x={1} y={16} />
        <Progress title="Lectures complete" x={34} y={223} />
        <span className="text-sm text-right text-slate-600">*This is approx. we try to keep it as up to date as possible.</span>
        <p className="mt-3 mb-2">He has also recently started using <Link href="https://www.freecodecamp.org" target="_blank" className="text-violet-400">Free Code Camp</Link>. It looks like he's picked up the '<Link href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="_blank" className="text-violet-400">Responsive web design</Link>' track.</p>
        <p className="mb-2">Breaking down that course - there are 1042 individual 'steps'. I've included everything here, so these steps could be as simple as the "Hello world" start task, all the way to creating a personal portfolio site.</p>
        <p>So far, Paul has gotten as <strong><em>opening</em></strong> the course.</p>
        <Progress title="Free Code Camp steps complete" x={0} y={1042} />
        <Progress title="Sections complete" x={0} y={20} />
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-bold mt-4 mb-2">Paul's Projects</h2>
        <p>Paul has a lot of projects in the works. It's doubtful any of them will ever see the light of day.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {Object.keys(projects).map((pid) => {
            const project = projects[pid as keyof typeof projects];
            return (
              <Card key={pid} title={project.title} url={`/projects/${pid}`}><span dangerouslySetInnerHTML={{__html: project.description}}></span></Card>
            )
          })}
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-lg font-bold mt-4 mb-2">Paul's Promises</h2>
        <p>Paul likes to make promises. His apps will be live "soon"</p>
        <PromisesTable />
      </div>
    </div>
  );
}

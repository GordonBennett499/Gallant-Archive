import {promises as fs} from 'fs';
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from 'next/link';
import Card from "./components/Card";
import Progress from "./components/Progress";
import PromisesTable from './components/PromisesTable';
import { getProjects } from './api';

export default async function Home() {

  const projects = await getProjects();

  return (
    <div className="">
      <div className="mb-10">
        <h2 className="text-lg font-bold mt-4 mb-2">Paul's Progress</h2>
        <p>Paul is working tirelessly to complete his course "The Complete Web Developer Course 3.0" on udemy.</p>
        <Progress title="Sections complete" x={1} y={16} />
        <Progress title="Lectures complete" x={34} y={223} />
        <span className="text-sm text-right text-slate-600">*This is approx. we try to keep it as up to date as possible.</span>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-bold mt-4 mb-2">Paul's Projects</h2>
        <p>Paul has a lot of projects in the works. It's doubtful any of them will ever see the light of day.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {Object.keys(projects).map((pid) => {
            const project = projects[pid];
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

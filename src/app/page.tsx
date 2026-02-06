import { MoveRight } from "lucide-react";
import Link from 'next/link';
import Card from "./components/Card";
import Progress from "./components/Progress";
import PromisesTable from './components/PromisesTable';
import Accordion from './components/Accordion';

import projects from '../../public/cache/projects.json';
import updates from '../../public/cache/posts.json';
import Badge from "./components/Badge";

export default async function Home() {

  return (
    <div className="">
      <div className="mb-5 mt-5">
        <h2 className="text-xl font-bold mt-4 mb-2">The Archive</h2>
        <p>There's a lot going on in Paul's life - or so he'll tell you. Here we try to put some of this info together so that we may look back on it in the future.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {Object.keys(updates).slice(0, 6).map((pid) => {
            const updateEntry = updates[pid as keyof typeof updates];
            if (
              typeof updateEntry === "object" &&
              updateEntry !== null &&
              "data" in updateEntry
            ) {
              const update = updateEntry.data;
              return (
                <Card key={pid} title={update.title} url={`/latest/${updateEntry.slug}`}>
                  {update.description}
                  <div className="mt-2">
                    {update.tags && update.tags.map((tag, index) => (
                      <Badge text={tag} key={index} />
                    ))}
                  </div>
                </Card>
              );
            }
            return null;
          })}
        </div>
        <p className="flex justify-end">
          <Link href="/latest" className="text-violet-400 hover:text-violet-500 flex items-center gap-1 mt-3">
            View more <MoveRight className="w-4 h-4" />
          </Link>
        </p>
      </div>
      <div className="mb-5">
        <h2 className="text-xl font-bold mt-4 mb-2">Paul's Projects</h2>
        <p>Paul has a lot of projects in the works. It's doubtful any of them will ever see the light of day.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {Object.keys(projects).slice(0, 6).map((pid) => {
            const projectEntry = projects[pid as keyof typeof projects];
            if (
              typeof projectEntry === "object" &&
              projectEntry !== null &&
              "data" in projectEntry
            ) {
              const project = projectEntry.data;
              return (
                <Card key={pid} title={project.title} url={`/projects/${projectEntry.slug}`}>
                  <span dangerouslySetInnerHTML={{ __html: project.description }}></span>
                </Card>
              );
            }
            return null;
          })}
        </div>
        <p className="flex justify-end">
          <Link href="/projects" className="text-violet-400 hover:text-violet-500 flex items-center gap-1 mt-3">
            View more projects <MoveRight className="w-4 h-4" />
          </Link>
        </p>
      </div>
    </div>
  );
}

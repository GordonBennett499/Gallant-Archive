import projects from '../../../public/cache/projects.json';
import Card from '../components/Card';

export default function ProjectsPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold border-b py-2 mb-5">Projects</h1>
            <p className="mb-5">Below are all of the projects Paul is "working on".</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                {Object.keys(projects).map((pid) => {
                    const proj = projects[pid as keyof typeof projects];
                    if (typeof proj === 'object' && proj !== null && 'data' in proj) {
                        const project = proj.data;
                        return (
                            <Card key={pid} title={project.title} url={`/projects/${pid}`}>
                                <span dangerouslySetInnerHTML={{__html: project.description}}></span>
                            </Card>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
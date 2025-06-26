import projects from '../../../public/cache/posts.json';
import Card from '../components/Card';

export default function UpdatesPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold border-b py-2 mb-5">Updates</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                {Object.keys(projects).map((pid) => {
                    const projectEntry = projects[pid as keyof typeof projects];
                    if (typeof projectEntry === 'object' && projectEntry !== null && 'data' in projectEntry) {
                        const project = (projectEntry as { data: { title: string; description: string } }).data;
                        return (
                            <Card key={pid} title={project.title} url={`/latest/${pid}`}>{project.description}</Card>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
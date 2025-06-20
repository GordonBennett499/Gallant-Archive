import projectData from "@/data/projects.json";

export default async function Page({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const project = projectData[slug];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold border-b py-2 mb-5">{project.title}</h1>
            <div className="mb-5" dangerouslySetInnerHTML={{ __html: project.description || '' }} />
            <div dangerouslySetInnerHTML={{ __html: project.content || '' }} />
        </div>
    );
}
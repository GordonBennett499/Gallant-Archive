import { log } from 'console';
import posts from '../../../public/cache/posts.json';
import Badge from '../components/Badge';
import Card from '../components/Card';

export default function UpdatesPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold border-b py-2 mb-5">Updates</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                {Object.keys(posts).map((pid) => {
                    const postEntry = posts[pid as keyof typeof posts];
                    if (typeof postEntry === 'object' && postEntry !== null && 'data' in postEntry) {
                        const post = postEntry.data;
                        return (
                            <Card key={pid} title={post.title} url={`/latest/${postEntry.slug}`}>
                                {post.description}
                                <div className="mt-2">
                                    {post.tags && post.tags.map((tag, index) => (
                                        <Badge text={tag} key={index} />
                                    ))}
                                </div>
                            </Card>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
export default function Badge({ text }: { text: string }) {
    return (
        <span className="inline-flex items-center px-2 py-1 rounded text-xs border border-white">
            {text}
        </span>
    );
}
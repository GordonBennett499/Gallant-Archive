import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h1 className="text-2xl font-bold border-b py-2 mb-5">Seeking You</h1>
            <p className="mb-5">Meet people, but not in a <em>dating</em> kind of way.</p>
            <p>"Someone" has created a clone of Seeking You called "<Link href="https://seeking-you2.org" target="_blank" className="text-violet-500 font-bold">Seeking You 2</Link>". This made Paul angry.</p>
        </div>
    );
}
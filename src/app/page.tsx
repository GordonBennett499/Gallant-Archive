import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from 'next/link';
import Card from "./components/Card";
import Progress from "./components/Progress";

export default function Home() {
  return (
    <div className="">
      <div className="mb-10">
        <h2 className="text-lg font-bold mt-4 mb-2">Paul's Progress</h2>
        <p>Paul is working tireless to complete his course "The Complete Web Developer Course 3.0" on udemy.</p>
        <Progress title="Sections complete" x="1" y="16" />
        <Progress title="Lectures complete" x="34" y="223" />
        <span className="text-sm text-right text-slate-600">*This is approx. we try to keep it as up to date as possible.</span>
      </div>
      <div className="mb-10">
        <h2 className="text-xl font-bold mt-4 mb-2">Paul's Projects</h2>
        <p>Paul has a lot of projects in the works. It's doubtful any of them will ever see the light of day.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <Card title="Seeking You" url="/projects/seeking-you">
            Meet people, but not in a <em>dating</em> kind of way.
          </Card>
          <Card title="Geordie Nation" url="/projects/geordie-nation">
            A platform for businesses in Newcastle to connect.
          </Card>
          <Card title="Streets of Home" url="/projects/streets-of-home">
            A buggy racing game through the streets of Newcastle-upon-tyne.
          </Card>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-lg font-bold mt-4 mb-2">Paul's Promises</h2>
        <p>Paul likes to make promises. His apps will be live "soon"</p>
        <table className="w-full mt-3 text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Promise</th>
              <th>On</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">3x apps live by the end of June</td>
              <td>19/06/2025</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

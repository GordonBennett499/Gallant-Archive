import {promises as fs} from 'fs';
import { Check, X } from 'lucide-react';

interface PromiseType {
  text: string,
  date: string,
  completed: boolean
}

export default async function PromisesTable() {

    const file = await fs.readFile(process.cwd() + '/public/promises.json', 'utf-8');
    const promises = JSON.parse(file);

    return (
        <div className="border rounded-md mt-3">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 pl-2">Promise</th>
                <th>On</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>
              {promises.map((promise: PromiseType) => {
                  return (
                    <tr key={promise.text}>
                        <td className="py-2 pl-2">{promise.text}</td>
                        <td>{promise.date}</td>
                        <td>{promise.completed ? <Check color="green" /> : <X color="red" />}</td>
                    </tr>
                    );
              })}
            </tbody>
          </table>
        </div>
    );
}
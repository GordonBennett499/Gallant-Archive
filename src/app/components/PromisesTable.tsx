import {promises as fs} from 'fs';
import { Check, X } from 'lucide-react';
import promises from '../promises.json';

interface PromiseType {
  text: string,
  date: string,
  completed: boolean
}

export default async function PromisesTable() {

    return (
        <div className="border rounded-md mt-3">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 pl-2">Promise</th>
                <th className="px-2">On</th>
                <th className="px-2">Complete</th>
              </tr>
            </thead>
            <tbody>
              {promises.map((promise: PromiseType) => {
                  return (
                    <tr key={promise.text}>
                        <td className="py-2 px-2">{promise.text}</td>
                        <td className="px-2">{promise.date}</td>
                        <td className="px-2">{promise.completed ? <Check color="green" /> : <X color="red" />}</td>
                    </tr>
                    );
              })}
            </tbody>
          </table>
        </div>
    );
}
import { log } from 'console';
import {promises as fs} from 'fs';

export async function getProjects() {

    console.log('test -- ' + getFilePath('projects.json'))
    const file = await fs.readFile(getFilePath('projects.json'), 'utf-8');
    const data = JSON.parse(file);
    return data;
}

export async function getProject(id: string) {
    const projects = await getProjects();
    return projects[id];
}

export async function getPromises() {
    const file = await fs.readFile(getFilePath('promises.json'), 'utf-8');
    return JSON.parse(file);
}

function getFilePath(fileName: string) {
    return `${process.cwd()}/src/app/${fileName}`;
}
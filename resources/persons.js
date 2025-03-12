import { promises as fs } from 'fs'; 


const data = await fs.readFile('./resources/starwar.json', { encoding: 'utf8' });


const persons = JSON.parse(data);


export default persons;


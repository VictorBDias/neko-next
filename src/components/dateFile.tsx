import fs from 'fs/promises';

export async function DateFile() {
  await fs.appendFile('date.txt', `${new Date()}\n`, 'utf-8');
  const data = await fs.readFile('date.txt', 'utf-8');
  return <div>{data}</div>;
}

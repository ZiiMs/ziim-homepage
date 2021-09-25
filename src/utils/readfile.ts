import path from 'path';
import { promises as fs } from 'fs';

export const readFile = async <T>(Filename: string) => {
  const jsonPath = path.join(process.cwd(), Filename);
  const fileContent = await fs.readFile(jsonPath, 'utf8');
  return JSON.parse(fileContent) as T;
};

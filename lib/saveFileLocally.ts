"use server"

import path from "path";
import {writeFileSync , existsSync , mkdirSync} from "fs";

export const saveFileLocally = async (file: File): Promise<string> => {
  const uploadsDir = path.join(process.cwd(), "../uploads"); // save inside public folder
  if (!existsSync(uploadsDir)) mkdirSync(uploadsDir, { recursive: true });

  const filePath = path.join(uploadsDir, `${Date.now()}-${file.name}`);
  const buffer = Buffer.from(await file.arrayBuffer());
  writeFileSync(filePath, buffer);

  return filePath; 
};

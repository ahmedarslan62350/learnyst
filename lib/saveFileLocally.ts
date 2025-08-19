"use server"; // this must run in server context

import path from "path";
import { writeFileSync, existsSync, mkdirSync } from "fs";

interface FileData {
  name: string;
  arrayBuffer: ArrayBuffer;
}

export const saveFileLocally = async (file: FileData): Promise<string> => {
  // Save inside /uploads folder at project root
  const uploadsDir = path.join(process.cwd(), "uploads");
  if (!existsSync(uploadsDir)) mkdirSync(uploadsDir, { recursive: true });

  const filePath = path.join(uploadsDir, `${Date.now()}-${file.name}`);
  const buffer = Buffer.from(file.arrayBuffer);
  writeFileSync(filePath, buffer);

  return filePath;
};

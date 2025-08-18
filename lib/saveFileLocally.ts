import path from "path";
import fs from "fs";

export const saveFileLocally = async (file: File): Promise<string> => {
  const uploadsDir = path.join(process.cwd(), "../uploads"); // save inside public folder
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

  const filePath = path.join(uploadsDir, `${Date.now()}-${file.name}`);
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);

  return filePath; 
};

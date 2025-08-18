// app/api/gazette/upload/route.ts
import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { GazetteUpload } from "@/lib/models/Board";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    // Parse multipart form data
    const formData = await request.formData();

    const file = formData.get("file") as Blob;
    const boardId = formData.get("boardId")?.toString();
    const boardName = formData.get("boardName")?.toString();
    const examType = formData.get("examType")?.toString();
    const uploadedBy = formData.get("uploadedBy")?.toString();

    if (!file || !boardId || !boardName || !examType || !uploadedBy) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

    // Save file to local filesystem
    const fileName = `${Date.now()}-${file instanceof File ? file.name : "upload"}`;
    const filePath = path.join(uploadDir, fileName);
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    // Insert metadata into MongoDB
    const db = await getDatabase();
    const gazetteUpload: GazetteUpload = {
      id: `gazette-${Date.now()}`,
      boardId,
      boardName,
      examType,
      fileName: fileName,
      fileUrl: filePath,
      uploadedBy,
      uploadedAt: new Date(),
      status: "pending",
    };

    const result = await db
      .collection<GazetteUpload>("gazette_uploads")
      .insertOne(gazetteUpload);

    return NextResponse.json({
      success: true,
      upload: { ...gazetteUpload, _id: result.insertedId },
    });
  } catch (error) {
    console.error("Upload route error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to upload gazette" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = await getDatabase();
    const uploads = await db
      .collection<GazetteUpload>("gazette_uploads")
      .find({})
      .sort({ uploadedAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, uploads });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch uploads" },
      { status: 500 }
    );
  }
}

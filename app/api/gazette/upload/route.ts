import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { GazetteUpload } from "@/lib/models/Board";
import path from "path";
import { writeFileSync } from "fs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const boardId = formData.get("boardId") as string;
    const boardName = formData.get("boardName") as string;
    const examType = formData.get("examType") as string;
    const uploadedBy = formData.get("uploadedBy") as string;

    if (!file || !boardId || !boardName || !examType || !uploadedBy) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real implementation, you would upload the file to a storage service
    // For now, we'll simulate this with a placeholder URL
    const fileUrl = path.join(__dirname, `${Date.now()}-${file.name}`);
    writeFileSync(fileUrl, Buffer.from(await file.arrayBuffer()));

    const db = await getDatabase();

    const gazetteUpload: GazetteUpload = {
      id: `gazette-${Date.now()}`,
      boardId,
      boardName,
      examType,
      fileName: file.name,
      fileUrl,
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
    console.error("Upload error:", error);
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

    return NextResponse.json({
      success: true,
      uploads: uploads,
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch uploads" },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "200mb",
    },
  },
};

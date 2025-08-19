// app/api/gazette/upload/route.ts
import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { GazetteUpload } from "@/lib/models/Board";

export async function POST(request: Request) {
  try {
    const { boardId, boardName, examType, uploadedBy, fileName } =
      await request.json();

    console.log(boardId, boardName, examType, uploadedBy, fileName);

    if (!boardId || !boardName || !examType || !uploadedBy || !fileName) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const gazetteUpload: GazetteUpload = {
      id: `gazette-${Date.now()}`,
      boardId,
      boardName,
      examType,
      fileName: fileName,
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

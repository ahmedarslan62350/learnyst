import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import { GazetteUpload, Board } from "@/lib/models/Board";
import { ObjectId } from "mongodb";
import { extractPDFData } from "@/lib/extract";
import { deleteFile, uploadFile } from "@/lib/s3";
import { readFileSync } from "fs";

export async function POST(request: NextRequest) {
  try {
    const { uploadId, status, adminNotes, pageNo } = await request.json();
    const db = await getDatabase();

    // Update the gazette upload status
    const result = await db
      .collection<GazetteUpload>("gazette_uploads")
      .updateOne(
        { _id: new ObjectId(uploadId) },
        {
          $set: {
            status,
            adminNotes,
            processedAt: new Date(),
          },
        }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: "Upload not found" },
        { status: 404 }
      );
    }

    // If approved, update the board status to active
    if (status === "approved") {
      const upload = await db
        .collection<GazetteUpload>("gazette_uploads")
        .findOne({ _id: new ObjectId(uploadId) });

      if (upload) {
        await db.collection<Board>("boards").updateOne(
          { id: upload.boardId },
          {
            $set: {
              status: "active",
              isDataAvailable: true,
              updatedAt: new Date(),
            },
          }
        );
      }
    }

    const gazette = await db
      .collection<GazetteUpload>("gazette_uploads")
      .findOne({ _id: new ObjectId(uploadId) });

    if (!gazette) {
      return NextResponse.json(
        { success: false, error: "Failed to process upload" },
        { status: 404 }
      );
    }

    await extractPDFData(
      gazette.fileUrl || "",
      Number(pageNo) || 180,
      __dirname
    );

    const fileBuffer = readFileSync(gazette.fileUrl);

    await deleteFile("uploads/output.json");
    await uploadFile('uploads/output.json', fileBuffer)

    return NextResponse.json({
      success: true,
      message: `Upload ${status} successfully`,
    });
  } catch (error) {
    console.error("Processing error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process upload" },
      { status: 500 }
    );
  }
}

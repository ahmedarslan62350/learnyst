import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "ap-southeast-1", // replace with your bucket region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const uploadFile = async (fileName: string, fileContent: Buffer) => {
  try {
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: fileName,
      Body: fileContent,
    });
    await s3.send(command);
    console.log("File uploaded successfully");
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

export const deleteFile = async (fileName: string) => {
  try {
    const command = new DeleteObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: fileName,
    });
    await s3.send(command);
    console.log("File deleted successfully");
  } catch (error) {
    console.error("Error deleting file:", error);
  }
};
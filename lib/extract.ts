import PDFParser from "pdf2json";
import { uploadFile, deleteFile } from "./s3";

export const extractPDFData = async (
  buffer: Buffer,
  pageNo: number
): Promise<string> => {
  const rows: { marks: number; name: string; rollNo: number }[] = [];

  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataReady", async (pdfData) => {
      try {
        const textItems: { x: number; y: number; text: string }[] = [];

        pdfData.Pages.forEach((page, i) => {
          if (i + 1 >= Number(pageNo)) {
            page.Texts.forEach((text) => {
              textItems.push({
                x: text.x,
                y: text.y,
                text: decodeURIComponent(text.R[0].T),
              });
            });
          }
        });

        let i = 0;
        while (i < textItems.length) {
          const item = textItems[i];
          if (
            item &&
            !isNaN(parseInt(item.text)) &&
            item.text.length <= 4 &&
            item.text.length >= 3
          ) {
            const marks = parseInt(item.text);
            const name = textItems[i + 1]?.text || "Unknown";
            const rollNo = parseInt(textItems[i + 2]?.text || "0");

            rows.push({ marks, name, rollNo });
            i += 2;
          }
          i++;
        }

        const jsonBuffer = Buffer.from(JSON.stringify(rows, null, 2));

        await deleteFile("uploads/output.json");

        await uploadFile("uploads/output.json", jsonBuffer);

        console.log("Data extracted and uploaded successfully");

        resolve("uploads/output.json");
      } catch (err) {
        reject(err);
      }
    });

    pdfParser.on("pdfParser_dataError", (err) => {
      reject(err.parserError);
    });

    pdfParser.parseBuffer(buffer);
  });
};

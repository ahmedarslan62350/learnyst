import fs from "fs";
import PDFParser from "pdf2json";
import path from "path";

const pdfParser = new PDFParser();

export const extractPDFData = async (
  filename: string,
  pageNo: number,
  filePath: string
) => {
  const rows: { marks: number; name: string; rollNo: number }[] = [];

  pdfParser.on("pdfParser_dataReady", (pdfData) => {
    const textItems: { x: number; y: number; text: string }[] = [];
    pdfData.Pages.forEach((page, i) => {
      if (i + 1 >= pageNo) {
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

        // ✅ Check existence before accessing
        const name = textItems[i + 1]?.text || "Unknown";
        const rollNo = parseInt(textItems[i + 2]?.text);

        rows.push({ marks, name, rollNo });

        i += 2; // Skip processed items
      }
      i++;
    }

    fs.writeFileSync(
      path.join(filePath, "output.json"),
      JSON.stringify(rows, null, 2),
      "utf-8"
    );

    console.log("Data extracted successfully");
  });

  pdfParser.loadPDF(filename);
};

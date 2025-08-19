import fs from "fs";
import PDFParser from "pdf2json";
import path from "path";

export const extractPDFData = async (
  buffer: Buffer,
  pageNo: number,
  filePath: string
): Promise<string> => {
  const rows: { marks: number; name: string; rollNo: number }[] = [];

  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

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
          const name = textItems[i + 1]?.text || "Unknown";
          const rollNo = parseInt(textItems[i + 2]?.text || "0");

          rows.push({ marks, name, rollNo });

          i += 2;
        }
        i++;
      }

      const jsonUrl = path.join(
        filePath,
        `output-${Date.now()}-${Math.floor(Math.random() * 9000)}.json`
      );

      fs.writeFileSync(jsonUrl, JSON.stringify(rows, null, 2), "utf-8");

      console.log("Data extracted successfully");
      resolve(jsonUrl);
    });

    pdfParser.on("pdfParser_dataError", (err) => {
      reject(err.parserError);
    });

    pdfParser.parseBuffer(buffer);
  });
};

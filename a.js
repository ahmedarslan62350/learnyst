import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://bisebwp.edu.pk/";

async function fetchResult(rollNo) {
  // Step 1: GET page
  const getResp = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
    // keep cookies
    withCredentials: true,
  });

  const cookies = getResp.headers["set-cookie"]; // ASP.NET_SessionId
  const $ = cheerio.load(getResp.data);

  // extract hidden fields
  const viewstate = $("#__VIEWSTATE").val();
  const viewstategen = $("#__VIEWSTATEGENERATOR").val();
  const eventvalidation = $("#__EVENTVALIDATION").val();

  // Step 2: POST form
  const payload = new URLSearchParams({
    __LASTFOCUS: "",
    __EVENTTARGET: "",
    __EVENTARGUMENT: "",
    __VIEWSTATE: viewstate,
    __VIEWSTATEGENERATOR: viewstategen,
    __SCROLLPOSITIONX: "0",
    __SCROLLPOSITIONY: "0",
    __EVENTVALIDATION: eventvalidation,
    ViewResultHSSC_PII$txtRollNo: rollNo,
    __ASYNCPOST: "true",
    ViewResultHSSC_PII$btnSearch: "Search Result",
    ViewResultHSSC_PII$ctl01:
      "ViewResultHSSC_PII$UpdatePanel1|ViewResultHSSC_PII$btnSearch",
  });

  const postResp = await axios.post(url, payload.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "Mozilla/5.0",
      "X-Requested-With": "XMLHttpRequest",
      "X-MicrosoftAjax": "Delta=true",
      Origin: "https://bisebwp.edu.pk",
      Referer: "https://bisebwp.edu.pk/",
      Cookie: cookies.join("; "), // reuse ASP.NET_SessionId
    },
  });

  const data = parseResult(postResp.data);
  console.log(data);
}

function parseResult(responseText) {
  // Extract the HTML inside updatePanel
  const parts = responseText.split("|updatePanel|");
  if (parts.length < 2) {
    throw new Error("No updatePanel found");
  }
  const html = parts[1];
  const $ = cheerio.load(html);

  // Student info (cleanly)
  const rollNo = $("td:contains('Roll No.')").next().text().trim();
  const studentName = $("td:contains('Student Name:')").next().text().trim();
  const fatherName = $("td:contains('Father Name:')").next().text().trim();
  const status = $("td:contains('Status:')").next().text().trim();

  // Subjects: pick rows from subject marks table
  const subjects = [];
  $("table[border='1'] tr").each((i, row) => {
    const tds = $(row).find("td");
    if (tds.length >= 7) {
      const subject1 = $(tds[0]).text().trim();
      const theory1 = $(tds[1]).text().trim();
      const subject2 = $(tds[2]).text().trim();
      const theory2 = $(tds[3]).text().trim();
      const practical = $(tds[4]).text().trim();
      const percentile = $(tds[5]).text().trim();
      const grade = $(tds[6]).text().trim();
      const total = $(tds[7]).text().trim();

      // Skip empty rows, headers, or rows like "Part I / Part II"
      if (
        subject1 &&
        !subject1.includes("Roll No") &&
        !subject1.includes("Part I") &&
        !subject1.includes("Subjects")
      ) {
        subjects.push({
          subject1,
          theory1,
          subject2,
          theory2,
          practical,
          percentile,
          grade,
          total,
        });
      }
    }
  });

  return { rollNo, studentName, fatherName, status, subjects };
}

// Example usage
fetchResult("702694").catch(console.error);

import axios from "axios";
import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";

const url = "https://bisebwp.edu.pk/";
const Class = Number(process.env.NEXT_PUBLIC_CLASS!) as 9 | 10 | 11 | 12;

async function fetchResult(rollNo: any) {
  // Step 1: GET page
  const getResp = await axios.get(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    withCredentials: true,
  });

  const cookies = getResp.headers["set-cookie"];
  const $ = cheerio.load(getResp.data);

  const viewstate = $("#__VIEWSTATE").val();
  const viewstategen = $("#__VIEWSTATEGENERATOR").val();
  const eventvalidation = $("#__EVENTVALIDATION").val();

  let classStr = "HSSC_PI";
  switch (Class) {
    case 9:
      classStr = "indexSSC_PI";
      break;
    case 10:
      classStr = "indexSSC_PII";
      break;
    case 11:
      classStr = "HSSC_PI";
      break;
    case 12:
      classStr = "HSSC_PII";
      break;

    default:
      break;
  }
  // Step 2: POST form
  const payload = new URLSearchParams();
  payload.append("__LASTFOCUS", "");
  payload.append("__EVENTTARGET", "");
  payload.append("__EVENTARGUMENT", "");
  payload.append("__VIEWSTATE", String(viewstate || ""));
  payload.append("__VIEWSTATEGENERATOR", String(viewstategen || ""));
  payload.append("__SCROLLPOSITIONX", "0");
  payload.append("__SCROLLPOSITIONY", "0");
  payload.append("__EVENTVALIDATION", String(eventvalidation || ""));
  payload.append(`ViewResult${classStr}$txtRollNo`, rollNo);
  payload.append("__ASYNCPOST", "true");
  payload.append(`ViewResult${classStr}$btnSearch`, "Search Result");
  payload.append(
    `ViewResult${classStr}$ctl01`,
    `ViewResult${classStr}$UpdatePanel1|ViewResult${classStr}$btnSearch`
  );

  const postResp = await axios.post(url, payload.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "Mozilla/5.0",
      "X-Requested-With": "XMLHttpRequest",
      "X-MicrosoftAjax": "Delta=true",
      Origin: "https://bisebwp.edu.pk",
      Referer: "https://bisebwp.edu.pk/",
      Cookie: cookies?.join("; "),
    },
  });

  return parseResult(postResp.data);
}

function parseResult(responseText: any) {
  const parts = responseText.split("|updatePanel|");
  if (parts.length < 2) {
    throw new Error("No updatePanel found");
  }

  const html = parts[1];
  const $ = cheerio.load(html);

  const rollNo = $("td:contains('Roll No.')").next().text().trim();
  const studentName = $("td:contains('Student Name:')").next().text().trim();
  const fatherName = $("td:contains('Father Name:')").next().text().trim();
  const status = $("td:contains('Status:')").next().text().trim();

  const subjects: any[] = [];
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

      // Handle Part-I side subjects
      if (
        subject1 &&
        !subject1.includes("Roll No") &&
        !subject1.includes("Part I") &&
        !subject1.includes("Subjects")
      ) {
        subjects.push({
          subject: subject1,
          theory: theory1,
          practical,
          percentile,
          grade,
          total,
        });
      }

      // Handle Part-II side subjects (like PS etc.)
      if (
        subject2 &&
        !subject2.includes("Roll No") &&
        !subject2.includes("Part II") &&
        !subject2.includes("Subjects")
      ) {
        subjects.push({
          subject: subject2,
          theory: theory2,
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

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { rollNo } = await req.json();
    if (!rollNo) return Response.json({ error: "Missing rollNo" });

    const data = await fetchResult(rollNo);
    if (!data.rollNo && !data.subjects.length) {
      return Response.json({ error: "Error" }, { status: 500 });
    }
    return Response.json(data);
  } catch (err) {
    console.error(err);
    return Response.json({ error: err });
  }
}

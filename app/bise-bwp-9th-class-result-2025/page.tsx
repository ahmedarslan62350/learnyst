import React from "react";
import ResultPage from "./ResultPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BISE BWP 9th Class Result 2025 | Check by Roll Number - Learnyst.pk",
  description:
    "BISE BWP 9th Class Result 2025 — Check Bahawalpur SSC Part 1 results by roll number or name. Official BISE BWP 9th result checker, gazette download and contact info.",
  keywords: [
    "bise bwp 9th result 2025",
    "bise bwp 9th result check by roll number 2025",
    "BISE Bahawalpur 9th class result",
    "BWP result 2025 roll no",
  ],
  alternates: {
    canonical: "https://learnyst.pk/bise-bwp-9th-class-result-2025",
  },
  openGraph: {
    title: "BISE BWP 9th Result 2025 | Bahawalpur 9th Class Result",
    description:
      "Check BISE BWP 9th Class Result 2025 by roll number and name. Get updates, gazette and official contact for BISE Bahawalpur.",
    url: "https://learnyst.pk/bise-bwp-9th-class-result-2025",
    type: "website",
  },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to check BISE BWP 9th Result 2025 by roll number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter your 9th class roll number in the BISE BWP 9th result checker on this page and click 'Search' to view your result."
      }
    },
    {
      "@type": "Question",
      "name": "What is the BISE Bahawalpur official address?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Board of Intermediate & Secondary Education, Bahawalpur — [insert official address here]."
      }
    },
    {
      "@type": "Question",
      "name": "Can I download the BISE BWP gazette for 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — download the official gazette link provided on this page after results are published."
      }
    }
  ]
};

const page = () => {
  return (
    <>
      <ResultPage />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
    </>
  );
};

export default page;

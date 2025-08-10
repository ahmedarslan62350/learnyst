import React from "react";
import ResultPage from "./ResultPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:
      "BISE BWP 9th Class Result 2025 - Check Your Bahawalpur Board Results | ResultCheck",
    template: "%s | ResultCheck - Learnyst.pk",
  },
  description:
    "Check BISE BWP 9th result and all board results instantly with ResultCheck. Fast, reliable, and free result checking service for 9th, 10th, 11th, and 12th class students across all major boards of Pakistan.",
  icons: ["/logo.svg"],
  keywords: [
    "BISE BWP 9th result 2025",
    "Bahawalpur board result 9th class 2025",
    "BISE Bahawalpur result 2025",
    "student results 2025",
    "board results Pakistan 2025",
    "result checking 2025",
    "educational results 2025",
    "9th class results 2025",
    "10th class results 2025",
    "11th class results 2025",
    "12th class results 2025",
    "SSC results 2025",
    "HSSC results",
    "Learnyst.pk",
    "ResultCheck",
  ],

  authors: [{ name: "Learnyst.pk Team" }],
  creator: "Learnyst.pk",
  publisher: "Learnyst.pk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://learnyst.pk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learnyst.pk",
    title: "ResultCheck - Student Result Checking System | Learnyst.pk",
    description:
      "Check your educational board results instantly with ResultCheck. Fast, reliable, and free result checking service for students across Pakistan.",
    siteName: "ResultCheck - Learnyst.pk",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ResultCheck - Student Result Checking System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ResultCheck - Student Result Checking System | Learnyst.pk",
    description:
      "Check your educational board results instantly with ResultCheck. Fast, reliable, and free result checking service for students across Pakistan.",
    images: ["/twitter-image.jpg"],
    creator: "@learnystpk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  generator: "v0.dev",
};

const page = () => {
  return <ResultPage />;
};

export default page;

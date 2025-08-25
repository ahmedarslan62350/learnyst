import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us - Get Support for Result Checking",
  description:
    "Need help with result checking? Contact ResultCheck support team. We're here to assist you with any questions about your educational board results. Email: support@learnyst.pk",
  keywords: [
    "contact support",
    "result checking help",
    "student support",
    "learnyst contact",
    "result checking assistance",
    "educational support Pakistan",
  ],
  openGraph: {
    title: "Contact ResultCheck - Get Support for Result Checking",
    description:
      "Need help with result checking? Contact our support team for assistance with educational board results.",
    url: "https://learnyst.pk/contact",
    type: "website",
  },
  twitter: {
    title: "Contact ResultCheck - Get Support for Result Checking",
    description:
      "Need help with result checking? Contact our support team for assistance with educational board results.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9231506459397955"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ContactPageClient />
    </>
  );
}

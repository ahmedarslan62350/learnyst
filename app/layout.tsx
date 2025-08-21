import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import GoogleAdSense from "./components/GoogleAdSense";
import { Suspense } from "react";
import { ToastProvider } from "@/components/ui/toast";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BISE All Boards Results 2025 - Check Your Results",
    template: "%s | ResultCheck - Learnyst.pk",
  },
  description:
    "Check BISE All Boards result instantly with ResultCheck. Fast, reliable, and free result checking service for 9th, 10th, 11th, and 12th class students across all major boards of Pakistan.",
  icons: ["/logo.svg"],
  keywords: [
    "BISE BWP 9th result",
    "Bahawalpur board result",
    "BISE Bahawalpur result",
    "student results",
    "board results Pakistan",
    "result checking",
    "educational results",
    "9th class results",
    "10th class results",
    "11th class results",
    "12th class results",
    "SSC results",
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
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "ResultCheck - Student Result Checking System",
      },
    ],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/svg" sizes="32x32" href="/logo.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/logo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="google-adsense-account" content="ca-pub-9231506459397955" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Learnyst.pk",
              url: "https://learnyst.pk/",
              logo: "https://learnyst.pk/logo.svg",
            }),
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16636440375"
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9231506459397955"
          crossOrigin="anonymous"
        ></script>
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16636440375');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <ToastProvider>{children}</ToastProvider>
          <GoogleAnalytics />
          <GoogleAdSense />
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}

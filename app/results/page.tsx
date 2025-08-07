import type { Metadata } from "next"
import ResultsPageClient from "./ResultsPageClient"

export const metadata: Metadata = {
  title: "Student Results - View Your Academic Performance",
  description:
    "View your educational board results including marks, percentage, and pass/fail status. Get instant access to your academic performance from major boards across Pakistan.",
  keywords: [
    "student results",
    "academic results",
    "exam results",
    "board results",
    "marks display",
    "result verification",
    "educational performance",
  ],
  openGraph: {
    title: "Student Results - View Your Academic Performance",
    description: "View your educational board results including marks, percentage, and pass/fail status.",
    url: "https://learnyst.pk/results",
    type: "website",
  },
  twitter: {
    title: "Student Results - View Your Academic Performance",
    description: "View your educational board results including marks, percentage, and pass/fail status.",
  },
  robots: {
    index: false, // Don't index individual result pages
    follow: true,
  },
}

export default function ResultsPage() {
  return <ResultsPageClient />
}

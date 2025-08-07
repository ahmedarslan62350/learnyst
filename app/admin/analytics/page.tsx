import type { Metadata } from "next"
import AdminAnalyticsClient from "./AdminAnalyticsClient"

export const metadata: Metadata = {
  title: "Analytics - Admin Dashboard",
  description: "View website analytics and statistics",
  robots: { index: false, follow: false },
}

export default function AdminAnalyticsPage() {
  return <AdminAnalyticsClient />
}

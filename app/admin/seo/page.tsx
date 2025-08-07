import type { Metadata } from "next"
import AdminSEOClient from "./AdminSEOClient"

export const metadata: Metadata = {
  title: "SEO Management - Admin Dashboard",
  description: "Manage SEO settings and optimization",
  robots: { index: false, follow: false },
}

export default function AdminSEOPage() {
  return <AdminSEOClient />
}

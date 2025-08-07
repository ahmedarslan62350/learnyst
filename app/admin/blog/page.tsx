import type { Metadata } from "next"
import AdminBlogClient from "./AdminBlogClient"

export const metadata: Metadata = {
  title: "Blog Management - Admin Dashboard",
  description: "Manage blog posts and articles",
  robots: { index: false, follow: false },
}

export default function AdminBlogPage() {
  return <AdminBlogClient />
}

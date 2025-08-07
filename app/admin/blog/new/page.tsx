import type { Metadata } from "next"
import AdminBlogNewClient from "./AdminBlogNewClient"

export const metadata: Metadata = {
  title: "Create New Blog Post - Admin Dashboard",
  description: "Create a new blog post",
  robots: { index: false, follow: false },
}

export default function AdminBlogNewPage() {
  return <AdminBlogNewClient />
}

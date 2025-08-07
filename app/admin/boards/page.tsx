import type { Metadata } from "next"
import AdminBoardsClient from "./AdminBoardsClient"

export const metadata: Metadata = {
  title: "Board Management - Admin Dashboard",
  description: "Manage educational board information",
  robots: { index: false, follow: false },
}

export default function AdminBoardsPage() {
  return <AdminBoardsClient />
}

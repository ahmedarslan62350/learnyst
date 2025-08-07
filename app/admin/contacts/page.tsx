import type { Metadata } from "next"
import AdminContactsClient from "./AdminContactsClient"

export const metadata: Metadata = {
  title: "Contact Messages - Admin Dashboard",
  description: "Manage contact form submissions",
  robots: { index: false, follow: false },
}

export default function AdminContactsPage() {
  return <AdminContactsClient />
}

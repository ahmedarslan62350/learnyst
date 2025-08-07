import type { Metadata } from "next"
import AdminSettingsClient from "./AdminSettingsClient"

export const metadata: Metadata = {
  title: "Site Settings - Admin Dashboard",
  description: "Configure website settings",
  robots: { index: false, follow: false },
}

export default function AdminSettingsPage() {
  return <AdminSettingsClient />
}

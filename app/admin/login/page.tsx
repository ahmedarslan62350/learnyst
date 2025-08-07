import type { Metadata } from "next"
import AdminLoginClient from "./AdminLoginClient"

export const metadata: Metadata = {
  title: "Admin Login - ResultCheck Management",
  description: "Admin login for ResultCheck management panel",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLoginPage() {
  return <AdminLoginClient />
}

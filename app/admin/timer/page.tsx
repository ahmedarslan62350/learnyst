import { Metadata } from "next"
import AdminTimerClient from "./AdminTimerClient"

export const metadata: Metadata = {
  title: "Timer Management | Admin Panel",
  description: "Manage result announcement timers",
}

export default function AdminTimerPage() {
  return <AdminTimerClient />
}

"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { GraduationCap, BarChart3, Users, FileText, Settings, LogOut, Eye, MessageSquare, Globe, TrendingUp, Calendar, Bell, Clock, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface DashboardStats {
  totalVisitors: number
  totalResults: number
  totalBlogs: number
  totalContacts: number
  todayVisitors: number
  todayResults: number
}

export default function AdminDashboardClient() {
  const [stats, setStats] = useState<DashboardStats>({
    totalVisitors: 125430,
    totalResults: 45230,
    totalBlogs: 8,
    totalContacts: 156,
    todayVisitors: 2340,
    todayResults: 890,
  })
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check admin authentication
    const token = localStorage.getItem("adminToken")
    if (!token) {
      // router.push("/admin/login")
       // return
    }

    // Simulate loading stats
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
                <p className="text-slate-600">Welcome back! Here's what's happening with ResultCheck.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-slate-400" />
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Total Visitors</p>
                  <p className="text-3xl font-bold text-blue-900">{stats.totalVisitors.toLocaleString()}</p>
                  <p className="text-sm text-blue-700">+{stats.todayVisitors} today</p>
                </div>
                <Users className="h-12 w-12 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-green-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Results Checked</p>
                  <p className="text-3xl font-bold text-green-900">{stats.totalResults.toLocaleString()}</p>
                  <p className="text-sm text-green-700">+{stats.todayResults} today</p>
                </div>
                <BarChart3 className="h-12 w-12 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-purple-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Blog Posts</p>
                  <p className="text-3xl font-bold text-purple-900">{stats.totalBlogs}</p>
                  <p className="text-sm text-purple-700">Published</p>
                </div>
                <FileText className="h-12 w-12 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-r from-orange-50 to-orange-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Contact Messages</p>
                  <p className="text-3xl font-bold text-orange-900">{stats.totalContacts}</p>
                  <p className="text-sm text-orange-700">Pending: 12</p>
                </div>
                <MessageSquare className="h-12 w-12 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/admin/blog/new">
                <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                  <FileText className="h-4 w-4 mr-2" />
                  Create New Blog Post
                </Button>
              </Link>
              <Link href="/admin/timer">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Clock className="h-4 w-4 mr-2" />
                  Manage Result Timer
                </Button>
              </Link>
              <Link href="/admin/boards">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Globe className="h-4 w-4 mr-2" />
                  Manage Boards
                </Button>
              </Link>
              <Link href="/admin/gazette">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Upload className="h-4 w-4 mr-2" />
                  Review Gazette Uploads
                </Button>
              </Link>
              <Link href="/admin/contacts">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  View Contact Messages
                </Button>
              </Link>
              <Link href="/admin/analytics">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New gazette uploaded</p>
                    <p className="text-xs text-slate-500">30 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Timer activated for BISE Lahore</p>
                    <p className="text-xs text-slate-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Board status updated</p>
                    <p className="text-xs text-slate-500">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New contact message</p>
                    <p className="text-xs text-slate-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/admin/blog">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Blog Management</h3>
                <p className="text-slate-600 text-sm">Create, edit, and manage blog posts</p>
                <Badge variant="secondary" className="mt-2">
                  {stats.totalBlogs} Posts
                </Badge>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/boards">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Board Management</h3>
                <p className="text-slate-600 text-sm">Update board information and status</p>
                <Badge variant="secondary" className="mt-2">
                  25+ Boards
                </Badge>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/timer">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-indigo-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Timer Management</h3>
                <p className="text-slate-600 text-sm">Set countdown timers for result announcements</p>
                <Badge variant="secondary" className="mt-2">
                  Countdown
                </Badge>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/gazette">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Upload className="h-12 w-12 text-emerald-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Gazette Management</h3>
                <p className="text-slate-600 text-sm">Review and approve gazette uploads</p>
                <Badge variant="secondary" className="mt-2">
                  Pending Review
                </Badge>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/contacts">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-purple-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact Messages</h3>
                <p className="text-slate-600 text-sm">View and respond to user messages</p>
                <Badge variant="secondary" className="mt-2">
                  {stats.totalContacts} Messages
                </Badge>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/analytics">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Analytics</h3>
                <p className="text-slate-600 text-sm">View site statistics and performance</p>
                <Badge variant="secondary" className="mt-2">
                  Live Data
                </Badge>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/seo">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Eye className="h-12 w-12 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">SEO Management</h3>
                <p className="text-slate-600 text-sm">Manage meta tags and SEO settings</p>
                <Badge variant="secondary" className="mt-2">
                  Optimized
                </Badge>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/settings">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Settings className="h-12 w-12 text-slate-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Site Settings</h3>
                <p className="text-slate-600 text-sm">Configure site-wide settings</p>
                <Badge variant="secondary" className="mt-2">
                  Configure
                </Badge>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

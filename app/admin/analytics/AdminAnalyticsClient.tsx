"use client"

import { useState } from "react"
import Link from "next/link"
import {
  GraduationCap,
  ArrowLeft,
  TrendingUp,
  Users,
  Eye,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminAnalyticsClient() {
  const [timeRange, setTimeRange] = useState("7d")

  const stats = {
    totalVisitors: 125430,
    todayVisitors: 2340,
    pageViews: 456780,
    avgSessionDuration: "3m 45s",
    bounceRate: "42.3%",
    topPages: [
      { page: "/", views: 45230, percentage: 35.2 },
      { page: "/results", views: 32140, percentage: 25.1 },
      { page: "/boards", views: 18950, percentage: 14.8 },
      { page: "/blog", views: 12340, percentage: 9.6 },
      { page: "/about", views: 8760, percentage: 6.8 },
    ],
    devices: [
      { type: "Mobile", users: 78230, percentage: 62.4 },
      { type: "Desktop", users: 35670, percentage: 28.4 },
      { type: "Tablet", users: 11530, percentage: 9.2 },
    ],
    browsers: [
      { name: "Chrome", users: 89340, percentage: 71.2 },
      { name: "Safari", users: 18760, percentage: 15.0 },
      { name: "Firefox", users: 12450, percentage: 9.9 },
      { name: "Edge", users: 4880, percentage: 3.9 },
    ],
    countries: [
      { name: "Pakistan", users: 98450, percentage: 78.5 },
      { name: "India", users: 12340, percentage: 9.8 },
      { name: "UAE", users: 6780, percentage: 5.4 },
      { name: "Saudi Arabia", users: 4560, percentage: 3.6 },
      { name: "Others", users: 3300, percentage: 2.7 },
    ],
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div className="h-6 w-px bg-slate-300"></div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <h1 className="text-xl font-bold text-slate-800">Analytics</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1d">Last 24 hours</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Visitors</p>
                  <p className="text-3xl font-bold text-slate-900">{stats.totalVisitors.toLocaleString()}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last period
                  </p>
                </div>
                <Users className="h-12 w-12 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Page Views</p>
                  <p className="text-3xl font-bold text-slate-900">{stats.pageViews.toLocaleString()}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.2% from last period
                  </p>
                </div>
                <Eye className="h-12 w-12 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Avg. Session</p>
                  <p className="text-3xl font-bold text-slate-900">{stats.avgSessionDuration}</p>
                  <p className="text-sm text-red-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                    -2.1% from last period
                  </p>
                </div>
                <Clock className="h-12 w-12 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Bounce Rate</p>
                  <p className="text-3xl font-bold text-slate-900">{stats.bounceRate}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                    -5.3% from last period
                  </p>
                </div>
                <Globe className="h-12 w-12 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle>Top Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{page.page}</p>
                      <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${page.percentage}%` }}></div>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="font-semibold text-slate-900">{page.views.toLocaleString()}</p>
                      <p className="text-sm text-slate-500">{page.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Device Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Device Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.devices.map((device, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {device.type === "Mobile" && <Smartphone className="h-5 w-5 text-blue-500" />}
                      {device.type === "Desktop" && <Monitor className="h-5 w-5 text-green-500" />}
                      {device.type === "Tablet" && <Monitor className="h-5 w-5 text-purple-500" />}
                      <span className="font-medium text-slate-900">{device.type}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">{device.users.toLocaleString()}</p>
                      <p className="text-sm text-slate-500">{device.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Browser Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Browser Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.browsers.map((browser, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{browser.name}</p>
                      <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${browser.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="font-semibold text-slate-900">{browser.users.toLocaleString()}</p>
                      <p className="text-sm text-slate-500">{browser.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Geographic Data */}
          <Card>
            <CardHeader>
              <CardTitle>Top Countries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.countries.map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{country.name}</p>
                      <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${country.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <p className="font-semibold text-slate-900">{country.users.toLocaleString()}</p>
                      <p className="text-sm text-slate-500">{country.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Real-time Stats */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Real-time Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">{stats.todayVisitors}</p>
                <p className="text-sm text-slate-600">Active Users Right Now</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">156</p>
                <p className="text-sm text-slate-600">Results Checked Today</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-600">23</p>
                <p className="text-sm text-slate-600">New Visitors This Hour</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

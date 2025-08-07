"use client"

import { useState } from "react"
import Link from "next/link"
import {
  GraduationCap,
  ArrowLeft,
  Search,
  TrendingUp,
  Globe,
  FileText,
  Eye,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SEOPage {
  url: string
  title: string
  metaDescription: string
  keywords: string[]
  status: "optimized" | "needs-work" | "missing"
  score: number
  issues: string[]
}

export default function AdminSEOClient() {
  const [pages] = useState<SEOPage[]>([
    {
      url: "/",
      title: "ResultCheck - Student Result Checking System | Learnyst.pk",
      metaDescription:
        "Check your educational board results instantly with ResultCheck. Fast, reliable, and free result checking service for students across Pakistan.",
      keywords: ["student results", "board results", "result checking"],
      status: "optimized",
      score: 95,
      issues: [],
    },
    {
      url: "/about",
      title: "About Us - Pakistan's Leading Result Checking Platform",
      metaDescription:
        "Learn about Learnyst.pk, Pakistan's fast and reliable online platform for checking educational board results.",
      keywords: ["about learnyst", "result platform", "educational services"],
      status: "optimized",
      score: 88,
      issues: ["Meta description could be longer"],
    },
    {
      url: "/boards",
      title: "Educational Boards in Pakistan - Complete Guide & Result Checking",
      metaDescription:
        "Comprehensive guide to all major educational boards in Pakistan. Check results for BISE Lahore, Karachi, Rawalpindi, and more.",
      keywords: ["educational boards", "BISE boards", "Pakistan boards"],
      status: "needs-work",
      score: 72,
      issues: ["Missing H1 tag", "Low keyword density"],
    },
    {
      url: "/blog",
      title: "Educational Blog - Study Tips, Exam Guides & Board Updates",
      metaDescription:
        "Read our educational blog for study tips, exam preparation guides, board updates, and academic advice for Pakistani students.",
      keywords: ["educational blog", "study tips", "exam guides"],
      status: "optimized",
      score: 91,
      issues: [],
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")

  const filteredPages = pages.filter(
    (page) =>
      page.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimized":
        return "bg-green-100 text-green-800"
      case "needs-work":
        return "bg-yellow-100 text-yellow-800"
      case "missing":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
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
                <h1 className="text-xl font-bold text-slate-800">SEO Management</h1>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <TrendingUp className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* SEO Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Pages</p>
                  <p className="text-3xl font-bold text-slate-900">{pages.length}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Optimized</p>
                  <p className="text-3xl font-bold text-green-600">
                    {pages.filter((p) => p.status === "optimized").length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Needs Work</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {pages.filter((p) => p.status === "needs-work").length}
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Avg. Score</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {Math.round(pages.reduce((sum, page) => sum + page.score, 0) / pages.length)}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pages List */}
        <Card>
          <CardHeader>
            <CardTitle>SEO Analysis ({filteredPages.length} pages)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {filteredPages.map((page, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-900">{page.url}</h3>
                        <Badge className={getStatusColor(page.status)}>{page.status.replace("-", " ")}</Badge>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm text-slate-500">Score:</span>
                          <span className={`font-bold ${getScoreColor(page.score)}`}>{page.score}/100</span>
                        </div>
                      </div>
                      <a
                        href={page.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 flex items-center text-sm mb-3"
                      >
                        View Page <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Analyze
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">Title Tag</h4>
                      <p className="text-sm text-slate-600 bg-slate-50 p-2 rounded">{page.title}</p>
                      <p className="text-xs text-slate-500 mt-1">Length: {page.title.length} characters</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-800 mb-1">Meta Description</h4>
                      <p className="text-sm text-slate-600 bg-slate-50 p-2 rounded">{page.metaDescription}</p>
                      <p className="text-xs text-slate-500 mt-1">Length: {page.metaDescription.length} characters</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {page.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="outline">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {page.issues.length > 0 && (
                      <div>
                        <h4 className="font-medium text-slate-800 mb-2 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1 text-yellow-500" />
                          Issues to Fix
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {page.issues.map((issue, idx) => (
                            <li key={idx} className="text-sm text-slate-600">
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* SEO Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>SEO Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Globe className="h-4 w-4 mr-2" />
                Generate Sitemap
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <FileText className="h-4 w-4 mr-2" />
                Update Robots.txt
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Search className="h-4 w-4 mr-2" />
                Submit to Search Console
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-600">Pages with meta descriptions:</span>
                <span className="font-semibold">
                  {pages.length}/{pages.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Pages with keywords:</span>
                <span className="font-semibold">
                  {pages.length}/{pages.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Average title length:</span>
                <span className="font-semibold">
                  {Math.round(pages.reduce((sum, page) => sum + page.title.length, 0) / pages.length)} chars
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

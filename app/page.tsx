"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, BookOpen, Users, Award, TrendingUp, Clock, Shield, CheckCircle, ArrowRight, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Layout from "./components/Layout"
import ResultTimer from "./components/ResultTimer"

interface TimerData {
  id: string
  boardName: string
  examType: string
  announcementTime: string
  isActive: boolean
  message: string
}

interface BoardData {
  id: string
  name: string
  code: string
  status: 'active' | 'coming_soon' | 'inactive'
  students: string
  message?: string
}

export default function StudentResultSystem() {
  const [rollNumber, setRollNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [timerData, setTimerData] = useState<TimerData | null>(null)
  const [boardsData, setBoardsData] = useState<BoardData[]>([])
  const router = useRouter()

  // Fetch timer data
  useEffect(() => {
    const fetchTimer = async () => {
      try {
        const response = await fetch('/api/admin/timer')
        const data = await response.json()
        if (data.success && data.timer && data.timer.isActive) {
          setTimerData(data.timer)
        }
      } catch (error) {
        console.error('Failed to fetch timer:', error)
      }
    }

    const fetchBoards = async () => {
      try {
        const response = await fetch('/api/admin/boards')
        const data = await response.json()
        if (data.success) {
          setBoardsData(data.boards)
        }
      } catch (error) {
        console.error('Failed to fetch boards:', error)
      }
    }

    fetchTimer()
    fetchBoards()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rollNumber.trim()) {
      setIsLoading(true)
      router.push(`/results?roll=${encodeURIComponent(rollNumber.trim())}`)
    }
  }

  // Filter boards by status
  const activeBoards = boardsData.filter(board => board.status === 'active')
  const comingSoonBoards = boardsData.filter(board => board.status === 'coming_soon')
  const featuredBoards = [...activeBoards, ...comingSoonBoards.slice(0, 5 - activeBoards.length)]

  const howItWorks = [
    {
      step: "1",
      title: "Enter Roll Number",
      description: "Simply enter your examination roll number in the search box above",
      icon: <Search className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "Select Your Board",
      description: "Choose your educational board from our comprehensive list",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      step: "3",
      title: "View Results",
      description: "Get instant access to your detailed examination results",
      icon: <Award className="h-6 w-6" />
    }
  ]

  const features = [
    {
      title: "Instant Results",
      description: "Get your examination results within seconds of entering your roll number",
      icon: <Clock className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security measures",
      icon: <Shield className="h-5 w-5 text-green-500" />
    },
    {
      title: "All Boards Covered",
      description: "Supporting all major educational boards across Pakistan",
      icon: <CheckCircle className="h-5 w-5 text-purple-500" />
    },
    {
      title: "Community Driven",
      description: "Help us expand by uploading gazette data for new boards",
      icon: <Users className="h-5 w-5 text-orange-500" />
    }
  ]

  const recentUpdates = [
    {
      title: "BISE Rawalpindi Matric Results 2024 Available",
      date: "2 hours ago",
      category: "Results",
      href: "/blog/bise-rawalpindi-matric-results-2024"
    },
    {
      title: "How to Check Your Result Online - Complete Guide",
      date: "1 day ago", 
      category: "Guide",
      href: "/blog/how-to-check-result-online"
    },
    {
      title: "New Boards Coming Soon - Upload Gazette Data",
      date: "3 days ago",
      category: "News",
      href: "/blog/new-boards-coming-soon"
    }
  ]

  const popularSearches = [
    "BISE Rawalpindi Result 2024",
    "Matric Result Check",
    "Board Result by Roll Number",
    "Inter Result Pakistan",
    "Educational Board Results",
    "Student Result Portal"
  ]

  const stats = [
    { label: "Students Served", value: "2M+", icon: <Users className="h-5 w-5" /> },
    { label: "Educational Boards", value: `${activeBoards.length}+`, icon: <BookOpen className="h-5 w-5" /> },
    { label: "Results Checked Daily", value: "50K+", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Success Rate", value: "99.9%", icon: <Award className="h-5 w-5" /> }
  ]

  return (
    <Layout>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ResultCheck - Learnyst.pk",
            description: "Pakistan's most trusted student result checking system for all educational boards. Check your matric, intermediate, and other examination results instantly by roll number.",
            url: "https://learnyst.pk",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://learnyst.pk/results?roll={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            publisher: {
              "@type": "Organization",
              name: "Learnyst.pk",
              url: "https://learnyst.pk",
              logo: "https://learnyst.pk/logo.png"
            },
            sameAs: [
              "https://facebook.com/learnyst",
              "https://twitter.com/learnyst",
              "https://instagram.com/learnyst"
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              Check Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Exam Results</span> Instantly
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-2">
              Pakistan's Most Trusted Student Result Portal
            </p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Get instant access to your examination results from all major educational boards across Pakistan. Fast, secure, and reliable result checking service.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Timer or Search Form */}
          <div className="mb-12">
            {timerData ? (
              <ResultTimer timerData={timerData} />
            ) : (
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Enter your roll number"
                      value={rollNumber}
                      onChange={(e) => setRollNumber(e.target.value)}
                      className="pl-12 pr-4 py-4 w-full bg-white border-slate-300 text-slate-800 placeholder-slate-500 rounded-xl text-lg font-medium shadow-lg backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:shadow-xl"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Checking...</span>
                      </div>
                    ) : (
                      "Check Results Now"
                    )}
                  </Button>
                </form>
              </div>
            )}
          </div>

          {/* Popular Searches */}
          <div className="mb-16">
            <p className="text-sm text-slate-500 mb-3">Popular Searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularSearches.map((search, index) => (
                <Badge key={index} variant="secondary" className="text-xs px-3 py-1 bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors">
                  {search}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Boards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Supported Educational Boards
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We support educational boards across Pakistan. Currently active boards provide instant results, while others are coming soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredBoards.map((board, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer border-slate-200 relative">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    {board.code}
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">{board.name}</h3>
                  <p className="text-sm text-slate-600 mb-2">{board.students} students</p>
                  
                  {board.status === 'active' ? (
                    <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">
                      ✓ Active
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 text-xs">
                      Coming Soon
                    </Badge>
                  )}
                  
                  {board.status === 'coming_soon' && board.message && (
                    <p className="text-xs text-slate-500 mt-2 leading-tight">
                      {board.message}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="px-6 py-2">
              View All Boards <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              How to Check Your Results
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Follow these simple steps to access your examination results quickly and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose ResultCheck?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide the most reliable and user-friendly platform for checking examination results in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-lg font-semibold text-slate-800 ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Latest Updates & News
              </h2>
              <p className="text-lg text-slate-600">
                Stay updated with the latest examination news and result announcements.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentUpdates.map((update, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer border-slate-200 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {update.category}
                    </Badge>
                    <div className="flex items-center text-xs text-slate-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {update.date}
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2">
                    {update.title}
                  </h3>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline">
              View All Updates <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about checking your results.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-2">
                  How do I check my result if I forgot my roll number?
                </h3>
                <p className="text-slate-600">
                  You can contact your educational institution or board office to retrieve your roll number. Alternatively, check your admit card or examination slip.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Which boards are currently supported?
                </h3>
                <p className="text-slate-600">
                  Currently, we fully support BISE Rawalpindi with real-time results. Other boards are coming soon - we're working to add gazette data for all major boards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-2">
                  How can I help add support for my board?
                </h3>
                <p className="text-slate-600">
                  If you have gazette data for any board, please upload it through our Upload Gazette page. This helps us add support for new boards faster.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Check Your Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of students who trust ResultCheck for their examination results. Fast, secure, and always up-to-date.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg font-semibold">
              Check Results Now
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold border-white text-white hover:bg-white hover:text-blue-600">
              Upload Gazette Data
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import {
  GraduationCap,
  ArrowLeft,
  Mail,
  Reply,
  Trash2,
  Search,
  Calendar,
  User,
  MessageSquare,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  date: string
  status: "new" | "replied" | "resolved"
  priority: "low" | "medium" | "high"
}

export default function AdminContactsClient() {
  const [messages, setMessages] = useState<ContactMessage[]>([
    {
      id: "1",
      name: "Ahmad Khan",
      email: "ahmad@example.com",
      subject: "Unable to check my result",
      message:
        "I am trying to check my BISE Lahore result but getting an error. My roll number is 123456. Please help.",
      date: "2024-01-08T10:30:00Z",
      status: "new",
      priority: "high",
    },
    {
      id: "2",
      name: "Fatima Ali",
      email: "fatima@example.com",
      subject: "Question about board information",
      message: "Can you please provide more information about BISE Karachi examination schedule?",
      date: "2024-01-07T15:45:00Z",
      status: "replied",
      priority: "medium",
    },
    {
      id: "3",
      name: "Muhammad Hassan",
      email: "hassan@example.com",
      subject: "Website feedback",
      message: "Great website! Very helpful for checking results. Keep up the good work.",
      date: "2024-01-06T09:20:00Z",
      status: "resolved",
      priority: "low",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || message.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "replied":
        return "bg-yellow-100 text-yellow-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleStatusChange = (id: string, newStatus: "new" | "replied" | "resolved") => {
    setMessages(messages.map((msg) => (msg.id === id ? { ...msg, status: newStatus } : msg)))
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      setMessages(messages.filter((msg) => msg.id !== id))
      if (selectedMessage?.id === id) {
        setSelectedMessage(null)
      }
    }
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
                <h1 className="text-xl font-bold text-slate-800">Contact Messages</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Messages</p>
                  <p className="text-3xl font-bold text-slate-900">{messages.length}</p>
                </div>
                <MessageSquare className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">New Messages</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {messages.filter((m) => m.status === "new").length}
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Pending Reply</p>
                  <p className="text-3xl font-bold text-yellow-600">
                    {messages.filter((m) => m.status === "replied").length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Resolved</p>
                  <p className="text-3xl font-bold text-green-600">
                    {messages.filter((m) => m.status === "resolved").length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        placeholder="Search messages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="new">New</option>
                    <option value="replied">Replied</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedMessage?.id === message.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      onClick={() => setSelectedMessage(message)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-slate-900">{message.name}</h3>
                            <Badge className={getStatusColor(message.status)}>{message.status}</Badge>
                            <Badge className={getPriorityColor(message.priority)}>{message.priority}</Badge>
                          </div>
                          <p className="text-sm text-slate-600">{message.email}</p>
                        </div>
                        <span className="text-xs text-slate-500">{new Date(message.date).toLocaleDateString()}</span>
                      </div>
                      <h4 className="font-medium text-slate-800 mb-2">{message.subject}</h4>
                      <p className="text-sm text-slate-600 line-clamp-2">{message.message}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message Detail */}
          <div>
            {selectedMessage ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Message Details</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(selectedMessage.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <User className="h-4 w-4 text-slate-400" />
                      <span className="font-medium">{selectedMessage.name}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{selectedMessage.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{new Date(selectedMessage.date).toLocaleString()}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Subject</h4>
                    <p className="text-slate-700">{selectedMessage.subject}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Message</h4>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-slate-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Status</h4>
                    <div className="flex gap-2">
                      <Button
                        variant={selectedMessage.status === "new" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleStatusChange(selectedMessage.id, "new")}
                      >
                        New
                      </Button>
                      <Button
                        variant={selectedMessage.status === "replied" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleStatusChange(selectedMessage.id, "replied")}
                      >
                        Replied
                      </Button>
                      <Button
                        variant={selectedMessage.status === "resolved" ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleStatusChange(selectedMessage.id, "resolved")}
                      >
                        Resolved
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Reply className="h-4 w-4 mr-2" />
                      Reply to Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <MessageSquare className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Select a Message</h3>
                  <p className="text-slate-500">Choose a message from the list to view details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { GraduationCap, ArrowLeft, Save, Clock, Calendar, Bell, Play, Pause, Trash2, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TimerData {
  id: string
  boardName: string
  examType: string
  announcementTime: string
  isActive: boolean
  message: string
  createdAt: string
  updatedAt: string
}

export default function AdminTimerClient() {
  const [timer, setTimer] = useState<TimerData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    boardName: "",
    examType: "",
    announcementTime: "",
    message: "",
    isActive: false
  })

  useEffect(() => {
    fetchTimer()
  }, [])

  const fetchTimer = async () => {
    try {
      const response = await fetch('/api/admin/timer')
      const data = await response.json()
      if (data.success && data.timer) {
        setTimer(data.timer)
        setFormData({
          boardName: data.timer.boardName,
          examType: data.timer.examType,
          announcementTime: data.timer.announcementTime.slice(0, 16), // Format for datetime-local input
          message: data.timer.message,
          isActive: data.timer.isActive
        })
      }
    } catch (error) {
      setError("Failed to fetch timer data")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setError("")

    try {
      const response = await fetch('/api/admin/timer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          announcementTime: new Date(formData.announcementTime).toISOString()
        }),
      })

      const data = await response.json()
      if (data.success) {
        setTimer(data.timer)
        setSuccess("Timer updated successfully!")
        setTimeout(() => setSuccess(""), 3000)
      } else {
        setError(data.error || "Failed to update timer")
      }
    } catch (error) {
      setError("Failed to update timer")
    } finally {
      setIsSaving(false)
    }
  }

  const toggleTimer = async () => {
    try {
      const response = await fetch('/api/admin/timer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          isActive: !formData.isActive,
          announcementTime: new Date(formData.announcementTime).toISOString()
        }),
      })

      const data = await response.json()
      if (data.success) {
        setTimer(data.timer)
        setFormData(prev => ({ ...prev, isActive: !prev.isActive }))
        setSuccess(`Timer ${!formData.isActive ? 'activated' : 'deactivated'} successfully!`)
        setTimeout(() => setSuccess(""), 3000)
      }
    } catch (error) {
      setError("Failed to toggle timer")
    }
  }

  const deleteTimer = async () => {
    if (!confirm("Are you sure you want to deactivate this timer?")) return

    try {
      const response = await fetch('/api/admin/timer', {
        method: 'DELETE',
      })

      const data = await response.json()
      if (data.success) {
        setFormData(prev => ({ ...prev, isActive: false }))
        setSuccess("Timer deactivated successfully!")
        setTimeout(() => setSuccess(""), 3000)
      }
    } catch (error) {
      setError("Failed to deactivate timer")
    }
  }

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getTimeRemaining = (targetTime: string) => {
    const now = new Date().getTime()
    const target = new Date(targetTime).getTime()
    const difference = target - now

    if (difference <= 0) return "Expired"

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

    return `${days}d ${hours}h ${minutes}m remaining`
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading timer...</p>
        </div>
      </div>
    )
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
                <Clock className="h-5 w-5 text-blue-600" />
                <h1 className="text-xl font-bold text-slate-800">Timer Management</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {formData.isActive ? (
                <Badge className="bg-green-500 hover:bg-green-600">
                  <Bell className="h-3 w-3 mr-1" />
                  Active
                </Badge>
              ) : (
                <Badge variant="secondary">
                  <Pause className="h-3 w-3 mr-1" />
                  Inactive
                </Badge>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <AlertDescription className="text-green-800">{success}</AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Instructions */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Timer Management Instructions</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• When timer is active, it replaces the search form on the homepage</li>
                  <li>• Set the exact date and time when results will be announced</li>
                  <li>• Add a custom message to inform users about the announcement</li>
                  <li>• Timer automatically expires when the target time is reached</li>
                  <li>• Only one timer can be active at a time</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timer Form */}
          <Card className="shadow-lg border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Timer Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Board Name
                  </label>
                  <Select
                    value={formData.boardName}
                    onValueChange={(value) => handleSelectChange('boardName', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select board" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BISE Lahore">BISE Lahore</SelectItem>
                      <SelectItem value="BISE Karachi">BISE Karachi</SelectItem>
                      <SelectItem value="BISE Rawalpindi">BISE Rawalpindi</SelectItem>
                      <SelectItem value="FBISE">Federal Board (FBISE)</SelectItem>
                      <SelectItem value="BISE Multan">BISE Multan</SelectItem>
                      <SelectItem value="BISE Bahawalpur">BISE Bahawalpur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Exam Type
                  </label>
                  <Input
                    name="examType"
                    value={formData.examType}
                    onChange={handleInputChange}
                    placeholder="e.g., Matric Annual Results 2024"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Announcement Date & Time
                  </label>
                  <Input
                    name="announcementTime"
                    type="datetime-local"
                    value={formData.announcementTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Custom Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Results will be announced at exactly 10:00 AM. Stay tuned!"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="isActive" className="text-sm font-medium text-slate-700">
                    Activate Timer (Show on homepage)
                  </label>
                </div>

                <div className="flex space-x-3">
                  <Button
                    type="submit"
                    disabled={isSaving}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isSaving ? "Saving..." : "Save Timer"}
                  </Button>
                  
                  <Button
                    type="button"
                    onClick={toggleTimer}
                    variant="outline"
                    className="px-6"
                  >
                    {formData.isActive ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Deactivate
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Activate
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Timer Preview */}
          <Card className="shadow-lg border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Timer Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              {formData.boardName && formData.examType && formData.announcementTime ? (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        Results Coming Soon!
                      </h3>
                      <p className="text-lg text-slate-600 mb-1">{formData.boardName}</p>
                      <p className="text-md text-slate-500 mb-4">{formData.examType}</p>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm border mb-4">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                          <span className="text-sm text-slate-600 font-medium">Expected Announcement</span>
                        </div>
                        <p className="text-lg font-semibold text-slate-800">
                          {formatDateTime(formData.announcementTime)}
                        </p>
                      </div>

                      {formData.message && (
                        <div className="bg-slate-50 rounded-lg p-3 border">
                          <p className="text-sm text-slate-600">{formData.message}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700">Status:</span>
                      <Badge className={formData.isActive ? "bg-green-500" : "bg-gray-500"}>
                        {formData.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700">Time Remaining:</span>
                      <span className="text-sm text-slate-600">
                        {getTimeRemaining(formData.announcementTime)}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-500">
                  <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Fill in the timer details to see preview</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8 shadow-lg border-slate-200">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                onClick={() => {
                  const tomorrow10AM = new Date()
                  tomorrow10AM.setDate(tomorrow10AM.getDate() + 1)
                  tomorrow10AM.setHours(10, 0, 0, 0)
                  setFormData(prev => ({
                    ...prev,
                    announcementTime: tomorrow10AM.toISOString().slice(0, 16)
                  }))
                }}
                variant="outline"
                className="w-full"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Set Tomorrow 10 AM
              </Button>
              
              <Button
                onClick={() => {
                  const nextWeek10AM = new Date()
                  nextWeek10AM.setDate(nextWeek10AM.getDate() + 7)
                  nextWeek10AM.setHours(10, 0, 0, 0)
                  setFormData(prev => ({
                    ...prev,
                    announcementTime: nextWeek10AM.toISOString().slice(0, 16)
                  }))
                }}
                variant="outline"
                className="w-full"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Set Next Week 10 AM
              </Button>
              
              <Button
                onClick={deleteTimer}
                variant="outline"
                className="w-full text-red-600 border-red-200 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Deactivate Timer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

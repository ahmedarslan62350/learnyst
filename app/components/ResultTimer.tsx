"use client"

import { useState, useEffect } from "react"
import { Clock, Calendar, Bell } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimerData {
  id: string
  boardName: string
  examType: string
  announcementTime: string
  isActive: boolean
  message: string
}

interface ResultTimerProps {
  timerData: TimerData
}

export default function ResultTimer({ timerData }: ResultTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const targetTime = new Date(timerData.announcementTime).getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetTime - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
        setIsExpired(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsExpired(true)
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [timerData.announcementTime])

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0')
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (isExpired) {
    return (
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-500 rounded-full">
              <Bell className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Results Are Now Available!</h2>
          <p className="text-green-700 mb-4">{timerData.boardName} - {timerData.examType}</p>
          <Badge className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">
            Check Your Results Now
          </Badge>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Clock className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Results Coming Soon!
          </h2>
          <p className="text-lg text-slate-600 mb-1">{timerData.boardName}</p>
          <p className="text-md text-slate-500">{timerData.examType}</p>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 shadow-md border">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                {formatTime(timeLeft.days)}
              </div>
              <div className="text-sm text-slate-500 font-medium">Days</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 shadow-md border">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">
                {formatTime(timeLeft.hours)}
              </div>
              <div className="text-sm text-slate-500 font-medium">Hours</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 shadow-md border">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                {formatTime(timeLeft.minutes)}
              </div>
              <div className="text-sm text-slate-500 font-medium">Minutes</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-4 shadow-md border">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">
                {formatTime(timeLeft.seconds)}
              </div>
              <div className="text-sm text-slate-500 font-medium">Seconds</div>
            </div>
          </div>
        </div>

        {/* Announcement Details */}
        <div className="text-center bg-white rounded-lg p-4 shadow-sm border">
          <div className="flex items-center justify-center mb-2">
            <Calendar className="h-4 w-4 text-slate-500 mr-2" />
            <span className="text-sm text-slate-600 font-medium">Expected Announcement</span>
          </div>
          <p className="text-lg font-semibold text-slate-800">
            {formatDate(timerData.announcementTime)}
          </p>
        </div>

        {/* Custom Message */}
        {timerData.message && (
          <div className="mt-4 text-center">
            <p className="text-sm text-slate-600 bg-slate-50 rounded-lg p-3 border">
              {timerData.message}
            </p>
          </div>
        )}

        {/* Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            * Results will be available immediately after the official announcement
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

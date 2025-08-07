"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { GraduationCap, ArrowLeft, Save, Globe, Mail, Shield, Bell, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminSettingsClient() {
  const [settings, setSettings] = useState({
    // General Settings
    siteName: "ResultCheck",
    siteDescription: "Student result checking system for educational boards in Pakistan",
    siteUrl: "https://learnyst.pk",
    adminEmail: "admin@learnyst.pk",
    contactEmail: "support@learnyst.pk",

    // SEO Settings
    metaTitle: "ResultCheck - Student Result Checking System | Learnyst.pk",
    metaDescription:
      "Check your educational board results instantly with ResultCheck. Fast, reliable, and free result checking service for students across Pakistan.",
    metaKeywords: "student results, board results Pakistan, result checking, educational results",

    // Social Media
    facebookUrl: "https://facebook.com/learnystpk",
    twitterUrl: "https://twitter.com/learnystpk",
    instagramUrl: "https://instagram.com/learnystpk",

    // Analytics
    googleAnalyticsId: "",
    googleAdsenseId: "",

    // Email Settings
    smtpHost: "smtp.gmail.com",
    smtpPort: "587",
    smtpUser: "",
    smtpPassword: "",

    // Security
    enableTwoFactor: false,
    sessionTimeout: "24",
    maxLoginAttempts: "5",

    // Notifications
    emailNotifications: true,
    resultNotifications: true,
    contactFormNotifications: true,
  })

  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSuccess("Settings saved successfully!")
      setTimeout(() => setSuccess(""), 3000)
    } catch (error) {
      setError("Failed to save settings. Please try again.")
    } finally {
      setIsLoading(false)
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
                <h1 className="text-xl font-bold text-slate-800">Site Settings</h1>
              </div>
            </div>
            <Button onClick={handleSubmit} disabled={isLoading} className="bg-green-600 hover:bg-green-700">
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
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

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Site Name</label>
                  <Input
                    name="siteName"
                    value={settings.siteName}
                    onChange={handleInputChange}
                    placeholder="ResultCheck"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Site URL</label>
                  <Input
                    name="siteUrl"
                    value={settings.siteUrl}
                    onChange={handleInputChange}
                    placeholder="https://learnyst.pk"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Site Description</label>
                <Textarea
                  name="siteDescription"
                  value={settings.siteDescription}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Brief description of your website"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Admin Email</label>
                  <Input
                    name="adminEmail"
                    type="email"
                    value={settings.adminEmail}
                    onChange={handleInputChange}
                    placeholder="admin@learnyst.pk"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Contact Email</label>
                  <Input
                    name="contactEmail"
                    type="email"
                    value={settings.contactEmail}
                    onChange={handleInputChange}
                    placeholder="support@learnyst.pk"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                SEO Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Meta Title</label>
                <Input
                  name="metaTitle"
                  value={settings.metaTitle}
                  onChange={handleInputChange}
                  placeholder="Site title for search engines"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Meta Description</label>
                <Textarea
                  name="metaDescription"
                  value={settings.metaDescription}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Site description for search engines"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Meta Keywords</label>
                <Input
                  name="metaKeywords"
                  value={settings.metaKeywords}
                  onChange={handleInputChange}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
            </CardContent>
          </Card>

          {/* Analytics & Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-5 w-5 mr-2" />
                Analytics & Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Google Analytics ID</label>
                  <Input
                    name="googleAnalyticsId"
                    value={settings.googleAnalyticsId}
                    onChange={handleInputChange}
                    placeholder="G-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Google AdSense ID</label>
                  <Input
                    name="googleAdsenseId"
                    value={settings.googleAdsenseId}
                    onChange={handleInputChange}
                    placeholder="ca-pub-xxxxxxxxxxxxxxxxx"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">SMTP Host</label>
                  <Input
                    name="smtpHost"
                    value={settings.smtpHost}
                    onChange={handleInputChange}
                    placeholder="smtp.gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">SMTP Port</label>
                  <Input name="smtpPort" value={settings.smtpPort} onChange={handleInputChange} placeholder="587" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">SMTP Username</label>
                  <Input
                    name="smtpUser"
                    value={settings.smtpUser}
                    onChange={handleInputChange}
                    placeholder="your-email@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">SMTP Password</label>
                  <Input
                    name="smtpPassword"
                    type="password"
                    value={settings.smtpPassword}
                    onChange={handleInputChange}
                    placeholder="Your app password"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Session Timeout (hours)</label>
                  <Input
                    name="sessionTimeout"
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={handleInputChange}
                    placeholder="24"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Max Login Attempts</label>
                  <Input
                    name="maxLoginAttempts"
                    type="number"
                    value={settings.maxLoginAttempts}
                    onChange={handleInputChange}
                    placeholder="5"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="enableTwoFactor"
                  name="enableTwoFactor"
                  checked={settings.enableTwoFactor}
                  onChange={handleInputChange}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="enableTwoFactor" className="text-sm font-medium text-slate-700">
                  Enable Two-Factor Authentication
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="emailNotifications"
                    name="emailNotifications"
                    checked={settings.emailNotifications}
                    onChange={handleInputChange}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="emailNotifications" className="text-sm font-medium text-slate-700">
                    Email Notifications
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="resultNotifications"
                    name="resultNotifications"
                    checked={settings.resultNotifications}
                    onChange={handleInputChange}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="resultNotifications" className="text-sm font-medium text-slate-700">
                    Result Update Notifications
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="contactFormNotifications"
                    name="contactFormNotifications"
                    checked={settings.contactFormNotifications}
                    onChange={handleInputChange}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="contactFormNotifications" className="text-sm font-medium text-slate-700">
                    Contact Form Notifications
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}

"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone, Send, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useReq from "@/hooks/useReq";
import { toast } from "@/hooks/use-toast";
import Layout from "../components/Layout";
import Head from "next/head";
import Script from "next/script";

export default function ContactPageClient() {
  const { error, loading, request } = useReq(null, "/api/contact", "POST");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    request(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    if (!loading && !error) {
      toast({
        title: "Message Sent",
        description:
          "Your message has been sent successfully. We'll get back to you soon.",
      });
    } else if (error) {
      toast({
        title: "Error",
        description:
          "Something went wrong while sending your message. Please try again later.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9231506459397955"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </Head>

      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
          {/* Main Content */}
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Have questions or need support? We're here to help you with your
                result checking needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span>Email Support</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-2">
                      Get in touch via email
                    </p>
                    <p className="font-semibold text-slate-800">
                      support@learnyst.pk
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-green-600" />
                      <span>Phone Support</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-2">
                      Call us for immediate help
                    </p>
                    <p className="font-semibold text-slate-800">
                      +92-300-6119899
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-purple-600" />
                      <span>Support Hours</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-slate-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-blue-600" />
                      <span>Quick Response</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      We typically respond to all inquiries within 24 hours
                      during business days.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-800">
                      Send us a Message
                    </CardTitle>
                    <p className="text-slate-600">
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white border-slate-300 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white border-slate-300 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Subject *
                        </label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-white border-slate-300 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="What can we help you with?"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full bg-white border-slate-300 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          placeholder="Please describe your inquiry in detail..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                      >
                        {loading ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card className="mt-8 shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-800">
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">
                          How do I check my results?
                        </h4>
                        <p className="text-slate-600 text-sm">
                          Simply enter your roll number on our homepage and
                          click "Check Now" to view your results instantly.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">
                          Which boards are supported?
                        </h4>
                        <p className="text-slate-600 text-sm">
                          We support all major educational boards across
                          Pakistan for classes 9th, 10th, 11th, and 12th.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">
                          Is this service free?
                        </h4>
                        <p className="text-slate-600 text-sm">
                          Yes, our result checking service is completely free
                          with no hidden charges.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>

          {/* Background decoration */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </Layout>
    </>
  );
}

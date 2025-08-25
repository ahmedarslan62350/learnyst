import Link from "next/link";
import { GraduationCap, ArrowLeft, Shield, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Layout from "@/app/components/Layout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Privacy Policy - How We Protect Your Data",
  description:
    "Read ResultCheck's privacy policy to understand how we collect, use, and protect your personal information when you use our student result checking services. GDPR compliant and transparent data practices.",
  keywords: [
    "privacy policy",
    "data protection",
    "student privacy",
    "GDPR compliance",
    "data security",
    "personal information protection",
  ],
  openGraph: {
    title: "Privacy Policy - ResultCheck Data Protection",
    description:
      "Learn how ResultCheck protects your privacy and personal information when using our result checking services.",
    url: "https://learnyst.pk/policies/privacy",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy - ResultCheck Data Protection",
    description:
      "Learn how ResultCheck protects your privacy and personal information when using our result checking services.",
  },
  alternates: {
    canonical: "/policies/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9231506459397955"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Layout>
        {" "}
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
          {/* Main Content */}
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-12 w-12 text-blue-600 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                  Privacy Policy
                </h1>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
              <div className="flex items-center justify-center space-x-4 text-slate-600">
                <Calendar className="h-4 w-4" />
                <span>Last updated: January 8, 2025</span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    At ResultCheck (Learnyst.pk), we are committed to protecting
                    your privacy and ensuring the security of your personal
                    information. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit
                    our website and use our student result checking services.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    By using our website, you consent to the data practices
                    described in this policy.
                  </p>
                </CardContent>
              </Card>

              {/* Information We Collect */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    1. Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        Personal Information
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>Roll numbers entered for result checking</li>
                        <li>
                          Contact information when you reach out to us (name,
                          email address)
                        </li>
                        <li>
                          Any information you provide in contact forms or
                          communications
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        Automatically Collected Information
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>IP address and browser information</li>
                        <li>Device information and operating system</li>
                        <li>Pages visited and time spent on our website</li>
                        <li>Referring website information</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    2. How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="list-disc list-inside space-y-3 text-slate-700 ml-4">
                    <li>To provide student result checking services</li>
                    <li>
                      To respond to your inquiries and provide customer support
                    </li>
                    <li>
                      To improve our website functionality and user experience
                    </li>
                    <li>To analyze website usage and performance</li>
                    <li>To comply with legal obligations</li>
                    <li>To prevent fraud and ensure website security</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cookies and Tracking */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    3. Cookies and Tracking Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance
                    your browsing experience and analyze website traffic.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Types of Cookies We Use:
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>
                          <strong>Essential Cookies:</strong> Required for
                          website functionality
                        </li>
                        <li>
                          <strong>Analytics Cookies:</strong> Help us understand
                          how visitors use our site
                        </li>
                        <li>
                          <strong>Advertising Cookies:</strong> Used to display
                          relevant advertisements
                        </li>
                      </ul>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      You can control cookies through your browser settings, but
                      disabling certain cookies may affect website
                      functionality.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Third-Party Services */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    4. Third-Party Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      We may use third-party services to enhance our website
                      functionality and provide better services:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                      <li>
                        <strong>Google AdSense:</strong> For displaying
                        advertisements on our website
                      </li>
                      <li>
                        <strong>Google Analytics:</strong> For website traffic
                        analysis and performance monitoring
                      </li>
                      <li>
                        <strong>Cloud Hosting Services:</strong> For website
                        hosting and data storage
                      </li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed">
                      These third-party services have their own privacy
                      policies, and we encourage you to review them.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    5. Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure server infrastructure</li>
                    <li>Regular security updates and monitoring</li>
                    <li>Limited access to personal information</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    6. Your Privacy Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    You have the following rights regarding your personal
                    information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>Right to access your personal information</li>
                    <li>Right to correct inaccurate information</li>
                    <li>Right to delete your personal information</li>
                    <li>Right to restrict processing of your information</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mt-4">
                    To exercise these rights, please contact us using the
                    information provided below.
                  </p>
                </CardContent>
              </Card>

              {/* Data Retention */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    7. Data Retention
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-slate-700 leading-relaxed">
                    We retain your personal information only for as long as
                    necessary to fulfill the purposes outlined in this privacy
                    policy, comply with legal obligations, resolve disputes, and
                    enforce our agreements. Roll numbers used for result
                    checking are not stored permanently and are only used for
                    the duration of the search session.
                  </p>
                </CardContent>
              </Card>

              {/* Children's Privacy */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    8. Children's Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-slate-700 leading-relaxed">
                    Our website is designed to serve students of all ages. We do
                    not knowingly collect personal information from children
                    under 13 without parental consent. If you are a parent or
                    guardian and believe your child has provided us with
                    personal information, please contact us immediately.
                  </p>
                </CardContent>
              </Card>

              {/* Changes to Privacy Policy */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    9. Changes to This Privacy Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-slate-700 leading-relaxed">
                    We may update this privacy policy from time to time to
                    reflect changes in our practices or legal requirements. We
                    will notify you of any material changes by posting the
                    updated policy on our website with a new "Last Updated"
                    date. Your continued use of our website after such changes
                    constitutes acceptance of the updated policy.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <Mail className="h-6 w-6 mr-2" />
                    10. Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-slate-700">
                    <p>
                      <strong>Email:</strong> support@learnyst.pk
                    </p>
                    <p>
                      <strong>Website:</strong> www.learnyst.pk
                    </p>
                    <p>
                      <strong>Address:</strong> Pakistan
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
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

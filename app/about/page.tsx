import type { Metadata } from "next"
import Link from "next/link"
import { GraduationCap, Target, CheckCircle, Globe, Phone, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us - Pakistan's Leading Result Checking Platform",
  description:
    "Learn about Learnyst.pk, Pakistan's fast and reliable online platform for checking educational board results. We provide quick, accurate, and hassle-free access to 9th, 10th, 11th, and 12th class results from all major boards.",
  keywords: [
    "about learnyst",
    "result checking platform",
    "educational services Pakistan",
    "board results service",
    "student result platform",
    "academic results Pakistan",
  ],
  openGraph: {
    title: "About ResultCheck - Pakistan's Leading Result Checking Platform",
    description:
      "Learn about Learnyst.pk, Pakistan's fast and reliable online platform for checking educational board results.",
    url: "https://learnyst.pk/about",
    type: "website",
  },
  twitter: {
    title: "About ResultCheck - Pakistan's Leading Result Checking Platform",
    description:
      "Learn about Learnyst.pk, Pakistan's fast and reliable online platform for checking educational board results.",
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Learnyst.pk",
            alternateName: "ResultCheck",
            url: "https://learnyst.pk",
            description: "Pakistan's fast and reliable online platform for checking educational board results",
            foundingDate: "2024",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+92-XXX-XXXXXXX",
              contactType: "customer service",
              email: "support@learnyst.pk",
            },
            sameAs: ["https://learnyst.pk"],
            serviceArea: {
              "@type": "Country",
              name: "Pakistan",
            },
            knowsAbout: [
              "Educational Board Results",
              "Student Result Checking",
              "Academic Records",
              "SSC Results",
              "HSSC Results",
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Header */}
        <header className="border-b border-slate-200/80 backdrop-blur-sm bg-white/90 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-md">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-800">ResultCheck</span>
              </Link>
              <Link href="/">
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Learnyst.pk</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Pakistan's fast and reliable online platform for checking educational board results
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Welcome to <strong className="text-blue-600">Learnyst.pk</strong>, Pakistan's fast and reliable online
                platform for checking educational board results. We understand the importance of academic results for
                students and parents, and our mission is to make result checking quick, simple, and accessible for
                everyone.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                With Learnyst.pk, you can easily check results for <strong>9th, 10th, 11th, and 12th classes</strong>{" "}
                from all major boards of Pakistan in just a few clicks – anytime, anywhere.
              </p>
            </CardContent>
          </Card>

          {/* Vision Section */}
          <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our goal is to become Pakistan's most trusted result-checking website, ensuring that students never face
                delays or difficulties in accessing their academic records.
              </p>
            </CardContent>
          </Card>

          {/* Why Choose Us Section */}
          <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800">Why Choose Learnyst.pk?</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Fast Result Search</h3>
                      <p className="text-slate-600">Instantly find your results by entering your roll number.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Multi-Board Coverage</h3>
                      <p className="text-slate-600">Access results for all major educational boards across Pakistan.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Mobile-Friendly</h3>
                      <p className="text-slate-600">Check your results easily from your smartphone or tablet.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Secure & Reliable</h3>
                      <p className="text-slate-600">
                        We provide verified and authentic result data from official sources.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Completely Free</h3>
                      <p className="text-slate-600">No hidden fees or charges – just simple result checking.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Section */}
          <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                To help students and parents across Pakistan get quick, accurate, and hassle-free access to their
                academic results, reducing the need to wait in long queues or visit board offices.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Phone className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For support, suggestions, or inquiries, feel free to reach out:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Email: support@learnyst.pk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Website: www.learnyst.pk</span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <p className="text-slate-700 leading-relaxed italic">
                  We're here to make result checking simple and stress-free, so you can focus on what truly matters –
                  your education and future success.
                </p>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Background decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  )
}

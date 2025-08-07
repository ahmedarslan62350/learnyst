import Link from "next/link"
import {
  GraduationCap,
  ArrowLeft,
  MapPin,
  Users,
  Calendar,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  BookOpen,
  Award,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BISE Karachi - Board of Intermediate Education Karachi | Results & Information",
  description:
    "Complete information about BISE Karachi including result checking, examination schedules, districts covered, and contact details. Check your Karachi board results instantly.",
  keywords: [
    "BISE Karachi",
    "Karachi board results",
    "Board of Intermediate Education Karachi",
    "Karachi board exam results",
    "BISE Karachi contact",
    "Karachi board districts",
  ],
  openGraph: {
    title: "BISE Karachi - Board Information & Result Checking",
    description: "Complete information about BISE Karachi including result checking and examination details.",
    url: "https://learnyst.pk/boards/bise-karachi",
    type: "website",
  },
  alternates: {
    canonical: "/boards/bise-karachi",
  },
}

export default function BISEKarachiPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Board of Intermediate Education, Karachi",
            alternateName: "BISE Karachi",
            description: "The premier educational board of Sindh province, serving the metropolitan city of Karachi.",
            url: "https://learnyst.pk/boards/bise-karachi",
            foundingDate: "1972",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karachi",
              addressRegion: "Sindh",
              addressCountry: "Pakistan",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              areaServed: "Sindh",
            },
            sameAs: ["https://biek.edu.pk"],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Header */}
        <header className="border-b border-slate-200/80 backdrop-blur-sm bg-white/90 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-md">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-800">ResultCheck</span>
              </Link>
              <Link href="/boards">
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Boards</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Sindh
              </Badge>
              <Badge variant="outline">Established 1972</Badge>
              <Badge variant="outline">400,000+ Students</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Board of Intermediate Education, Karachi
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl leading-relaxed">
              The premier educational board of Sindh province, BISE Karachi has been serving the metropolitan city of
              Karachi since 1972, conducting examinations for over 400,000 students annually and maintaining the highest
              educational standards in the region.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Result Check */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-green-600" />
                    Check BISE Karachi Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Enter your roll number to instantly check your BISE Karachi examination results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Enter your roll number"
                      className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <Link href="/">
                      <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8">
                        Check Result
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* About Section */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">About BISE Karachi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    The Board of Intermediate Education, Karachi (BISE Karachi) was established in 1972 and serves as
                    the premier educational authority for Karachi, Pakistan's largest city and economic hub. The board
                    conducts examinations for Higher Secondary School Certificate (HSSC) level.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    BISE Karachi is known for its rigorous academic standards and comprehensive examination system. It
                    serves the diverse educational needs of Karachi's multicultural population and has played a vital
                    role in producing skilled professionals for Pakistan's economy.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The board continuously adapts to modern educational requirements while maintaining its commitment to
                    academic excellence and fair assessment practices across all its affiliated institutions.
                  </p>
                </CardContent>
              </Card>

              {/* Districts Covered */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-green-600" />
                    Areas Covered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">BISE Karachi serves the following areas in Karachi:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Karachi Central", description: "Central business and educational district" },
                      { name: "Karachi East", description: "Major residential and commercial areas" },
                      { name: "Karachi West", description: "Industrial and port areas" },
                      { name: "Karachi South", description: "Historic and administrative center" },
                    ].map((area, index) => (
                      <div key={index} className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-1">{area.name}</h4>
                        <p className="text-sm text-slate-600">{area.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Examination Information */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <Award className="h-6 w-6 mr-3 text-purple-600" />
                    Examination Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">
                        HSSC (Higher Secondary School Certificate)
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>Classes 11th and 12th (Intermediate)</li>
                        <li>Annual examinations conducted in April-May</li>
                        <li>Results typically announced in August-September</li>
                        <li>Pre-Engineering, Pre-Medical, Commerce, and Arts groups</li>
                        <li>Special focus on technical and vocational education</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Special Features</h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>Multilingual examination support (Urdu, English, Sindhi)</li>
                        <li>Special provisions for differently-abled students</li>
                        <li>Online result verification system</li>
                        <li>Digital certificate issuance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Established</div>
                      <div className="text-sm text-slate-600">1972</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Students</div>
                      <div className="text-sm text-slate-600">400,000+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Colleges</div>
                      <div className="text-sm text-slate-600">1,500+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Areas</div>
                      <div className="text-sm text-slate-600">4 Districts</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800">Address</div>
                      <div className="text-sm text-slate-600">Board Office, Karachi, Sindh, Pakistan</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Phone</div>
                      <div className="text-sm text-slate-600">+92-21-99261261</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Email</div>
                      <div className="text-sm text-slate-600">info@biek.edu.pk</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Website</div>
                      <a
                        href="https://biek.edu.pk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        biek.edu.pk
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Boards */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-slate-50 to-slate-100">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800">Related Boards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link
                    href="/boards/bise-hyderabad"
                    className="block p-3 bg-white rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">BISE Hyderabad</div>
                    <div className="text-sm text-slate-600">Hyderabad Region</div>
                  </Link>
                  <Link
                    href="/boards/bise-sukkur"
                    className="block p-3 bg-white rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">BISE Sukkur</div>
                    <div className="text-sm text-slate-600">Northern Sindh</div>
                  </Link>
                  <Link
                    href="/boards/bise-lahore"
                    className="block p-3 bg-white rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">BISE Lahore</div>
                    <div className="text-sm text-slate-600">Punjab Province</div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Background decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  )
}

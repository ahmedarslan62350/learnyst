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
import Script from "next/script"

export const metadata: Metadata = {
  title: "BISE Lahore - Board of Intermediate and Secondary Education Lahore | Results & Information",
  description:
    "Complete information about BISE Lahore including result checking, examination schedules, districts covered, and contact details. Check your Lahore board results instantly.",
  keywords: [
    "BISE Lahore",
    "Lahore board results",
    "Board of Intermediate and Secondary Education Lahore",
    "Lahore board exam results",
    "BISE Lahore contact",
    "Lahore board districts",
  ],
  openGraph: {
    title: "BISE Lahore - Board Information & Result Checking",
    description: "Complete information about BISE Lahore including result checking and examination details.",
    url: "https://learnyst.pk/boards/bise-lahore",
    type: "website",
  },
  alternates: {
    canonical: "/boards/bise-lahore",
  },
}

export default function BISELahorePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9231506459397955"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Board of Intermediate and Secondary Education, Lahore",
            alternateName: "BISE Lahore",
            description:
              "One of the largest and most prestigious educational boards in Punjab, serving Lahore and surrounding districts.",
            url: "https://learnyst.pk/boards/bise-lahore",
            foundingDate: "1954",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lahore",
              addressRegion: "Punjab",
              addressCountry: "Pakistan",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              areaServed: "Punjab",
            },
            sameAs: ["https://biselahore.com"],
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
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Punjab
              </Badge>
              <Badge variant="outline">Established 1954</Badge>
              <Badge variant="outline">500,000+ Students</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Board of Intermediate and Secondary Education, Lahore
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl leading-relaxed">
              One of the largest and most prestigious educational boards in Punjab, BISE Lahore has been serving the
              educational needs of Lahore and surrounding districts since 1954, conducting examinations for over half a
              million students annually.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Result Check */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                    Check BISE Lahore Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Enter your roll number to instantly check your BISE Lahore examination results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
                        Check Result
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* About Section */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">About BISE Lahore</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    The Board of Intermediate and Secondary Education, Lahore (BISE Lahore) was established in 1954 and
                    is one of the oldest and most respected educational boards in Pakistan. It conducts examinations for
                    Secondary School Certificate (SSC) and Higher Secondary School Certificate (HSSC) levels.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    BISE Lahore is responsible for conducting fair and transparent examinations, maintaining high
                    educational standards, and ensuring quality education across its jurisdiction. The board serves
                    millions of students and has played a crucial role in shaping Pakistan's educational landscape.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    With its commitment to excellence and innovation, BISE Lahore continues to adapt to modern
                    educational needs while maintaining its reputation for academic integrity and quality assessment.
                  </p>
                </CardContent>
              </Card>

              {/* Districts Covered */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-green-600" />
                    Districts Covered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">BISE Lahore serves the following districts in Punjab province:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Lahore", description: "Provincial capital and largest city" },
                      { name: "Kasur", description: "Historic city near Indian border" },
                      { name: "Sheikhupura", description: "Industrial and agricultural center" },
                      { name: "Nankana Sahib", description: "Religious and cultural significance" },
                    ].map((district, index) => (
                      <div key={index} className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-1">{district.name}</h4>
                        <p className="text-sm text-slate-600">{district.description}</p>
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
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">SSC (Secondary School Certificate)</h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>Classes 9th and 10th (Matriculation)</li>
                        <li>Annual examinations conducted in March-April</li>
                        <li>Results typically announced in July-August</li>
                        <li>Multiple subjects including Science, Arts, and Commerce groups</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">
                        HSSC (Higher Secondary School Certificate)
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>Classes 11th and 12th (Intermediate)</li>
                        <li>Annual examinations conducted in April-May</li>
                        <li>Results typically announced in August-September</li>
                        <li>Pre-Engineering, Pre-Medical, Commerce, and Arts groups</li>
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
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Established</div>
                      <div className="text-sm text-slate-600">1954</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Students</div>
                      <div className="text-sm text-slate-600">500,000+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Schools</div>
                      <div className="text-sm text-slate-600">2,000+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Districts</div>
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
                    <Building className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800">Address</div>
                      <div className="text-sm text-slate-600">86-Mozang Road, Lahore, Punjab, Pakistan</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Phone</div>
                      <div className="text-sm text-slate-600">+92-42-99230419</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Email</div>
                      <div className="text-sm text-slate-600">info@biselahore.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Website</div>
                      <a
                        href="https://biselahore.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        biselahore.com
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
                    href="/boards/bise-rawalpindi"
                    className="block p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">BISE Rawalpindi</div>
                    <div className="text-sm text-slate-600">Rawalpindi & Islamabad</div>
                  </Link>
                  <Link
                    href="/boards/bise-faisalabad"
                    className="block p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">BISE Faisalabad</div>
                    <div className="text-sm text-slate-600">Faisalabad Region</div>
                  </Link>
                  <Link
                    href="/boards/bise-multan"
                    className="block p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">BISE Multan</div>
                    <div className="text-sm text-slate-600">Southern Punjab</div>
                  </Link>
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
    </>
  )
}

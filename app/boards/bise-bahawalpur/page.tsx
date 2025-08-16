import Link from "next/link";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "BISE Bahawalpur - Board of Intermediate and Secondary Education Bahawalpur | Results",
  description:
    "Check Bahawalpur board results 2025 online. Find 9th class, 10th class, 11th, and 12th results BISE BWP. Get latest updates, gazette, roll number wise and name wise results for Bahawalpur Board exams.",
  keywords: [
    "BISE Bahawalpur",
    "Bahawalpur board results",
    "Board of Intermediate and Secondary Education Bahawalpur",
    "Bahawalpur board exam results",
    "BISE Bahawalpur contact",
    "Islamabad board results",
  ],
  openGraph: {
    title: "BISE Bahawalpur - Board Information & Result Checking",
    description:
      "Complete information about BISE Bahawalpur including result checking and examination details.",
    url: "https://learnyst.pk/boards/bise-bahawalpur",
    type: "website",
  },
  alternates: {
    canonical: "/boards/bise-bahawalpur",
  },
};

export default function BISEBahawalpurPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Board of Intermediate and Secondary Education, Bahawalpur",
            alternateName: "BISE Bahawalpur",
            description:
              "Check Bahawalpur board results 2025 online. Find 9th class, 10th class, 11th, and 12th results BISE BWP. Get latest updates, gazette, roll number wise and name wise results for Bahawalpur Board exams. with full details and updates.",
            url: "https://learnyst.pk/boards/bise-bahawalpur",
            foundingDate: "1977",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bahawalpur",
              addressRegion: "Punjab",
              addressCountry: "Pakistan",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              areaServed: "Punjab",
            },
            sameAs: ["https://bisebwp.edu.pk"],
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
                <span className="text-xl font-bold text-slate-800">
                  ResultCheck
                </span>
              </Link>
              <Link href="/boards">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 bg-transparent"
                >
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
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-800"
              >
                Punjab
              </Badge>
              <Badge variant="outline">Established 1977</Badge>
              <Badge variant="outline">160,000+ Students</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Board of Intermediate and Secondary Education, Bahawalpur
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl leading-relaxed">
              Serving the city of Bahawalpur and surrounding areas since 1979,
              BISE Bahawalpur conducts examinations for thousands of students
              annually and maintains high educational standards in the region
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Result Check */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-purple-600" />
                    Check BISE Bahawalpur Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Enter your roll number to instantly check your BISE
                    Bahawalpur examination results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Enter your roll number"
                      className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <Link href="/">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8">
                        Check Result
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* About Section */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    About BISE Bahawalpur
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    The Board of Intermediate and Secondary Education,
                    Bahawalpur (BISE Bahawalpur) conducts examinations for
                    thousands of students annually and maintains high
                    educational standards in the region. It conducts
                    examinations for both SSC and HSSC levels.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    BISE Bahawalpur holds a unique position as it serves the
                    historic city of Bahawalpur and the surrounding districts.
                    The board is known for its efficient administration and
                    timely declaration of results, catering to a diverse student
                    population from both urban and rural areas.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    With its strategic role and comprehensive educational
                    services, BISE Bahawalpur continues to play a vital part in
                    the educational development of the region, maintaining high
                    standards of academic excellence.
                  </p>
                </CardContent>
              </Card>

              {/* Districts Covered */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-purple-600" />
                    Districts Covered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    BISE Bahawalpur serves the following districts:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Bahawalpur",
                        description: "Historic city and administrative center",
                      },
                      {
                        name: "Bahawalnagar",
                        description:
                          "Agricultural district with cultural heritage",
                      },
                      {
                        name: "Rahim Yar Khan",
                        description: "Major commercial and agricultural hub",
                      },
                      {
                        name: "Khanpur",
                        description:
                          "Important town with educational institutions",
                      },
                      {
                        name: "Hasilpur",
                        description: "Agricultural and local trade center",
                      },
                    ].map((district, index) => (
                      <div key={index} className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {district.name}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {district.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Examination Information */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <Award className="h-6 w-6 mr-3 text-pink-600" />
                    Examination Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">
                        SSC (Secondary School Certificate)
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>Classes 9th and 10th (Matriculation)</li>
                        <li>Annual examinations conducted in March-April</li>
                        <li>Results typically announced in July-August</li>
                        <li>Science, Arts, and Commerce groups available</li>
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
                        <li>
                          Pre-Engineering, Pre-Medical, Commerce, and Arts
                          groups
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">
                        Special Features
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>
                          Serves both federal capital and provincial areas
                        </li>
                        <li>Modern examination centers and facilities</li>
                        <li>
                          Online result verification and certificate services
                        </li>
                        <li>
                          Special arrangements for federal government employees'
                          children
                        </li>
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
                  <CardTitle className="text-xl font-bold text-slate-800">
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Established
                      </div>
                      <div className="text-sm text-slate-600">1979</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-pink-600" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Students
                      </div>
                      <div className="text-sm text-slate-600">160,000+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Schools
                      </div>
                      <div className="text-sm text-slate-600">1,800+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Districts
                      </div>
                      <div className="text-sm text-slate-600">5 Districts</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Address
                      </div>
                      <div className="text-sm text-slate-600">
                        Ahmedpur East Road, Bahawalpur, Punjab, Pakistan
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-pink-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Phone</div>
                      <div className="text-sm text-slate-600">
                        +92-62-9250055
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Email</div>
                      <div className="text-sm text-slate-600">
                        info@bisebwp.edu.pk
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Website
                      </div>
                      <a
                        href="https://bisebwp.edu.pk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        bisebwp.edu.pk
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Boards */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-slate-50 to-slate-100">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800">
                    Related Boards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link
                    href="/boards/fbise"
                    className="block p-3 bg-white rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">FBISE</div>
                    <div className="text-sm text-slate-600">Federal Board</div>
                  </Link>
                  <Link
                    href="/boards/bise-lahore"
                    className="block p-3 bg-white rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">
                      BISE Lahore
                    </div>
                    <div className="text-sm text-slate-600">Lahore Region</div>
                  </Link>
                  <Link
                    href="/boards/bise-gujranwala"
                    className="block p-3 bg-white rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">
                      BISE Gujranwala
                    </div>
                    <div className="text-sm text-slate-600">
                      Northern Punjab
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Background decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  );
}

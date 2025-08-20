import Link from "next/link";
import {
  GraduationCap,
  ArrowLeft,
  Users,
  Calendar,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  BookOpen,
  Award,
  Building,
  Flag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FBISE - Federal Board of Intermediate and Secondary Education | Results & Information",
  description:
    "Complete information about FBISE including result checking, examination schedules, federal areas covered, and contact details. Check your Federal Board results instantly.",
  keywords: [
    "FBISE",
    "Federal Board results",
    "Federal Board of Intermediate and Secondary Education",
    "FBISE exam results",
    "Federal Board contact",
    "FBISE Islamabad",
  ],
  openGraph: {
    title: "FBISE - Federal Board Information & Result Checking",
    description:
      "Complete information about FBISE including result checking and examination details.",
    url: "https://learnyst.pk/boards/fbise",
    type: "website",
  },
  alternates: {
    canonical: "/boards/fbise",
  },
};

export default function FBISEPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Federal Board of Intermediate and Secondary Education",
            alternateName: "FBISE",
            description:
              "The federal board serving federal government institutions and Pakistani schools abroad.",
            url: "https://learnyst.pk/boards/fbise",
            foundingDate: "1975",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Islamabad",
              addressRegion: "Federal",
              addressCountry: "Pakistan",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              areaServed: "Pakistan",
            },
            sameAs: ["https://fbise.edu.pk"],
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
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                Federal
              </Badge>
              <Badge variant="outline">Established 1975</Badge>
              <Badge variant="outline">200,000+ Students</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Federal Board of Intermediate and Secondary Education
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl leading-relaxed">
              The Federal Board of Intermediate and Secondary Education (FBISE)
              was established in 1975 to serve federal government institutions
              and Pakistani schools abroad. It conducts examinations for over
              200,000 students annually and maintains the highest educational
              standards nationwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Result Check */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-red-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-red-600" />
                    Check FBISE Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Enter your roll number to instantly check your Federal Board
                    examination results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/">
                      <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8">
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
                    About FBISE
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    The Federal Board of Intermediate and Secondary Education
                    (FBISE) was established in 1975 under the Ministry of
                    Federal Education and Professional Training, Government of
                    Pakistan. It serves as the premier federal educational
                    authority conducting examinations for SSC and HSSC levels.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    FBISE has a unique mandate to serve federal government
                    institutions, cantonment areas, and Pakistani schools
                    abroad. The board is known for its rigorous academic
                    standards, innovative examination practices, and commitment
                    to educational excellence at the national level.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    With its headquarters in Islamabad, FBISE continues to set
                    benchmarks in educational assessment and plays a crucial
                    role in maintaining uniform educational standards across
                    federal institutions nationwide and internationally.
                  </p>
                </CardContent>
              </Card>

              {/* Areas Covered */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <Flag className="h-6 w-6 mr-3 text-red-600" />
                    Areas Covered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    FBISE serves the following areas and institutions:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "Islamabad",
                        description: "Federal capital territory",
                      },
                      {
                        name: "Federal Areas",
                        description: "FATA and federal administered areas",
                      },
                      {
                        name: "Cantonment Areas",
                        description: "Military cantonment schools nationwide",
                      },
                      {
                        name: "International Schools",
                        description: "Pakistani schools abroad",
                      },
                      {
                        name: "Federal Institutions",
                        description: "Federal government schools and colleges",
                      },
                      {
                        name: "Diplomatic Missions",
                        description: "Pakistani embassy schools worldwide",
                      },
                    ].map((area, index) => (
                      <div key={index} className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {area.name}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {area.description}
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
                    <Award className="h-6 w-6 mr-3 text-orange-600" />
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
                        <li>Special provisions for international students</li>
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
                        <li>International curriculum alignment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">
                        Special Features
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>Serves Pakistani schools worldwide</li>
                        <li>
                          Standardized curriculum across all affiliated
                          institutions
                        </li>
                        <li>
                          Digital examination and result management system
                        </li>
                        <li>
                          Special arrangements for overseas Pakistani students
                        </li>
                        <li>
                          Coordination with international educational bodies
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
                    <Calendar className="h-5 w-5 text-red-600" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Established
                      </div>
                      <div className="text-sm text-slate-600">1975</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Students
                      </div>
                      <div className="text-sm text-slate-600">200,000+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Institutions
                      </div>
                      <div className="text-sm text-slate-600">1,000+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Countries
                      </div>
                      <div className="text-sm text-slate-600">
                        50+ Countries
                      </div>
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
                    <Building className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800">
                        Address
                      </div>
                      <div className="text-sm text-slate-600">
                        H-8/4, Islamabad, Pakistan
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Phone</div>
                      <div className="text-sm text-slate-600">
                        +92-51-9260515
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Email</div>
                      <div className="text-sm text-slate-600">
                        info@fbise.edu.pk
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
                        href="https://fbise.edu.pk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        fbise.edu.pk
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
                    href="/boards/bise-rawalpindi"
                    className="block p-3 bg-white rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">
                      BISE Rawalpindi
                    </div>
                    <div className="text-sm text-slate-600">Twin Cities</div>
                  </Link>
                  <Link
                    href="/boards/bise-lahore"
                    className="block p-3 bg-white rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">
                      BISE Lahore
                    </div>
                    <div className="text-sm text-slate-600">
                      Punjab Province
                    </div>
                  </Link>
                  <Link
                    href="/boards/bise-karachi"
                    className="block p-3 bg-white rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">
                      BISE Karachi
                    </div>
                    <div className="text-sm text-slate-600">Sindh Province</div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Background decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  );
}

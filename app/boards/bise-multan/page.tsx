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
  title: "BISE Multan - Board of Intermediate and Secondary Education Multan | Results",
  description:
    "Complete information about BISE Multan including result checking, examination schedules, districts covered, and contact details. Check your Multan board results instantly.",
  keywords: [
    "BISE Multan",
    "Multan board results",
    "Board of Intermediate and Secondary Education Multan",
    "Multan board exam results",
    "BISE Multan contact",
    "Southern Punjab board",
  ],
  openGraph: {
    title: "BISE Multan - Board Information & Result Checking",
    description: "Complete information about BISE Multan including result checking and examination details.",
    url: "https://learnyst.pk/boards/bise-multan",
    type: "website",
  },
  alternates: {
    canonical: "/boards/bise-multan",
  },
}

export default function BISEMultanPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Board of Intermediate and Secondary Education, Multan",
            alternateName: "BISE Multan",
            description: "Serving the southern Punjab region with quality educational services.",
            url: "https://learnyst.pk/boards/bise-multan",
            foundingDate: "1968",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Multan",
              addressRegion: "Punjab",
              addressCountry: "Pakistan",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              areaServed: "Punjab",
            },
            sameAs: ["https://bisemultan.edu.pk"],
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
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                Punjab
              </Badge>
              <Badge variant="outline">Established 1968</Badge>
              <Badge variant="outline">250,000+ Students</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Board of Intermediate and Secondary Education, Multan
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl leading-relaxed">
              Established in 1968, BISE Multan serves the southern Punjab region with quality educational services.
              Known as the "City of Saints," Multan's educational board has been conducting examinations for over
              250,000 students annually while maintaining high academic standards.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Result Check */}
              <Card className="shadow-lg border-0 bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <BookOpen className="h-6 w-6 mr-3 text-orange-600" />
                    Check BISE Multan Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">
                    Enter your roll number to instantly check your BISE Multan examination results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Enter your roll number"
                      className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <Link href="/">
                      <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 px-8">
                        Check Result
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* About Section */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">About BISE Multan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    The Board of Intermediate and Secondary Education, Multan (BISE Multan) was established in 1968 to
                    serve the educational needs of southern Punjab. Located in the historic city of Multan, known as the
                    "City of Saints," the board has a rich heritage of academic excellence.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    BISE Multan conducts examinations for both SSC and HSSC levels, serving a diverse student population
                    from urban and rural areas. The board is committed to maintaining high educational standards while
                    ensuring fair and transparent examination processes.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    With its focus on quality education and student welfare, BISE Multan continues to contribute
                    significantly to the educational development of southern Punjab, producing skilled graduates who
                    contribute to Pakistan's progress.
                  </p>
                </CardContent>
              </Card>

              {/* Districts Covered */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-orange-600" />
                    Districts Covered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-6">BISE Multan serves the following districts in southern Punjab:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Multan", description: "Historic city and regional headquarters" },
                      { name: "Khanewal", description: "Agricultural and industrial center" },
                      { name: "Lodhran", description: "Cotton and wheat producing region" },
                      { name: "Vehari", description: "Major agricultural district" },
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
                    <Award className="h-6 w-6 mr-3 text-yellow-600" />
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
                        <li>Pre-Engineering, Pre-Medical, Commerce, and Arts groups</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Regional Features</h4>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                        <li>Strong focus on agricultural and technical education</li>
                        <li>Special provisions for rural area students</li>
                        <li>Coordination with local industries for practical training</li>
                        <li>Cultural and historical studies integration</li>
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
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Established</div>
                      <div className="text-sm text-slate-600">1968</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-yellow-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Students</div>
                      <div className="text-sm text-slate-600">250,000+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Schools</div>
                      <div className="text-sm text-slate-600">1,200+</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
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
                    <Building className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800">Address</div>
                      <div className="text-sm text-slate-600">Khanewal Road, Multan, Punjab, Pakistan</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-yellow-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Phone</div>
                      <div className="text-sm text-slate-600">+92-61-9200356</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Email</div>
                      <div className="text-sm text-slate-600">info@bisemultan.edu.pk</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-slate-800">Website</div>
                      <a
                        href="https://bisemultan.edu.pk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        bisemultan.edu.pk
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
                    href="/boards/bise-bahawalpur"
                    className="block p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">BISE Bahawalpur</div>
                    <div className="text-sm text-slate-600">Southern Punjab</div>
                  </Link>
                  <Link
                    href="/boards/bise-sahiwal"
                    className="block p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">BISE Sahiwal</div>
                    <div className="text-sm text-slate-600">Central Punjab</div>
                  </Link>
                  <Link
                    href="/boards/bise-lahore"
                    className="block p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-800">BISE Lahore</div>
                    <div className="text-sm text-slate-600">Provincial Capital</div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Background decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  )
}

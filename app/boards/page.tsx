import Link from "next/link";
import { MapPin, Users, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import Layout from "../components/Layout";

export const metadata: Metadata = {
  title: "Educational Boards in Pakistan - Complete Guide & Result Checking",
  description:
    "Comprehensive guide to all major educational boards in Pakistan. Check results for BISE Lahore, Karachi, Rawalpindi, Multan, Faisalabad, Federal Board, and more.",
  keywords: [
    "educational boards Pakistan",
    "BISE boards",
    "board results Pakistan",
    "educational boards list",
    "Pakistan examination boards",
    "board wise results",
  ],
  openGraph: {
    title: "Educational Boards in Pakistan - Complete Guide",
    description:
      "Complete guide to all major educational boards in Pakistan with result checking information.",
    url: "https://learnyst.pk/boards",
    type: "website",
  },
  alternates: {
    canonical: "/boards",
  },
};

const boards = [
  {
    id: "bise-lahore",
    name: "Board of Intermediate and Secondary Education, Lahore",
    shortName: "BISE Lahore",
    province: "Punjab",
    established: "1954",
    students: "500,000+",
    description:
      "One of the largest and most prestigious educational boards in Punjab, serving Lahore and surrounding districts.",
    districts: ["Lahore", "Kasur", "Sheikhupura", "Nankana Sahib"],
    website: "biselahore.com",
    featured: true,
  },
  {
    id: "bise-karachi",
    name: "Board of Intermediate Education, Karachi",
    shortName: "BISE Karachi",
    province: "Sindh",
    established: "1972",
    students: "400,000+",
    description:
      "The premier educational board of Sindh province, serving the metropolitan city of Karachi.",
    districts: [
      "Karachi Central",
      "Karachi East",
      "Karachi West",
      "Karachi South",
    ],
    website: "biek.edu.pk",
    featured: true,
  },
  {
    id: "bise-rawalpindi",
    name: "Board of Intermediate and Secondary Education, Rawalpindi",
    shortName: "BISE Rawalpindi",
    province: "Punjab",
    established: "1977",
    students: "300,000+",
    description:
      "Serving the twin cities of Rawalpindi and Islamabad along with surrounding areas.",
    districts: ["Rawalpindi", "Islamabad", "Attock", "Chakwal", "Jhelum"],
    website: "biserwp.edu.pk",
    featured: true,
  },
  {
    id: "fbise",
    name: "Federal Board of Intermediate and Secondary Education",
    shortName: "FBISE",
    province: "Federal",
    established: "1975",
    students: "200,000+",
    description:
      "The federal board serving federal government institutions and Pakistani schools abroad.",
    districts: ["Islamabad", "Federal Areas", "International Schools"],
    website: "fbise.edu.pk",
    featured: true,
  },
  {
    id: "bise-multan",
    name: "Board of Intermediate and Secondary Education, Multan",
    shortName: "BISE Multan",
    province: "Punjab",
    established: "1968",
    students: "250,000+",
    description:
      "Serving the southern Punjab region with quality educational services.",
    districts: ["Multan", "Khanewal", "Lodhran", "Vehari"],
    website: "bisemultan.edu.pk",
    featured: false,
  },
  {
    id: "bise-faisalabad",
    name: "Board of Intermediate and Secondary Education, Faisalabad",
    shortName: "BISE Faisalabad",
    province: "Punjab",
    established: "1971",
    students: "280,000+",
    description:
      "One of the major boards in Punjab, serving the industrial city of Faisalabad.",
    districts: ["Faisalabad", "Jhang", "Toba Tek Singh", "Chiniot"],
    website: "bisefsd.edu.pk",
    featured: false,
  },
  {
    id: "bise-gujranwala",
    name: "Board of Intermediate and Secondary Education, Gujranwala",
    shortName: "BISE Gujranwala",
    province: "Punjab",
    established: "1976",
    students: "220,000+",
    description:
      "Serving the northern Punjab districts with comprehensive educational services.",
    districts: [
      "Gujranwala",
      "Gujrat",
      "Mandi Bahauddin",
      "Sialkot",
      "Narowal",
    ],
    website: "bisegrw.com",
    featured: false,
  },
  {
    id: "bise-peshawar",
    name: "Board of Intermediate and Secondary Education, Peshawar",
    shortName: "BISE Peshawar",
    province: "Khyber Pakhtunkhwa",
    established: "1961",
    students: "180,000+",
    description: "The main educational board of Khyber Pakhtunkhwa province.",
    districts: ["Peshawar", "Charsadda", "Nowshera", "Mardan"],
    website: "bisep.edu.pk",
    featured: false,
  },
  {
    id: "bise-quetta",
    name: "Board of Intermediate and Secondary Education, Quetta",
    shortName: "BISE Quetta",
    province: "Balochistan",
    established: "1976",
    students: "120,000+",
    description: "The premier educational board of Balochistan province.",
    districts: ["Quetta", "Pishin", "Killa Abdullah", "Chaman"],
    website: "biseqta.edu.pk",
    featured: false,
  },
  {
    id: "bise-hyderabad",
    name: "Board of Intermediate and Secondary Education, Hyderabad",
    shortName: "BISE Hyderabad",
    province: "Sindh",
    established: "1972",
    students: "200,000+",
    description:
      "Serving the interior Sindh region with quality educational services.",
    districts: ["Hyderabad", "Jamshoro", "Matiari", "Tando Allahyar"],
    website: "bisehyd.edu.pk",
    featured: false,
  },
  {
    id: "bise-sukkur",
    name: "Board of Intermediate and Secondary Education, Sukkur",
    shortName: "BISE Sukkur",
    province: "Sindh",
    established: "1978",
    students: "150,000+",
    description:
      "Serving the northern Sindh region including Sukkur and surrounding areas.",
    districts: ["Sukkur", "Khairpur", "Ghotki", "Shikarpur"],
    website: "bisesukkur.edu.pk",
    featured: false,
  },
  {
    id: "bise-sargodha",
    name: "Board of Intermediate and Secondary Education, Sargodha",
    shortName: "BISE Sargodha",
    province: "Punjab",
    established: "1968",
    students: "200,000+",
    description:
      "Serving the Sargodha division with comprehensive educational services.",
    districts: ["Sargodha", "Khushab", "Mianwali", "Bhakkar"],
    website: "bisesargodha.edu.pk",
    featured: false,
  },
  {
    id: "bise-sahiwal",
    name: "Board of Intermediate and Secondary Education, Sahiwal",
    shortName: "BISE Sahiwal",
    province: "Punjab",
    established: "1997",
    students: "180,000+",
    description: "One of the newer boards serving the Sahiwal division.",
    districts: ["Sahiwal", "Pakpattan", "Okara"],
    website: "bisesahiwal.edu.pk",
    featured: false,
  },
  {
    id: "bise-bahawalpur",
    name: "Board of Intermediate and Secondary Education, Bahawalpur",
    shortName: "BISE Bahawalpur",
    province: "Punjab",
    established: "1979",
    students: "160,000+",
    description: "Serving the Bahawalpur division in southern Punjab.",
    districts: ["Bahawalpur", "Bahawalnagar", "Rahim Yar Khan"],
    website: "bisebwp.edu.pk",
    featured: false,
    supported: true,
  },
  {
    id: "bise-dera-ghazi-khan",
    name: "Board of Intermediate and Secondary Education, Dera Ghazi Khan",
    shortName: "BISE DG Khan",
    province: "Punjab",
    established: "1989",
    students: "140,000+",
    description: "Serving the Dera Ghazi Khan division in western Punjab.",
    districts: ["Dera Ghazi Khan", "Rajanpur", "Muzaffargarh", "Layyah"],
    website: "bisedgk.edu.pk",
    featured: false,
  },
  {
    id: "bise-bannu",
    name: "Board of Intermediate and Secondary Education, Bannu",
    shortName: "BISE Bannu",
    province: "Khyber Pakhtunkhwa",
    established: "1987",
    students: "100,000+",
    description: "Serving the southern districts of Khyber Pakhtunkhwa.",
    districts: [
      "Bannu",
      "Lakki Marwat",
      "North Waziristan",
      "South Waziristan",
    ],
    website: "bisebannu.edu.pk",
    featured: false,
  },
  {
    id: "bise-kohat",
    name: "Board of Intermediate and Secondary Education, Kohat",
    shortName: "BISE Kohat",
    province: "Khyber Pakhtunkhwa",
    established: "1990",
    students: "90,000+",
    description: "Serving the central districts of Khyber Pakhtunkhwa.",
    districts: ["Kohat", "Kuram", "Orakzai", "Hangu"],
    website: "bisekohat.edu.pk",
    featured: false,
  },
  {
    id: "bise-abbottabad",
    name: "Board of Intermediate and Secondary Education, Abbottabad",
    shortName: "BISE Abbottabad",
    province: "Khyber Pakhtunkhwa",
    established: "1988",
    students: "110,000+",
    description: "Serving the Hazara division in Khyber Pakhtunkhwa.",
    districts: ["Abbottabad", "Haripur", "Mansehra", "Battagram"],
    website: "biseabbottabad.edu.pk",
    featured: false,
  },
  {
    id: "bise-malakand",
    name: "Board of Intermediate and Secondary Education, Malakand",
    shortName: "BISE Malakand",
    province: "Khyber Pakhtunkhwa",
    established: "2012",
    students: "80,000+",
    description: "One of the newest boards serving the Malakand division.",
    districts: ["Dir Upper", "Dir Lower", "Chitral", "Swat"],
    website: "bisemalakand.edu.pk",
    featured: false,
  },
  {
    id: "ajk-board",
    name: "Board of Intermediate and Secondary Education, AJK",
    shortName: "AJK Board",
    province: "Azad Kashmir",
    established: "1975",
    students: "70,000+",
    description: "The educational board serving Azad Jammu and Kashmir.",
    districts: ["Muzaffarabad", "Mirpur", "Kotli", "Bhimber"],
    website: "biseajk.edu.pk",
    featured: false,
  },
];

export default function BoardsPage() {
  const featuredBoards = boards.filter((board) => board.featured);
  const supportedBoards = boards.filter((board) => board.supported);
  const otherBoards = boards.filter((board) => !board.featured);

  return (
    <>
      <Layout>
        {" "}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Educational Boards in Pakistan",
              description:
                "Complete guide to all major educational boards in Pakistan",
              url: "https://learnyst.pk/boards",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: boards.map((board, index) => ({
                  "@type": "EducationalOrganization",
                  position: index + 1,
                  name: board.name,
                  alternateName: board.shortName,
                  description: board.description,
                  url: `https://learnyst.pk/boards/${board.id}`,
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: board.province,
                    addressCountry: "Pakistan",
                  },
                })),
              },
            }),
          }}
        />
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
          {/* Main Content */}
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Educational Boards in Pakistan
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive guide to all major educational boards across
                Pakistan. Find information about board services, districts
                covered, and result checking procedures.
              </p>
            </div>

            {/* Supported Boards */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></div>
                Supported Educational Boards
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {supportedBoards.map((board) => (
                  <Card
                    key={board.id}
                    className="shadow-lg border-0 bg-green-100/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {board.province}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Est. {board.established}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {board.shortName}
                      </CardTitle>
                      <p className="text-sm text-slate-600">{board.name}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        {board.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <Users className="h-4 w-4" />
                          <span>{board.students} students</span>
                        </div>
                        <div className="flex items-start space-x-2 text-sm text-slate-600">
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{board.districts.join(", ")}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link href={`/boards/${board.id}`}>
                          <Button variant="outline" size="sm">
                            <BookOpen className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                        <a
                          href={`https://${board.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Official Website
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Featured Boards */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></div>
                Major Educational Boards
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredBoards.map((board) => (
                  <Card
                    key={board.id}
                    className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800"
                        >
                          {board.province}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Est. {board.established}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {board.shortName}
                      </CardTitle>
                      <p className="text-sm text-slate-600">{board.name}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        {board.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <Users className="h-4 w-4" />
                          <span>{board.students} students</span>
                        </div>
                        <div className="flex items-start space-x-2 text-sm text-slate-600">
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{board.districts.join(", ")}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link href={`/boards/${board.id}`}>
                          <Button variant="outline" size="sm">
                            <BookOpen className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                        <a
                          href={`https://${board.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          Official Website
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Other Boards */}
            <section>
              <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-3"></div>
                Other Educational Boards
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherBoards.map((board) => (
                  <Card
                    key={board.id}
                    className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="secondary"
                          className="bg-purple-100 text-purple-800"
                        >
                          {board.province}
                        </Badge>
                        <span className="text-xs text-slate-500">
                          Est. {board.established}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                        {board.shortName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {board.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-xs text-slate-500">
                          <Users className="h-3 w-3" />
                          <span>{board.students}</span>
                        </div>
                        <div className="flex items-start space-x-2 text-xs text-slate-500">
                          <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">
                            {board.districts.join(", ")}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link href={`/boards/${board.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-purple-600 hover:text-purple-700 p-0"
                          >
                            View Details →
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <Card className="mt-16 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      25+
                    </div>
                    <div className="text-slate-600">Educational Boards</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      2M+
                    </div>
                    <div className="text-slate-600">Students Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      4
                    </div>
                    <div className="text-slate-600">Provinces Covered</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      100+
                    </div>
                    <div className="text-slate-600">Districts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="mt-12 shadow-lg border-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Check Your Result Now
                </h3>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  Ready to check your board exam results? Enter your roll number
                  and get instant access to your academic performance.
                </p>
                <Link href="/">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Check Results Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
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

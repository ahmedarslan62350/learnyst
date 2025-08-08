import Link from "next/link";
import {
  GraduationCap,
  ArrowLeft,
  FileText,
  Mail,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Layout from "@/app/components/Layout";

export const metadata: Metadata = {
  title: "Terms & Conditions - Website Usage Terms",
  description:
    "Read ResultCheck's terms and conditions for using our student result checking platform. Understand your rights and responsibilities when accessing educational board results through our service.",
  keywords: [
    "terms and conditions",
    "website terms",
    "service agreement",
    "user agreement",
    "legal terms",
    "result checking terms",
  ],
  openGraph: {
    title: "Terms & Conditions - ResultCheck Service Agreement",
    description:
      "Read the terms and conditions for using ResultCheck's student result checking platform.",
    url: "https://learnyst.pk/policies/terms",
    type: "website",
  },
  twitter: {
    title: "Terms & Conditions - ResultCheck Service Agreement",
    description:
      "Read the terms and conditions for using ResultCheck's student result checking platform.",
  },
  alternates: {
    canonical: "/policies/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-12 w-12 text-purple-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                Terms & Conditions
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
                  Welcome to ResultCheck (Learnyst.pk). These Terms and
                  Conditions ("Terms") govern your use of our website and
                  student result checking services. By accessing or using our
                  website, you agree to be bound by these Terms.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  If you do not agree with any part of these terms, please do
                  not use our website.
                </p>
              </CardContent>
            </Card>

            {/* Acceptance of Terms */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-700 leading-relaxed mb-4">
                  By accessing and using ResultCheck (Learnyst.pk), you accept
                  and agree to be bound by the terms and provision of this
                  agreement.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>You must be at least 13 years old to use our services</li>
                  <li>If you are under 18, you must have parental consent</li>
                  <li>
                    You agree to use our services only for lawful purposes
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Description of Service */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  2. Description of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-700 leading-relaxed mb-4">
                  ResultCheck provides an online platform for checking
                  educational board results in Pakistan. Our services include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Online result checking for various educational boards</li>
                  <li>Result verification and display services</li>
                  <li>Information and support related to academic results</li>
                  <li>Educational content and resources</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  3. User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-700 leading-relaxed mb-4">
                  As a user of our website, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Provide accurate and truthful information</li>
                  <li>
                    Use the service only for legitimate result checking purposes
                  </li>
                  <li>
                    Not attempt to access unauthorized areas of the website
                  </li>
                  <li>Not use automated systems to access our services</li>
                  <li>
                    Not interfere with the proper functioning of the website
                  </li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Not engage in any fraudulent or illegal activities</li>
                </ul>
              </CardContent>
            </Card>

            {/* Prohibited Uses */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
                  4. Prohibited Uses
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-700 leading-relaxed mb-4">
                  You may not use our website for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>
                    Any unlawful purpose or to solicit others to perform
                    unlawful acts
                  </li>
                  <li>
                    Violating any international, federal, provincial, or local
                    regulations or laws
                  </li>
                  <li>
                    Harassing, abusing, insulting, harming, defaming,
                    slandering, disparaging, intimidating, or discriminating
                  </li>
                  <li>Submitting false or misleading information</li>
                  <li>
                    Uploading or transmitting viruses or any other type of
                    malicious code
                  </li>
                  <li>Collecting or tracking personal information of others</li>
                  <li>
                    Spamming, phishing, pharming, pretext, spider, crawl, or
                    scrape
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  5. Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    The website and its original content, features, and
                    functionality are and will remain the exclusive property of
                    ResultCheck (Learnyst.pk) and its licensors.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>
                      All content is protected by copyright, trademark, and
                      other laws
                    </li>
                    <li>
                      You may not reproduce, distribute, or create derivative
                      works
                    </li>
                    <li>
                      Our trademarks and trade dress may not be used without
                      permission
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  6. Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    <strong>IMPORTANT:</strong> The information on this website
                    is provided on an "as is" basis. To the fullest extent
                    permitted by law, this Company:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li>
                      Excludes all representations and warranties relating to
                      this website and its contents
                    </li>
                    <li>
                      Does not guarantee the accuracy of result information
                    </li>
                    <li>
                      Is not affiliated with any educational board or government
                      institution
                    </li>
                    <li>
                      Results are extracted from public sources and may contain
                      errors
                    </li>
                    <li>
                      Users should verify results with official board sources
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  7. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-700 leading-relaxed mb-4">
                  In no event shall ResultCheck (Learnyst.pk), nor its
                  directors, employees, partners, agents, suppliers, or
                  affiliates, be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including without
                  limitation:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>
                    Loss of profits, data, use, goodwill, or other intangible
                    losses
                  </li>
                  <li>
                    Damages resulting from your access to or use of our services
                  </li>
                  <li>
                    Damages resulting from any conduct or content of any third
                    party
                  </li>
                  <li>
                    Damages resulting from unauthorized access, use, or
                    alteration of your transmissions
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  8. Indemnification
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-700 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless ResultCheck
                  (Learnyst.pk) and its licensee and licensors, and their
                  employees, contractors, agents, officers and directors, from
                  and against any and all claims, damages, obligations, losses,
                  liabilities, costs or debt, and expenses (including but not
                  limited to attorney's fees).
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  9. Termination
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may terminate or suspend your access immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Upon termination, your right to use the service will cease
                  immediately.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  10. Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-700 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of
                  Pakistan. Any disputes relating to these terms will be subject
                  to the exclusive jurisdiction of the courts of Pakistan.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  11. Changes to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will try to provide at least 30 days notice prior to any new
                  terms taking effect. Your continued use of the website after
                  we post any modifications constitutes acceptance of the new
                  Terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                  <Mail className="h-6 w-6 mr-2" />
                  12. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-slate-700 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions,
                  please contact us:
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
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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
  );
}

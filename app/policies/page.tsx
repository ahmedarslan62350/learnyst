import Link from "next/link";
import {
  GraduationCap,
  Shield,
  FileText,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Layout from "../components/Layout";
import Script from "next/script";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Legal Policies - Privacy Policy & Terms of Service",
  description:
    "Access ResultCheck's legal policies including privacy policy and terms & conditions. Learn about our commitment to user privacy, data protection, and transparent service terms.",
  keywords: [
    "legal policies",
    "privacy policy",
    "terms and conditions",
    "user protection",
    "data privacy",
    "service terms",
  ],
  openGraph: {
    title: "Legal Policies - ResultCheck Privacy & Terms",
    description:
      "Access ResultCheck's legal policies including privacy policy and terms & conditions.",
    url: "https://learnyst.pk/policies",
    type: "website",
  },
  twitter: {
    title: "Legal Policies - ResultCheck Privacy & Terms",
    description:
      "Access ResultCheck's legal policies including privacy policy and terms & conditions.",
  },
  alternates: {
    canonical: "/policies",
  },
};

export default function PoliciesPage() {
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
        {" "}
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
          {/* Main Content */}
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Legal Policies
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Our commitment to transparency and user protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Privacy Policy */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <span>Privacy Policy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Learn how we collect, use, and protect your personal
                    information when you use our result checking service.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li>• Data collection and usage</li>
                    <li>• Cookie and tracking policies</li>
                    <li>• Third-party services</li>
                    <li>• Your privacy rights</li>
                  </ul>
                  <Link href="/policies/privacy">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Read Privacy Policy
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-purple-600" />
                    <span>Terms & Conditions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Understand the terms of service and conditions for using our
                    student result checking platform.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li>• Website usage terms</li>
                    <li>• User responsibilities</li>
                    <li>• Service disclaimers</li>
                    <li>• Limitation of liability</li>
                  </ul>
                  <Link href="/policies/terms">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Read Terms & Conditions
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <Card className="mt-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Questions About Our Policies?
                </h3>
                <p className="text-slate-600 mb-6">
                  If you have any questions about our privacy policy or terms of
                  service, please don't hesitate to contact us.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="bg-white/80">
                    Contact Us
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

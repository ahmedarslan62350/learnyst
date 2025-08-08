import Link from "next/link";
import { GraduationCap, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";
import Layout from "../components/Layout";

export const metadata: Metadata = {
  title: "Sitemap - Website Navigation Overview",
  description:
    "Navigate through all pages of ResultCheck website. Find links to result checking, about us, contact information, privacy policy, terms & conditions, and more.",
  keywords: [
    "sitemap",
    "website navigation",
    "site structure",
    "page directory",
    "website map",
  ],
  openGraph: {
    title: "Sitemap - ResultCheck Website Navigation",
    description:
      "Navigate through all pages of ResultCheck website including result checking, policies, and support pages.",
    url: "https://learnyst.pk/sitemap",
    type: "website",
  },
  twitter: {
    title: "Sitemap - ResultCheck Website Navigation",
    description:
      "Navigate through all pages of ResultCheck website including result checking, policies, and support pages.",
  },
  alternates: {
    canonical: "/sitemap",
  },
};

export default function SitemapPage() {
  const pages = [
    {
      name: "Home",
      href: "/",
      description: "Student result checking homepage",
    },
    {
      name: "About",
      href: "/about",
      description: "Learn about Learnyst.pk and our services",
    },
    {
      name: "Contact",
      href: "/contact",
      description: "Get in touch with our support team",
    },
    {
      name: "Policies",
      href: "/policies",
      description: "Legal policies and terms",
    },
    {
      name: "Privacy Policy",
      href: "/policies/privacy",
      description: "How we protect your privacy",
    },
    {
      name: "Terms & Conditions",
      href: "/policies/terms",
      description: "Terms of service and usage",
    },
    {
      name: "Results",
      href: "/results",
      description: "Student result display page",
    },
    {
      name: "Sitemap",
      href: "/sitemap",
      description: "Website navigation overview",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Sitemap
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Navigate through all pages of our website
            </p>
          </div>

          {/* Pages List */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800">
                All Pages
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="grid md:grid-cols-2 gap-4">
                {pages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.href}
                    className="block p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {page.name}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1">
                          {page.description}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </Link>
                ))}
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
    </Layout>
  );
}

"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Menu, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Boards", href: "/boards" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Policies", href: "/policies" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-slate-200/80 backdrop-blur-sm bg-white/90 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-md">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">Learnyst PK</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-slate-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-slate-200">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Learnyst PK</span>
              </div>
              <p className="text-slate-300 mb-4 max-w-md">
                Pakistan's most trusted student result portal, providing instant access to examination results from all major educational boards across the country.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer transition-colors">
                  <span className="text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer transition-colors">
                  <span className="text-xs font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer transition-colors">
                  <span className="text-xs font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/boards" className="text-slate-300 hover:text-white transition-colors">All Boards</Link></li>
                <li><Link href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/faq" className="text-slate-300 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/upload-gazette" className="text-slate-300 hover:text-white transition-colors">Upload Gazette</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/policies/privacy" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/policies/terms" className="text-slate-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/policies" className="text-slate-300 hover:text-white transition-colors">All Policies</Link></li>
                <li><Link href="/sitemap" className="text-slate-300 hover:text-white transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2024 ResultCheck - Learnyst.pk. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm mt-2 md:mt-0">
                Made with ❤️ for Pakistani Students
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-800 text-center py-4">
          <p className="text-slate-400 text-sm max-w-4xl mx-auto px-4">
            <strong>Disclaimer:</strong> This website is not affiliated with any educational board. All data is extracted from public gazettes and official announcements. For official verification, please contact your respective board directly.
          </p>
        </div>
      </footer>
    </div>
  )
}

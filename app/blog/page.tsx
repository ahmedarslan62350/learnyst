import Link from "next/link"
import { GraduationCap, ArrowLeft, BookOpen, Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Educational Blog - Study Tips, Exam Guides & Board Updates",
  description:
    "Read our educational blog for study tips, exam preparation guides, board updates, and academic advice for Pakistani students. Stay updated with the latest educational news.",
  keywords: [
    "educational blog",
    "study tips",
    "exam preparation",
    "board updates",
    "academic advice",
    "student guidance",
    "education Pakistan",
  ],
  openGraph: {
    title: "Educational Blog - Study Tips & Exam Guides | ResultCheck",
    description: "Read study tips, exam preparation guides, and educational updates for Pakistani students.",
    url: "https://learnyst.pk/blog",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
}

const blogPosts = [
  {
    id: "exam-preparation-tips-2024",
    title: "10 Essential Exam Preparation Tips for Board Exams 2024",
    excerpt:
      "Master your board exams with these proven study strategies and preparation techniques used by top-performing students across Pakistan.",
    category: "Study Tips",
    author: "Education Team",
    date: "2024-01-08",
    readTime: "8 min read",
    featured: true,
    tags: ["Exam Prep", "Study Tips", "Board Exams"],
  },
  {
    id: "understanding-grading-system",
    title: "Understanding Pakistan's Educational Grading System",
    excerpt:
      "A comprehensive guide to how grades are calculated in Pakistani educational boards and what they mean for your future.",
    category: "Academic Guide",
    author: "Academic Advisor",
    date: "2024-01-07",
    readTime: "6 min read",
    featured: true,
    tags: ["Grading", "Academic", "Boards"],
  },
  {
    id: "time-management-students",
    title: "Effective Time Management Strategies for Students",
    excerpt:
      "Learn how to balance studies, extracurricular activities, and personal time with these practical time management techniques.",
    category: "Study Tips",
    author: "Student Counselor",
    date: "2024-01-06",
    readTime: "7 min read",
    featured: false,
    tags: ["Time Management", "Productivity", "Study Skills"],
  },
  {
    id: "choosing-right-subjects",
    title: "How to Choose the Right Subjects for 11th Class",
    excerpt:
      "Make informed decisions about your academic future with this comprehensive guide to subject selection for intermediate level.",
    category: "Career Guidance",
    author: "Career Counselor",
    date: "2024-01-05",
    readTime: "10 min read",
    featured: false,
    tags: ["Subject Selection", "Career", "11th Class"],
  },
  {
    id: "board-exam-stress-management",
    title: "Managing Exam Stress: A Student's Guide to Mental Wellness",
    excerpt:
      "Discover effective techniques to manage exam anxiety and maintain mental health during the challenging board examination period.",
    category: "Mental Health",
    author: "Psychology Expert",
    date: "2024-01-04",
    readTime: "9 min read",
    featured: false,
    tags: ["Mental Health", "Stress Management", "Wellness"],
  },
  {
    id: "digital-learning-tools",
    title: "Top Digital Learning Tools for Pakistani Students",
    excerpt:
      "Explore the best online resources, apps, and digital tools that can enhance your learning experience and academic performance.",
    category: "Technology",
    author: "EdTech Specialist",
    date: "2024-01-03",
    readTime: "12 min read",
    featured: false,
    tags: ["EdTech", "Digital Learning", "Online Resources"],
  },
  {
    id: "parent-guide-supporting-students",
    title: "A Parent's Guide to Supporting Their Child's Academic Journey",
    excerpt:
      "Learn how parents can effectively support their children through board exams and academic challenges with practical advice.",
    category: "Parent Guide",
    author: "Family Counselor",
    date: "2024-01-02",
    readTime: "8 min read",
    featured: false,
    tags: ["Parenting", "Support", "Academic Success"],
  },
  {
    id: "career-options-after-matric",
    title: "Career Options After Matriculation: A Comprehensive Guide",
    excerpt:
      "Explore various career paths and educational opportunities available after completing your 10th class examinations.",
    category: "Career Guidance",
    author: "Career Advisor",
    date: "2024-01-01",
    readTime: "15 min read",
    featured: false,
    tags: ["Career Options", "Matriculation", "Future Planning"],
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <>
      {/* JSON-LD Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "ResultCheck Educational Blog",
            description: "Educational blog with study tips, exam guides, and academic advice for Pakistani students",
            url: "https://learnyst.pk/blog",
            publisher: {
              "@type": "Organization",
              name: "Learnyst.pk",
              url: "https://learnyst.pk",
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              url: `https://learnyst.pk/blog/${post.id}`,
              datePublished: post.date,
              author: {
                "@type": "Person",
                name: post.author,
              },
              publisher: {
                "@type": "Organization",
                name: "Learnyst.pk",
              },
            })),
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
              <Link href="/">
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Educational Blog</h1>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Study tips, exam guides, and educational insights to help you succeed in your academic journey
            </p>
          </div>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></div>
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-slate-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Regular Posts */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full mr-3"></div>
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-slate-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs text-slate-500">By {post.author}</div>
                      <div className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString()}</div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-600 hover:text-purple-700 p-0 w-full justify-center"
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <Card className="mt-16 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Stay Updated with Educational Content</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Get the latest study tips, exam guides, and educational insights delivered to your inbox. Join thousands
                of students who trust our content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Subscribe
                </Button>
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
    </>
  )
}

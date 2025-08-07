import Link from "next/link"
import { GraduationCap, ArrowLeft, HelpCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Result Checking Help & Support",
  description:
    "Get answers to common questions about checking educational board results in Pakistan. Find help with roll numbers, result verification, board information, and troubleshooting.",
  keywords: [
    "FAQ",
    "result checking help",
    "board results questions",
    "student support",
    "result verification",
    "educational board FAQ",
    "Pakistan results help",
  ],
  openGraph: {
    title: "FAQ - Result Checking Help & Support | ResultCheck",
    description: "Get answers to common questions about checking educational board results in Pakistan.",
    url: "https://learnyst.pk/faq",
    type: "website",
  },
  alternates: {
    canonical: "/faq",
  },
}

const faqData = [
  {
    category: "General Questions",
    questions: [
      {
        question: "How do I check my result on ResultCheck?",
        answer:
          "Simply enter your roll number on our homepage and click 'Check Now'. Your result will be displayed instantly if available in our database.",
      },
      {
        question: "Is ResultCheck free to use?",
        answer:
          "Yes, ResultCheck is completely free. There are no hidden charges or subscription fees for checking your results.",
      },
      {
        question: "Which educational boards are supported?",
        answer:
          "We support all major educational boards in Pakistan including BISE Lahore, BISE Karachi, BISE Rawalpindi, BISE Multan, BISE Faisalabad, and many others for classes 9th, 10th, 11th, and 12th.",
      },
      {
        question: "How accurate are the results shown?",
        answer:
          "Our results are extracted from official gazette sources. However, we recommend verifying important results with your respective board's official website.",
      },
      {
        question: "Can I check results for previous years?",
        answer:
          "Currently, we focus on the latest examination results. For previous years' results, please contact your respective educational board directly.",
      },
    ],
  },
  {
    category: "Technical Issues",
    questions: [
      {
        question: "My roll number is not working. What should I do?",
        answer:
          "Ensure you're entering the correct roll number format. Check for any spaces or special characters. If the issue persists, the result might not be available yet.",
      },
      {
        question: "The website is loading slowly. How can I fix this?",
        answer:
          "Try refreshing the page, clearing your browser cache, or using a different browser. Ensure you have a stable internet connection.",
      },
      {
        question: "I'm getting an error message. What does it mean?",
        answer:
          "Error messages usually indicate that the result is not found or there's a temporary server issue. Wait a few minutes and try again.",
      },
      {
        question: "Can I use ResultCheck on my mobile phone?",
        answer: "Yes, ResultCheck is fully mobile-responsive and works perfectly on smartphones and tablets.",
      },
      {
        question: "Why is my result showing as 'Not Found'?",
        answer:
          "This could mean the result hasn't been published yet, the roll number is incorrect, or there's a data synchronization delay.",
      },
    ],
  },
  {
    category: "Board-Specific Questions",
    questions: [
      {
        question: "When are BISE Lahore results typically announced?",
        answer:
          "BISE Lahore usually announces results within 2-3 months after examinations. Check our website regularly for updates.",
      },
      {
        question: "How do I find my BISE Karachi result?",
        answer:
          "Enter your BISE Karachi roll number in our search box. Make sure to include any prefixes or suffixes as printed on your roll number slip.",
      },
      {
        question: "Are Federal Board results available?",
        answer: "Yes, we support Federal Board (FBISE) results for both SSC and HSSC examinations.",
      },
      {
        question: "Can I check AJK Board results here?",
        answer: "Yes, we support AJK (Azad Jammu & Kashmir) Board results for all classes.",
      },
      {
        question: "What about private board results?",
        answer: "We primarily focus on government board results. Private board results may have limited availability.",
      },
    ],
  },
  {
    category: "Result Information",
    questions: [
      {
        question: "What information is shown in the result?",
        answer:
          "We display student name, roll number, total marks, obtained marks, percentage, and overall pass/fail status.",
      },
      {
        question: "Can I see subject-wise marks?",
        answer:
          "Currently, we show overall results. For detailed subject-wise marks, please check your board's official website.",
      },
      {
        question: "How do I download or print my result?",
        answer:
          "You can use your browser's print function to print the result page. For official certificates, contact your educational board.",
      },
      {
        question: "Is the result certificate valid for official purposes?",
        answer:
          "Our results are for informational purposes only. For official documentation, obtain certificates from your respective board.",
      },
      {
        question: "Can I share my result on social media?",
        answer: "Yes, you can share your result. However, be cautious about sharing personal information publicly.",
      },
    ],
  },
  {
    category: "Account & Privacy",
    questions: [
      {
        question: "Do I need to create an account to check results?",
        answer:
          "No, you don't need to create an account. Simply enter your roll number and check your result instantly.",
      },
      {
        question: "Is my personal information safe?",
        answer:
          "Yes, we take privacy seriously. We don't store personal information permanently. Read our Privacy Policy for details.",
      },
      {
        question: "Can others see my result if I check it?",
        answer:
          "No, results are only visible to the person checking them. We don't maintain a public database of results.",
      },
      {
        question: "Do you store my roll number?",
        answer: "We don't permanently store roll numbers. They're only used temporarily for the search process.",
      },
      {
        question: "How do you protect student data?",
        answer:
          "We use secure connections (HTTPS) and follow data protection best practices. See our Privacy Policy for complete details.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        question: "The result shows incorrect information. What should I do?",
        answer:
          "If you notice incorrect information, please contact your educational board directly as they are the official source of results.",
      },
      {
        question: "My result shows 'Failed' but I think I passed. Help!",
        answer:
          "Please verify with your board's official website or contact them directly. Our data is extracted from public sources and may have delays.",
      },
      {
        question: "Can I check someone else's result?",
        answer: "You can check any result if you have the correct roll number, but please respect others' privacy.",
      },
      {
        question: "The website is not working. What alternatives do I have?",
        answer: "You can check results directly on your board's official website or visit their office in person.",
      },
      {
        question: "How often is the result data updated?",
        answer: "We update our database regularly when new results are published by the boards.",
      },
    ],
  },
  {
    category: "Educational Boards",
    questions: [
      {
        question: "What is the difference between SSC and HSSC?",
        answer:
          "SSC (Secondary School Certificate) is for 9th and 10th class, while HSSC (Higher Secondary School Certificate) is for 11th and 12th class.",
      },
      {
        question: "Which board should I choose for better results?",
        answer:
          "All boards follow similar standards. Choose based on your location and school affiliation rather than perceived difficulty.",
      },
      {
        question: "Can I change my board after registration?",
        answer:
          "Board changes are typically not allowed after registration. Contact your current board for specific policies.",
      },
      {
        question: "Are all boards recognized equally?",
        answer: "Yes, all government boards in Pakistan are equally recognized for higher education and employment.",
      },
      {
        question: "What if my board is not listed?",
        answer:
          "We're continuously adding support for more boards. Contact us if your board is not currently supported.",
      },
    ],
  },
  {
    category: "Support & Contact",
    questions: [
      {
        question: "How can I contact ResultCheck support?",
        answer: "You can reach us via email at support@learnyst.pk or use our contact form on the Contact page.",
      },
      {
        question: "How quickly do you respond to queries?",
        answer: "We typically respond to all inquiries within 24 hours during business days.",
      },
      {
        question: "Can I suggest new features?",
        answer: "We welcome user feedback and suggestions. Please contact us with your ideas.",
      },
      {
        question: "Do you provide phone support?",
        answer: "Currently, we provide support primarily through email and our contact form for better documentation.",
      },
      {
        question: "Is there a mobile app available?",
        answer:
          "Currently, we offer a mobile-responsive website. A dedicated mobile app may be available in the future.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* JSON-LD Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            ),
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
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Frequently Asked Questions</h1>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about checking your educational board results
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <Collapsible key={faqIndex}>
                        <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-200 group">
                          <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {faq.question}
                          </h3>
                          <ChevronDown className="h-5 w-5 text-slate-500 group-hover:text-blue-600 transition-all duration-200 group-data-[state=open]:rotate-180" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3 text-slate-700 leading-relaxed bg-white rounded-b-lg border-l-4 border-blue-500">
                          {faq.answer}
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="mt-12 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Still Have Questions?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you with any questions about
                result checking.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Contact Support
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
    </>
  )
}

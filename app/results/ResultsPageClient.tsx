"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "../components/Layout";
import axios from "axios";

interface StudentResult {
  rollNumber: string;
  studentName: string;
  overallStatus: "Pass" | "Fail";
  totalMarks: number;
  obtainedMarks: number;
  percentage: number;
}
const url = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ResultsPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rollNumber = searchParams.get("roll");
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<StudentResult | null>(null);

  useEffect(() => {
    if (!rollNumber) {
      router.push("/");
      return;
    }

    if (!url) {
      console.error("NEXT_PUBLIC_BACKEND_URL is undefined!");
      return;
    }
    // Simulate API call to fetch results
    const fetchResults = async () => {
      setIsLoading(true);
      console.log("Helo");
      try {
        const { data } = await axios.get(
          `${url}/api/v1/result?rollNo=${rollNumber}`
        );

        const { name, marks, rollNo } = data.data as {
          name: string;
          marks: number;
          rollNo: number;
        };

        const result: StudentResult = {
          obtainedMarks: marks,
          rollNumber: rollNo.toString(),
          studentName: name,
          totalMarks: 1200,
          percentage: (marks / 1200) * 100,
          overallStatus: "Pass",
        };

        setResult(result);
      } catch (error) {
        const result: StudentResult = {
          obtainedMarks: 0,
          rollNumber: rollNumber,
          studentName: "Unknown",
          totalMarks: 1200,
          percentage: 0,
          overallStatus: "Fail",
        };

        setResult(result);
      }

      setIsLoading(false);
    };

    fetchResults();
  }, [rollNumber, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Fetching Your Results
          </h2>
          <p className="text-slate-600">
            Please wait while we retrieve your marks...
          </p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Result Not Found
          </h2>
          <p className="text-slate-600 mb-6">
            No results found for roll number "{rollNumber}". Please check your
            roll number and try again.
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Left Ad Space */}
            <div className="hidden lg:block">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm h-96">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="text-center text-slate-400">
                    <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-sm">Advertisement Space</span>
                    </div>
                    <p className="text-xs">300 x 250</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Result Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Student Name and Status */}
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                  {result.studentName}
                </h1>

                {/* Pass/Fail Status */}
                <Card
                  className={`shadow-lg border-0 mb-6 ${
                    result.overallStatus === "Pass"
                      ? "bg-gradient-to-r from-green-50 to-emerald-50"
                      : "bg-gradient-to-r from-red-50 to-pink-50"
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center space-x-4">
                      {result.overallStatus === "Pass" ? (
                        <>
                          <CheckCircle className="h-12 w-12 text-green-600" />
                          <div className="text-4xl font-bold text-green-600">
                            PASSED
                          </div>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-12 w-12 text-red-600" />
                          <div className="text-4xl font-bold text-red-600">
                            FAILED
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Roll Number */}
                <div className="mb-8">
                  <span className="text-lg text-slate-600">Roll Number: </span>
                  <span className="text-lg font-semibold text-slate-800">
                    {result.rollNumber}
                  </span>
                </div>
              </div>

              {/* Percentage */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <div className="text-7xl md:text-8xl font-bold text-slate-800 mb-4">
                    {result.percentage}%
                  </div>
                  <div className="text-xl text-slate-600">Percentage</div>
                </CardContent>
              </Card>

              {/* Total Marks */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <div className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
                    {result.obtainedMarks} / {result.totalMarks}
                  </div>
                  <div className="text-xl text-slate-600">Total Marks</div>
                </CardContent>
              </Card>

              {/* Mobile Ad Space */}
              <Card className="lg:hidden shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-center text-slate-400">
                    <div className="w-full h-32 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-sm">Advertisement Space</span>
                    </div>
                    <p className="text-xs">Mobile Banner - 320 x 100</p>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <div className="text-center">
                <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
                  This data is extracted from the public gazette and is not
                  affiliated with any board.
                </p>
              </div>
            </div>

            {/* Right Ad Space */}
            <div className="hidden lg:block">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm h-96">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <div className="text-center text-slate-400">
                    <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-sm">Advertisement Space</span>
                    </div>
                    <p className="text-xs">300 x 250</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Ad Space */}
          <div className="mt-12">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center text-slate-400">
                  <div className="w-full h-24 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-sm">Advertisement Space</span>
                  </div>
                  <p className="text-xs">Leaderboard - 728 x 90</p>
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

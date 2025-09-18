"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  ArrowLeft,
  Download,
  Share2,
  Award,
  User,
  School,
  Trophy,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import axios from "axios";

interface Subject {
  name: string;
  totalMarks: number;
  obtainedMarks: number;
  grade: string;
  status: "Pass" | "Fail";
}
interface Practical {
  name: string;
  maxMarks: number;
  obtainedMarks: number;
}

interface StudentResult {
  rollNumber: string;
  studentName: string;
  fatherName: string;
  board: string;
  examination: string;
  year: string;
  resultDate: string;
  overallStatus: "Pass" | "Fail";
  totalMarks: number;
  obtainedMarks: number;
  percentage: number;
  grade: string;
  division: string;
  subjects: Subject[];
}

const Class = Number(process.env.NEXT_PUBLIC_CLASS!) as 9 | 10 | 11 | 12;

function transformToStudentResult(data: any): {
  result: StudentResult;
  practicals: {
    name: string;
    maxMarks: number;
    obtainedMarks: number;
  }[];
} {
  // Separate subject + practical mapping
  const mappedSubjects = data.subjects
    .filter((s: any) => s.subject && s.grade !== data.studentName)
    .map((s: any) => {
      const obtainedTheory = parseInt(s.theory) || 0;

      // Guess total marks: most board subjects are /200, Islamiat & Pak Studies /100
      let totalMarks = Class === 9 || Class === 11 ? 100 : 200;
      if (
        s.subject.includes("ISL") ||
        s.subject.includes("PAK") ||
        s.subject === "PS"
      ) {
        totalMarks = Class === 9 || Class === 10 ? 100 : 50;
      }

      return {
        name: s.subject,
        totalMarks,
        obtainedMarks: obtainedTheory, // only theory here
        grade: s.grade || "-",
        status:
          !s.grade || s.grade === "" || s.percentile === "0" ? "Fail" : "Pass",
      };
    });

  // Map practicals separately
  const mappedPracticals: Practical[] = Object.values(
    data.subjects
      .filter(
        (s: any) =>
          s.subject &&
          s.practical &&
          s.practical !== "" &&
          s.grade !== data.studentName
      )
      .reduce((acc: any, s: any) => {
        // Normalize subject name (PHY I → PHY)
        const baseName = s.subject.replace(/\s*I+$/, "").trim();

        if (!acc[baseName]) {
          acc[baseName] = {
            name: `${baseName} (Practical)`,
            maxMarks: 50, // adjust if your backend has different practical max marks
            obtainedMarks: parseInt(s.practical) || 0,
          };
        }
        return acc;
      }, {})
  );

  // Sum totals
  const obtainedMarks =
    mappedSubjects.reduce(
      (sum: number, subj: any) => sum + subj.obtainedMarks,
      0
    ) +
    mappedPracticals.reduce(
      (sum: number, prac: any) => sum + prac.obtainedMarks,
      0
    );

  const totalMarks =
    mappedSubjects.reduce(
      (sum: number, subj: any) => sum + subj.totalMarks,
      0
    ) +
    mappedPracticals.reduce((sum: number, prac: any) => sum + prac.maxMarks, 0);

  const percentage = totalMarks
    ? ((obtainedMarks / totalMarks) * 100).toFixed(2)
    : "0.00";

  const result: StudentResult = {
    rollNumber: data.rollNo,
    studentName: data.studentName,
    fatherName: data.fatherName,
    board: "Board of Intermediate and Secondary Education, Bahawalpur",
    examination: "Intermediate (HSSC) Part-II",
    year: "2025",
    resultDate: "17th Sep 2025",
    overallStatus: data.status,
    totalMarks,
    obtainedMarks,
    percentage: parseFloat(percentage),
    grade:
      parseFloat(percentage) >= 80
        ? "A+"
        : parseFloat(percentage) >= 70
        ? "A"
        : parseFloat(percentage) >= 60
        ? "B"
        : "C",
    division:
      parseFloat(percentage) >= 60
        ? "First Division"
        : parseFloat(percentage) >= 45
        ? "Second Division"
        : "Third Division",
    subjects: mappedSubjects,
  };

  return { result, practicals: mappedPracticals };
}

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rollNumber = searchParams.get("roll");
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<StudentResult | null>(null);
  const [practicals, setPracticals] = useState<Practical[] | null>(null);

  useEffect(() => {
    if (!rollNumber) {
      router.push("/");
      return;
    }

    // Simulate API call to fetch results
    const fetchResults = async () => {
      setIsLoading(true);

      try {
        // Fire both requests in parallel
        const secondApi = axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/result?rollNo=${rollNumber}`
        );
        const firstApi = axios.post("/api/result", { rollNo: rollNumber });

        // Wait for 2nd API first (fast)
        const {
          data: {
            data: { marks, name, rollNo },
          },
        } = await secondApi;
        setIsLoading(false);

        let totalMarks = 550;

        switch (Class) {
          case 10:
            totalMarks = 1200;
            break;
          case 12:
            totalMarks = 1200;
            break;

          default:
            break;
        }

        const percentage = ((parseInt(marks) / totalMarks) * 100).toFixed(2);

        // Create a lightweight StudentResult placeholder
        const placeholder: StudentResult = {
          rollNumber: rollNo,
          studentName: name,
          fatherName: "-", // unknown yet
          board: "Board of Intermediate and Secondary Education, Bahawalpur",
          examination: "Intermediate (HSSC) Part-II",
          year: "2025",
          resultDate: "17th Sep 2025",
          overallStatus: marks != "0" ? "Pass" : "Fail", // assume for placeholder
          totalMarks,
          obtainedMarks: parseInt(marks) || 0, // will update after full API
          percentage: Number(percentage),
          grade: "-",
          division: "-",
          subjects: [],
        };

        // Set placeholder immediately
        setResult(placeholder);

        try {
          const { data } = await firstApi;
          const transformed = transformToStudentResult(data);
          setResult(transformed.result);
          setPracticals(transformed.practicals);
        } catch (error) {
          return;
        }
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [rollNumber, router]);

  const handleDownload = () => {
    // Implement download functionality
    console.log("Downloading result...");
  };

  const handleShare = () => {
    // Implement share functionality
    if (navigator.share) {
      navigator.share({
        title: "My Result",
        text: `Check out my result: ${result?.percentage}% - ${result?.grade}`,
        url: window.location.href,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Fetching Your Results
          </h2>
          <p className="text-slate-600">
            Please wait while we retrieve your academic records...
          </p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Result Not Found
          </h2>
          <p className="text-slate-600 mb-6">
            Sorry, we couldn't find any results for roll number "{rollNumber}".
            Please check your roll number and try again.
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Result Status Banner */}
        <div className="mb-8">
          <Card
            className={`shadow-lg w-full border-0 ${
              result.overallStatus === "Pass"
                ? "bg-gradient-to-r from-green-50 to-emerald-50"
                : "bg-gradient-to-r from-red-50 to-pink-50"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {result.overallStatus === "Pass" ? (
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  ) : (
                    <AlertCircle className="h-12 w-12 text-red-600" />
                  )}
                  <div>
                    <h1 className="text-3xl font-bold text-slate-800">
                      Congratulations! You have{" "}
                      {result.overallStatus === "Pass" ? "Passed" : "Failed"}
                    </h1>
                    <p className="text-slate-600 mt-1">
                      Your examination results are ready
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="md:text-4xl text-xl font-bold text-slate-800">
                    {result.percentage}%
                  </div>
                  <Badge variant="secondary" className="mt-1 bg-white/80">
                    Grade {result.grade}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          className={`${
            result.subjects.length > 0 && "lg:grid-cols-3"
          } grid  gap-8`}
        >
          {/* Student Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>Student Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Student Name</p>
                  <p className="font-semibold text-slate-800">
                    {result.studentName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Father's Name</p>
                  <p className="font-semibold text-slate-800">
                    {result.fatherName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Roll Number</p>
                  <p className="font-semibold text-slate-800">
                    {result.rollNumber}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <School className="h-5 w-5 text-purple-600" />
                  <span>Examination Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Board</p>
                  <p className="font-semibold text-slate-800 text-sm">
                    {result.board}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Examination</p>
                  <p className="font-semibold text-slate-800">
                    {result.examination}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Year</p>
                  <p className="font-semibold text-slate-800">{result.year}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Result Date</p>
                  <p className="font-semibold text-slate-800">
                    {result.resultDate}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  <span>Overall Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-800">
                      {result.obtainedMarks}
                    </p>
                    <p className="text-sm text-slate-500">Obtained</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-800">
                      {result.totalMarks}
                    </p>
                    <p className="text-sm text-slate-500">Total</p>
                  </div>
                </div>
                <div className="text-center pt-4 border-t border-slate-200">
                  <p className="text-lg font-semibold text-slate-800">
                    {result.division}
                  </p>
                  <p className="text-sm text-slate-500">Division</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Subject-wise Results */}
          {result.subjects.length > 0 && (
            <div className="lg:col-span-2">
              {/* Subject-wise Results */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span>Subject-wise Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-2 font-semibold text-slate-700">
                            Subject
                          </th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-700">
                            Total
                          </th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-700">
                            Obtained
                          </th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-700">
                            Grade
                          </th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-700">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.subjects.map((subject, index) => (
                          <tr
                            key={index}
                            className="border-b border-slate-100 hover:bg-slate-50/50"
                          >
                            <td className="py-4 px-2 font-medium text-slate-800">
                              {subject.name}
                            </td>
                            <td className="py-4 px-2 text-center text-slate-600">
                              {subject.totalMarks}
                            </td>
                            <td className="py-4 px-2 text-center font-semibold text-slate-800">
                              {subject.obtainedMarks}
                            </td>
                            <td className="py-4 px-2 text-center">
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-800"
                              >
                                {subject.grade}
                              </Badge>
                            </td>
                            <td className="py-4 px-2 text-center">
                              <Badge
                                variant={
                                  subject.status === "Pass"
                                    ? "default"
                                    : "destructive"
                                }
                                className={
                                  subject.status === "Pass"
                                    ? "bg-green-100 text-green-800"
                                    : ""
                                }
                              >
                                {subject.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Practical-wise Results */}
              {practicals && practicals.length > 0 && (
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-purple-600" />
                      <span>Practical-wise Results</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-3 px-2 font-semibold text-slate-700">
                              Practical
                            </th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-700">
                              Total
                            </th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-700">
                              Obtained
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {practicals.map((practical, index) => (
                            <tr
                              key={index}
                              className="border-b border-slate-100 hover:bg-slate-50/50"
                            >
                              <td className="py-4 px-2 font-medium text-slate-800">
                                {practical.name}
                              </td>
                              <td className="py-4 px-2 text-center text-slate-600">
                                {practical.maxMarks}
                              </td>
                              <td className="py-4 px-2 text-center font-semibold text-slate-800">
                                {practical.obtainedMarks}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Mobile Action Buttons */}
              <div className="flex sm:hidden space-x-3 mt-6">
                <Button
                  variant="outline"
                  onClick={handleShare}
                  className="flex-1 bg-transparent"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  onClick={handleDownload}
                  className="flex-1 bg-transparent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
            This result is extracted from official gazette and is for
            informational purposes only. For official verification, please
            contact your respective board office.
          </p>
        </div>
      </main>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

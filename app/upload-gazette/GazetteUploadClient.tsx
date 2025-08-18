"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Upload,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { saveFileLocally } from "@/lib/saveFileLocally";

interface Board {
  id: string;
  name: string;
  code: string;
  status: string;
}

interface GazetteUpload {
  _id: string;
  boardName: string;
  examType: string;
  fileName: string;
  uploadedBy: string;
  uploadedAt: string;
  status: "pending" | "approved" | "rejected";
}

export default function GazetteUploadClient() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [uploads, setUploads] = useState<GazetteUpload[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    boardId: "",
    boardName: "",
    examType: "",
    uploadedBy: "",
    file: null as File | null,
  });

  useEffect(() => {
    fetchBoards();
    fetchUploads();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await fetch("/api/admin/boards");
      const data = await response.json();
      if (data.success) {
        setBoards(data.boards);
      }
    } catch (error) {
      console.error("Failed to fetch boards:", error);
    }
  };

  const fetchUploads = async () => {
    try {
      const response = await fetch("/api/gazette/upload");
      const data = await response.json();
      if (data.success) {
        setUploads(data.uploads.slice(0, 10)); // Show last 10 uploads
      }
    } catch (error) {
      console.error("Failed to fetch uploads:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleBoardChange = (boardId: string) => {
    const selectedBoard = boards.find((board) => board.id === boardId);
    setFormData((prev) => ({
      ...prev,
      boardId,
      boardName: selectedBoard?.name || "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.file ||
      !formData.boardId ||
      !formData.examType ||
      !formData.uploadedBy
    ) {
      setError("Please fill all required fields");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Save file locally first
      const localFilePath = await saveFileLocally(formData.file);

      const metadata = {
        boardId: formData.boardId,
        boardName: formData.boardName,
        examType: formData.examType,
        uploadedBy: formData.uploadedBy,
        filePath: localFilePath, // send only the path
        filename: formData.file?.name || "",
      };

      const { data } = await axios.post("/api/gazette/metadata", metadata);

      if (data.success) {
        setSuccess("Gazette metadata saved successfully!");
        setFormData({
          boardId: "",
          boardName: "",
          examType: "",
          uploadedBy: "",
          file: null,
        });

        const fileInput = document.getElementById("file") as HTMLInputElement;
        if (fileInput) fileInput.value = "";

        fetchUploads(); // refresh list
        setTimeout(() => setSuccess(""), 5000);
      } else {
        setError(data.error || "Failed to save metadata");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to save gazette locally");
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-orange-500" />;
      case "rejected":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Approved</Badge>
        );
      case "pending":
        return (
          <Badge className="bg-orange-500 hover:bg-orange-600">Pending</Badge>
        );
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Upload className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Upload{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gazette Data
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Help us expand our database by uploading gazette files for
            educational boards. Your contribution helps thousands of students
            access their results faster.
          </p>
        </div>

        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50 max-w-4xl mx-auto">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription className="text-green-800">
              {success}
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive" className="mb-6 max-w-4xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <Card className="shadow-xl border-slate-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center text-xl">
                <FileText className="h-6 w-6 mr-3 text-blue-600" />
                Upload Gazette File
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Select Educational Board *
                  </label>
                  <Select
                    value={formData.boardId}
                    onValueChange={handleBoardChange}
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Choose the board for this gazette" />
                    </SelectTrigger>
                    <SelectContent>
                      {boards.map((board) => (
                        <SelectItem key={board.id} value={board.id}>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{board.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {board.code}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Exam Type *
                  </label>
                  <Input
                    name="examType"
                    value={formData.examType}
                    onChange={handleInputChange}
                    placeholder="e.g., Matric Annual 2024, Inter Part-I 2024"
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Your Name/Contact *
                  </label>
                  <Input
                    name="uploadedBy"
                    value={formData.uploadedBy}
                    onChange={handleInputChange}
                    placeholder="Your name or contact information"
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Gazette File *
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <Input
                      id="file"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="file"
                      className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Click to upload gazette file
                    </label>
                    <p className="text-sm text-slate-500 mt-2">
                      PDF, JPG, PNG, DOC files up to 10MB
                    </p>
                    {formData.file && (
                      <p className="text-sm text-green-600 mt-2 font-medium">
                        Selected: {formData.file.name}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Uploading...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Upload Gazette
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Instructions & Recent Uploads */}
          <div className="space-y-8">
            {/* Instructions */}
            <Card className="shadow-xl border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900">
                  Upload Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-800">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>
                      Upload gazette files before <strong>10:04 AM</strong> for
                      faster processing
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Ensure the file is clear and readable</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Include complete result data with roll numbers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>
                      Files will be reviewed by our team before activation
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Your contribution helps thousands of students</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Recent Uploads */}
            <Card className="shadow-xl border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Recent Uploads
                </CardTitle>
              </CardHeader>
              <CardContent>
                {uploads.length > 0 ? (
                  <div className="space-y-4">
                    {uploads.map((upload) => (
                      <div
                        key={upload._id}
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {getStatusIcon(upload.status)}
                            <h4 className="font-medium text-slate-800">
                              {upload.boardName}
                            </h4>
                          </div>
                          <p className="text-sm text-slate-600">
                            {upload.examType}
                          </p>
                          <p className="text-xs text-slate-500">
                            by {upload.uploadedBy} •{" "}
                            {new Date(upload.uploadedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="ml-4">
                          {getStatusBadge(upload.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-slate-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No uploads yet. Be the first to contribute!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="shadow-xl border-green-200 bg-green-50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Help Us Serve More Students
              </h3>
              <p className="text-green-800 mb-6">
                Your gazette uploads directly contribute to making result
                checking faster and more accessible for students across
                Pakistan. Every file you share helps us expand our database and
                serve more educational boards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-700">10K+</div>
                  <div className="text-sm text-green-600">Students Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-700">50+</div>
                  <div className="text-sm text-green-600">
                    Gazettes Processed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-700">24h</div>
                  <div className="text-sm text-green-600">
                    Average Processing
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  Trash2,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface GazetteUpload {
  _id: string;
  id: string;
  boardId: string;
  boardName: string;
  examType: string;
  fileName: string;
  fileUrl: string;
  uploadedBy: string;
  uploadedAt: string;
  pageNo: string;
  status: "pending" | "approved" | "rejected";
  adminNotes?: string;
  processedAt?: string;
}

export default function AdminGazetteClient() {
  const [uploads, setUploads] = useState<GazetteUpload[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [adminNotes, setAdminNotes] = useState<{ [key: string]: string }>({});
  const [pageNo, setPageNo] = useState(0);

  useEffect(() => {
    fetchUploads();
  }, []);

  const fetchUploads = async () => {
    try {
      const response = await fetch("/api/gazette/upload");
      const data = await response.json();
      if (data.success) {
        setUploads(data.uploads);
      }
    } catch (error) {
      setError("Failed to fetch uploads");
    } finally {
      setIsLoading(false);
    }
  };

  const updateUploadStatus = async (
    uploadId: string,
    status: "approved" | "rejected",
    notes?: string
  ) => {
    setProcessingId(uploadId);
    try {
      const response = await fetch("/api/gazette/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uploadId,
          status,
          adminNotes: notes,
          pageNo: pageNo,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(`Upload ${status} successfully!`);
        fetchUploads();
        setTimeout(() => setSuccess(""), 3000);
      } else {
        setError(data.error || "Failed to update upload");
      }
    } catch (error) {
      setError("Failed to update upload");
    } finally {
      setProcessingId(null);
    }
  };

  const deleteUpload = async (uploadId: string) => {
    if (!confirm("Are you sure you want to delete this upload?")) return;

    try {
      const response = await fetch(`/api/gazette/upload/${uploadId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (data.success) {
        setSuccess("Upload deleted successfully!");
        fetchUploads();
        setTimeout(() => setSuccess(""), 3000);
      }
    } catch (error) {
      setError("Failed to delete upload");
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

  const pendingUploads = uploads.filter(
    (upload) => upload.status === "pending"
  );
  const processedUploads = uploads.filter(
    (upload) => upload.status !== "pending"
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading gazette uploads...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-lg">
              <Upload className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Gazette Management
              </h1>
              <p className="text-slate-600">
                Review and approve gazette uploads from users
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge className="bg-orange-100 text-orange-700">
              {pendingUploads.length} Pending Review
            </Badge>
            <Badge className="bg-green-100 text-green-700">
              {uploads.filter((u) => u.status === "approved").length} Approved
            </Badge>
            <Badge className="bg-red-100 text-red-700">
              {uploads.filter((u) => u.status === "rejected").length} Rejected
            </Badge>
          </div>
        </div>

        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription className="text-green-800">
              {success}
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Pending Uploads */}
        {pendingUploads.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-2 text-orange-500" />
              Pending Review ({pendingUploads.length})
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pendingUploads.map((upload) => (
                <Card
                  key={upload._id}
                  className="shadow-lg border-orange-200 bg-orange-50"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(upload.status)}
                        <CardTitle className="text-lg">
                          {upload.boardName}
                        </CardTitle>
                      </div>
                      {getStatusBadge(upload.status)}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-slate-700">Exam Type:</p>
                        <p className="text-slate-600">{upload.examType}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">
                          Uploaded By:
                        </p>
                        <p className="text-slate-600">{upload.uploadedBy}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">File Name:</p>
                        <p className="text-slate-600 truncate">
                          {upload.fileName}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-700">
                          Upload Date:
                        </p>
                        <p className="text-slate-600">
                          {new Date(upload.uploadedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Admin Notes (Optional)
                      </label>
                      <Textarea
                        value={adminNotes[upload._id] || ""}
                        onChange={(e) =>
                          setAdminNotes((prev) => ({
                            ...prev,
                            [upload._id]: e.target.value,
                          }))
                        }
                        placeholder="Add notes about this upload..."
                        rows={2}
                        className="text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Page No (Optional)
                      </label>
                      <Input
                        value={pageNo}
                        onChange={(e) => setPageNo(Number(e.target.value))}
                        placeholder="PageNo.."
                        className="text-sm"
                      />
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-orange-200">
                      <Button
                        onClick={() =>
                          updateUploadStatus(
                            upload._id,
                            "approved",
                            adminNotes[upload._id]
                          )
                        }
                        disabled={processingId === upload._id}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>

                      <Button
                        onClick={() =>
                          updateUploadStatus(
                            upload._id,
                            "rejected",
                            adminNotes[upload._id]
                          )
                        }
                        disabled={processingId === upload._id}
                        variant="destructive"
                        className="flex-1"
                      >
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        className="border-slate-300"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>

                      <Button
                        onClick={() => deleteUpload(upload._id)}
                        variant="outline"
                        size="icon"
                        className="border-red-200 text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Processed Uploads */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
            Processed Uploads ({processedUploads.length})
          </h2>

          {processedUploads.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {processedUploads.map((upload) => (
                <Card key={upload._id} className="shadow-lg border-slate-200">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(upload.status)}
                        <CardTitle className="text-lg">
                          {upload.boardName}
                        </CardTitle>
                      </div>
                      {getStatusBadge(upload.status)}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="text-sm">
                      <p className="font-medium text-slate-700">Exam Type:</p>
                      <p className="text-slate-600">{upload.examType}</p>
                    </div>

                    <div className="text-sm">
                      <p className="font-medium text-slate-700">Uploaded By:</p>
                      <p className="text-slate-600">{upload.uploadedBy}</p>
                    </div>

                    {upload.adminNotes && (
                      <div className="text-sm">
                        <p className="font-medium text-slate-700">
                          Admin Notes:
                        </p>
                        <p className="text-slate-600 bg-slate-50 p-2 rounded text-xs">
                          {upload.adminNotes}
                        </p>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-3 border-t border-slate-200 text-xs text-slate-500">
                      <span>
                        Processed:{" "}
                        {upload.processedAt
                          ? new Date(upload.processedAt).toLocaleDateString()
                          : "N/A"}
                      </span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button
                          onClick={() => deleteUpload(upload._id)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="shadow-lg border-slate-200">
              <CardContent className="p-12 text-center">
                <Upload className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-600 mb-2">
                  No Processed Uploads
                </h3>
                <p className="text-slate-500">
                  Processed uploads will appear here after review.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

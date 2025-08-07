"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  ArrowLeft,
  Eye,
  Globe,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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

interface BoardData {
  id: string;
  name: string;
  code: string;
  status: "active" | "coming_soon" | "inactive";
  students: string;
  description: string;
  supportedExams: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  isDataAvailable: boolean;
  expectedDataDate: string | null;
  message: string;
}

export default function AdminBoardsClient() {
  const [boards, setBoards] = useState<BoardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingBoard, setEditingBoard] = useState<string | null>(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await fetch("/api/admin/boards");
      const data = await response.json();
      if (data.success) {
        setBoards(data.boards);
      }
    } catch (error) {
      setError("Failed to fetch boards");
    } finally {
      setIsLoading(false);
    }
  };

  const updateBoard = async (boardId: string, updates: Partial<BoardData>) => {
    try {
      const response = await fetch("/api/admin/boards", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ boardId, updates }),
      });

      const data = await response.json();
      if (data.success) {
        setBoards(
          boards.map((board) =>
            board.id === boardId ? { ...board, ...updates } : board
          )
        );
        setSuccess("Board updated successfully!");
        setEditingBoard(null);
        setTimeout(() => setSuccess(""), 3000);
      } else {
        setError(data.error || "Failed to update board");
      }
    } catch (error) {
      setError("Failed to update board");
    }
  };

  const handleStatusChange = (
    boardId: string,
    newStatus: "active" | "coming_soon" | "inactive"
  ) => {
    updateBoard(boardId, { status: newStatus });
  };

  const handleMessageChange = (boardId: string, newMessage: string) => {
    updateBoard(boardId, { message: newMessage });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "coming_soon":
        return <Clock className="h-4 w-4 text-orange-500" />;
      case "inactive":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
        );
      case "coming_soon":
        return (
          <Badge className="bg-orange-500 hover:bg-orange-600">
            Coming Soon
          </Badge>
        );
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading boards...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div className="h-6 w-px bg-slate-300"></div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <h1 className="text-xl font-bold text-slate-800">
                  Board Management
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">
                {boards.filter((b) => b.status === "active").length} Active
              </Badge>
              <Badge className="bg-orange-100 text-orange-700">
                {boards.filter((b) => b.status === "coming_soon").length} Coming
                Soon
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {success && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <AlertDescription className="text-green-800">
              {success}
            </AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Instructions */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Globe className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Board Management Instructions
                </h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>
                    • <strong>Active:</strong> Board is fully supported with
                    real-time results
                  </li>
                  <li>
                    • <strong>Coming Soon:</strong> Board will be supported soon
                    - users can see it but results aren't available yet
                  </li>
                  <li>
                    • <strong>Inactive:</strong> Board is hidden from users
                  </li>
                  <li>
                    • Upload gazette data before 10:04 AM to help add new board
                    support
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Boards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {boards.map((board) => (
            <Card key={board.id} className="shadow-lg border-slate-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {board.code}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{board.name}</CardTitle>
                      <p className="text-sm text-slate-600">
                        {board.students} students
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(board.status)}
                    {getStatusBadge(board.status)}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">{board.description}</p>

                {/* Status Management */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Board Status
                    </label>
                    <Select
                      value={board.status}
                      onValueChange={(
                        value: "active" | "coming_soon" | "inactive"
                      ) => handleStatusChange(board.id, value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Active</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="coming_soon">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-orange-500" />
                            <span>Coming Soon</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="inactive">
                          <div className="flex items-center space-x-2">
                            <AlertCircle className="h-4 w-4 text-red-500" />
                            <span>Inactive</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message for Coming Soon boards */}
                  {board.status === "coming_soon" && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message for Users
                      </label>
                      <Textarea
                        value={board.message}
                        onChange={(e) =>
                          handleMessageChange(board.id, e.target.value)
                        }
                        placeholder="Message to show users about this board..."
                        rows={3}
                        className="text-sm"
                      />
                    </div>
                  )}
                </div>

                {/* Board Info */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      Supported Exams
                    </p>
                    <p className="text-sm text-slate-700">
                      {board.supportedExams.join(", ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      Data Available
                    </p>
                    <p className="text-sm text-slate-700">
                      {board.isDataAvailable ? (
                        <span className="text-green-600 font-medium">
                          ✓ Yes
                        </span>
                      ) : (
                        <span className="text-orange-600 font-medium">
                          ⏳ Pending
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 font-medium mb-2">
                    Contact Information
                  </p>
                  <div className="space-y-1 text-sm text-slate-600">
                    <p>📞 {board.contactInfo.phone}</p>
                    <p>✉️ {board.contactInfo.email}</p>
                    <p>🌐 {board.contactInfo.website}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <Link href={`/boards/${board.id}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Page
                    </Button>
                  </Link>

                  <div className="text-xs text-slate-500">
                    Last updated: {new Date().toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {boards.filter((b) => b.status === "active").length}
              </div>
              <p className="text-green-700 font-medium">Active Boards</p>
              <p className="text-sm text-green-600 mt-1">
                Fully supported with results
              </p>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {boards.filter((b) => b.status === "coming_soon").length}
              </div>
              <p className="text-orange-700 font-medium">Coming Soon</p>
              <p className="text-sm text-orange-600 mt-1">
                In development phase
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-50 border-slate-200">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-slate-600 mb-2">
                {boards.filter((b) => b.status === "inactive").length}
              </div>
              <p className="text-slate-700 font-medium">Inactive Boards</p>
              <p className="text-sm text-slate-600 mt-1">Hidden from users</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

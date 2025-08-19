import { ObjectId } from 'mongodb'

export interface Board {
  _id?: ObjectId
  id: string
  name: string
  code: string
  status: 'active' | 'coming_soon' | 'inactive'
  students: string
  description: string
  supportedExams: string[]
  contactInfo: {
    phone: string
    email: string
    website: string
  }
  isDataAvailable: boolean
  expectedDataDate: string | null
  message: string
  createdAt: Date
  updatedAt: Date
}

export interface Timer {
  _id?: ObjectId
  id: string
  boardName: string
  examType: string
  announcementTime: Date
  isActive: boolean
  message: string
  createdAt: Date
  updatedAt: Date
}

export interface GazetteUpload {
  _id?: ObjectId
  id: string
  boardId: string
  boardName: string
  examType: string
  fileName: string
  uploadedBy: string
  uploadedAt: Date
  status: 'pending' | 'approved' | 'rejected'
  adminNotes?: string
  processedAt?: Date
}

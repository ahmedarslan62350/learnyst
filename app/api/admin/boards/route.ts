import { NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { Board } from "@/lib/models/Board"
import { ObjectId } from "mongodb"

export async function GET() {
  try {
    const db = await getDatabase()
    const boards = await db.collection<Board>('boards').find({}).toArray()
    
    return NextResponse.json({
      success: true,
      boards: boards
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch boards" },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { boardId, updates } = await request.json()
    const db = await getDatabase()

    const result = await db.collection<Board>('boards').updateOne(
      { id: boardId },
      { 
        $set: { 
          ...updates, 
          updatedAt: new Date() 
        } 
      }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: "Board not found" },
        { status: 404 }
      )
    }

    const updatedBoard = await db.collection<Board>('boards').findOne({ id: boardId })

    return NextResponse.json({
      success: true,
      board: updatedBoard
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { success: false, error: "Failed to update board" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const boardData = await request.json()
    const db = await getDatabase()

    const newBoard: Board = {
      ...boardData,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const result = await db.collection<Board>('boards').insertOne(newBoard)

    return NextResponse.json({
      success: true,
      board: { ...newBoard, _id: result.insertedId }
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { success: false, error: "Failed to create board" },
      { status: 500 }
    )
  }
}

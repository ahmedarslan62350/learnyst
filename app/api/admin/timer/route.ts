import { NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { Timer } from "@/lib/models/Board"

export async function GET() {
  try {
    const db = await getDatabase()
    const timer = await db.collection<Timer>('timers').findOne({ isActive: true })
    
    return NextResponse.json({
      success: true,
      timer: timer || null
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch timer" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const db = await getDatabase()
    
    // Deactivate all existing timers first
    await db.collection<Timer>('timers').updateMany(
      {},
      { $set: { isActive: false, updatedAt: new Date() } }
    )

    const timerData: Timer = {
      id: `timer-${Date.now()}`,
      boardName: body.boardName,
      examType: body.examType,
      announcementTime: new Date(body.announcementTime),
      isActive: body.isActive,
      message: body.message,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const result = await db.collection<Timer>('timers').insertOne(timerData)

    return NextResponse.json({
      success: true,
      timer: { ...timerData, _id: result.insertedId }
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { success: false, error: "Failed to update timer" },
      { status: 500 }
    )
  }
}

export async function DELETE() {
  try {
    const db = await getDatabase()
    
    await db.collection<Timer>('timers').updateMany(
      {},
      { $set: { isActive: false, updatedAt: new Date() } }
    )

    return NextResponse.json({
      success: true,
      message: "Timer deactivated"
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { success: false, error: "Failed to deactivate timer" },
      { status: 500 }
    )
  }
}

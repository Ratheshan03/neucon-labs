import { NextRequest, NextResponse } from 'next/server'
import { sendContactConfirmation, sendAdminNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      )
    }

    // Send confirmation email to user
    try {
      await sendContactConfirmation({
        name,
        email,
        message
      })
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError)
      // Don't fail the request if confirmation email fails
    }

    // Send notification email to admin
    try {
      await sendAdminNotification({
        name,
        email,
        company,
        message
      })
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError)
      return NextResponse.json(
        { error: 'Failed to process your request. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
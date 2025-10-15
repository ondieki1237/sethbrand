import { NextRequest, NextResponse } from 'next/server';
import { processContactForm } from '@/services/email.service';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      company, 
      phone, 
      budget, 
      serviceType, 
      timeline, 
      message, 
      referralSource,
      contactPreference,
      newsletter
    } = body;

    // Validation for required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required fields' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }
    
    // Ensure there's a message
    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Please include a message' },
        { status: 400 }
      );
    }

    // Prepare email content with all submitted information
    const emailSubject = `New ${serviceType} Project Request from ${name}`;
    
    const emailText = `
      New Project Request
      ===================
      
      Contact Information:
      - Name: ${name}
      - Email: ${email}
      - Company: ${company || 'N/A'}
      - Phone: ${phone || 'N/A'}
      - Preferred Contact Method: ${contactPreference}
      
      Project Details:
      - Service Type: ${serviceType}
      - Budget: ${budget}
      - Timeline: ${timeline}
      - Message: ${message}
      
      Additional Information:
      - Referral Source: ${referralSource || 'Not specified'}
      - Newsletter Signup: ${newsletter ? 'Yes' : 'No'}
      
      Submitted on: ${new Date().toLocaleString()}
    `;
    
    const emailHtml = `
      <h2>New Project Request</h2>
      
      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Company:</strong> ${company || 'N/A'}</li>
        <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
        <li><strong>Preferred Contact:</strong> ${contactPreference}</li>
      </ul>
      
      <h3>Project Details:</h3>
      <ul>
        <li><strong>Service Type:</strong> ${serviceType}</li>
        <li><strong>Budget:</strong> ${budget}</li>
        <li><strong>Timeline:</strong> ${timeline}</li>
      </ul>
      
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <h3>Additional Information:</h3>
      <ul>
        <li><strong>Referral Source:</strong> ${referralSource || 'Not specified'}</li>
        <li><strong>Newsletter Signup:</strong> ${newsletter ? 'Yes' : 'No'}</li>
      </ul>
      
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `;

    // Process the contact form submission using our email service
    const result = await processContactForm({
      name,
      email,
      phone,
      company,
      budget,
      service: serviceType,
      message: `
Service Type: ${serviceType}
Budget: ${budget}
Timeline: ${timeline}
Message: ${message}
Referral Source: ${referralSource || 'Not specified'}
Preferred Contact Method: ${contactPreference}
Newsletter Signup: ${newsletter ? 'Yes' : 'No'}
      `
    });
    
    // Store the lead in a database (to be implemented if needed)
    // This could be a MongoDB, PostgreSQL, or other database connection
    /*
    await db.collection('leads').add({
      name,
      email,
      company,
      phone,
      serviceType,
      budget,
      timeline,
      message,
      referralSource,
      contactPreference,
      newsletter: !!newsletter,
      createdAt: new Date()
    });
    */
    
    // Return appropriate response based on email sending result
    if (result.success) {
      return NextResponse.json({ 
        success: true,
        message: "Your request has been received. We'll be in touch soon!"
      });
    } else {
      console.error('Email sending failed:', result.error);
      return NextResponse.json({ 
        success: false,
        message: "There was an issue processing your request. Please try again later."
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
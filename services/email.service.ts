import nodemailer from 'nodemailer';

export interface EmailData {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
  attachments?: any[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget?: string;
  service?: string;
  message: string;
}

// Configure nodemailer with environment variables for secure access
const createTransporter = () => {
  // For production, use actual SMTP credentials from environment variables
  // For development, we can use a test account
  if (process.env.NODE_ENV === 'production') {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  } else {
    // For development environment, use Ethereal for testing
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: process.env.TEST_EMAIL_USER || 'ethereal-test@example.com',
        pass: process.env.TEST_EMAIL_PASS || 'test-password',
      },
    });
  }
};

// Send email function
export const sendEmail = async (emailData: EmailData): Promise<{ success: boolean; info?: any; error?: Error }> => {
  try {
    const transporter = createTransporter();
    const info = await transporter.sendMail({
      from: emailData.from || `"Seth Makori" <${process.env.EMAIL_FROM || 'info@sethbrand.com'}>`,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
      replyTo: emailData.replyTo,
      attachments: emailData.attachments,
    });

    console.log('Email sent: %s', info.messageId);
    return { success: true, info };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error as Error };
  }
};

// Process contact form submission
export const processContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string; error?: Error }> => {
  try {
    // Email to site owner
    const adminEmailData: EmailData = {
      to: process.env.ADMIN_EMAIL || 'bellarinseth@gmail.com',
      from: process.env.EMAIL_FROM || 'no-reply@sethbrand.com',
      subject: `New Contact Form Submission from ${data.name}`,
      replyTo: data.email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
        ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
        ${data.service ? `<p><strong>Service Interested In:</strong> ${data.service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">This message was sent from your website contact form.</p>
      `,
    };

    // Send email to admin
    const adminResult = await sendEmail(adminEmailData);

    // Email auto-reply to the user
    const userEmailData: EmailData = {
      to: data.email,
      from: process.env.EMAIL_FROM || 'no-reply@sethbrand.com',
      subject: 'Thank you for contacting Seth Makori',
      html: `
        <h2>Thank you for getting in touch!</h2>
        <p>Hello ${data.name},</p>
        <p>I appreciate you contacting me. I've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        <p>If you have any additional information to provide, please feel free to reply to this email.</p>
        <p>Best regards,<br>Seth Makori</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This is an automated response to your inquiry.</p>
      `,
    };

    // Send auto-reply to user
    const userResult = await sendEmail(userEmailData);

    if (adminResult.success && userResult.success) {
      return { success: true, message: 'Your message has been sent successfully!' };
    } else {
      throw new Error('Failed to send one or more emails');
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return { 
      success: false, 
      message: 'There was an error sending your message. Please try again later.',
      error: error as Error
    };
  }
};
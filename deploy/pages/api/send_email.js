import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Consultation Request from ${name}`,
      text: `
New consultation request received:

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message || 'No message provided'}
      `,
      html: `
<h2>New consultation request received:</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Thank you for your request! We will contact you shortly.'
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email. Please try again later.' 
    });
  }
} 
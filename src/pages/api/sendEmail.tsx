import nodemailer from 'nodemailer';

export default async (req: any, res: any) => {
  if (req.method === 'POST') {
    const { name, id, email, message } = req.body;

    // Create a transporter object
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email address
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nID: ${id}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

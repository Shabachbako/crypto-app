import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS Configuration (Allow both localhost & Netlify frontend)
const corsOptions = {
  origin: ["http://localhost:5173", "https://cryptcorn.netlify.app"], // Allow local & deployed frontend
  methods: "POST",
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON requests

// ✅ Check if environment variables are loaded correctly
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
  console.error("❌ ERROR: Missing required environment variables.");
  process.exit(1); // Stop the server if env variables are missing
}

// ✅ Contact form API route
app.post("/send", async (req, res) => {
  const { name, email, subject, phone, message } = req.body;

  console.log("📨 Received form submission:", req.body); // Log incoming data

  try {
    // ✅ Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Ensure you use an App Password for Gmail
      },
    });

    // ✅ Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // The admin's email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    console.log("📤 Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
  }
});

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

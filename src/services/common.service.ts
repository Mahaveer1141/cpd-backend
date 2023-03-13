import nodemailer from "nodemailer";
import config from "../config/configuration";
import { v2 as cloudinary } from "cloudinary";

export async function sendMail(to: string, subject: string, text: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mahaveer1141@gmail.com",
      pass: config.email.GMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: "mahaveer1141@gmail.com",
    to,
    subject,
    text,
  });

  console.log("Message sent: %s", info.messageId);
}

cloudinary.config({
  cloud_name: config.cloudinary.CLOUD_NAME,
  api_key: config.cloudinary.API_KEY,
  api_secret: config.cloudinary.API_SECRET,
});

export async function uploadToCloudinary(filename: string, userId: string) {
  const data = await cloudinary.uploader.upload(
    `/Users/mahaveersoni/programming/dev/college-project/cpd-backend/uploads/${filename}`,
    {
      folder: "CPD/Profile Photos",
      public_id: userId,
    }
  );

  return data.secure_url;
}

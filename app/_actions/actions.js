"use server";

import data from "@/app/_data/general-data.json";
import nodemailer from "nodemailer";
import { emailTemplateHtml } from "@/app/_lib/EmailTemplateHtml";
import express from "express";
import rateLimit from "express-rate-limit";

const app = express();

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
});

app.use("/sendEmail", formLimiter);

export async function sendEmail(formData) {
  const honey = formData.get("honey");

  try {
    if (honey === null) {
      const name = formData.get("name");
      const phone = formData.get("tel");
      const email = formData.get("email");
      const message = formData.get("message");

      const emailHtmlContent = emailTemplateHtml({
        name,
        phone,
        email,
        message,
      });

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        requireTLS: true,
      });
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_SEND_TO,
        subject: "Website form submission - Monk's Medical",
        replyTo: email,
        html: emailHtmlContent,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.error("Invalid form submission due to non-empty honeypot field");
    }
  } catch (error) {
    console.error(error);
  }
}

const {
  homePage: {
    contact: { email, phone },
  },
} = data;

export const showEmailAddress = async () => {
  return email;
};

export const showPhoneNumber = async () => {
  return phone;
};

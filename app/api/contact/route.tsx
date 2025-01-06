import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export async function POST(req: NextRequest){
    try {
        const { name, email, message }: FormData = await req.json();

        if(!name || !email || !message){
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // configure the email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // sender email  
                pass: process.env.EMAIL_PASS, // app password 
            }
        });

        // send the email 
        await transporter.sendMail({
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIPIENT_EMAIL, // my email
            subject: `New Message from ${name}`,
            text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
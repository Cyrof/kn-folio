import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    let input: unknown;
    try {
        input = await req.json();
    } catch {
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 },
        );
    }

    if (!input || typeof input !== "object" || Array.isArray(input)) {
        return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 },
        );
    }

    const fields = input as Record<string, unknown>;
    if (
        typeof fields.name !== "string" ||
        !fields.name.trim() ||
        typeof fields.email !== "string" ||
        !fields.email.trim() ||
        typeof fields.message !== "string" ||
        !fields.message.trim()
    ) {
        return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 },
        );
    }

    const name = fields.name.trim();
    const email = fields.email.trim();
    const message = fields.message;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
            { error: "Invalid email address" },
            { status: 400 },
        );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const sender = process.env.CONTACT_FROM_EMAIL?.trim();
    const recipient = process.env.RECIPIENT_EMAIL?.trim();
    if (!apiKey || !sender || !recipient) {
        console.error("Contact email configuration is incomplete");
        return NextResponse.json(
            { error: "Contact service unavailable" },
            { status: 503 },
        );
    }

    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                Accept: "application/json",
                "User-Agent": "kn-folio-contact",
            },
            body: JSON.stringify({
                from: sender,
                to: [recipient],
                reply_to: email,
                subject: `New Message from ${name}`,
                text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
            }),
            cache: "no-store",
            signal: AbortSignal.timeout(10_000),
        });

        if (!response.ok) {
            console.error("Resend rejected contact email", response.status);
            return NextResponse.json(
                { error: "Failed to send message" },
                { status: response.status === 429 ? 503 : 502 },
            );
        }

        const result: { id?: unknown } | null = await response.json();
        if (!result || typeof result.id !== "string" || !result.id) {
            throw new Error("Invalid email provider response");
        }

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 },
        );
    } catch (error) {
        const timedOut =
            error &&
            typeof error === "object" &&
            "name" in error &&
            error.name === "TimeoutError";
        console.error(
            "Contact email delivery failed",
            timedOut ? "timeout" : "request error",
        );
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: timedOut ? 504 : 502 },
        );
    }
}

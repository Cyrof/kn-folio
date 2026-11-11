"use client";

import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";

const initialFormData = { name: "", email: "", message: "" };

export default function ContactForm() {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle");
    const submitting = useRef(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (submitting.current) return;
        submitting.current = true;
        setStatus("sending");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error("Message could not be sent");
            setStatus("success");
            setFormData(initialFormData);
        } catch {
            setStatus("error");
        } finally {
            submitting.current = false;
        }
    }

    return (
        <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-labelledby="form-title"
            aria-busy={status === "sending"}
        >
            <h2 id="form-title">Leave a little note.</h2>
            <p className="form-intro" id="form-instructions">
                All fields are required. I&apos;ll reply to the email you
                provide.
            </p>
            <fieldset
                disabled={status === "sending"}
                aria-describedby="form-instructions"
            >
                <div className="form-row">
                    <div className="form-field">
                        <label htmlFor="name">Your name</label>
                        <input
                            id="name"
                            name="name"
                            autoComplete="name"
                            placeholder="What should I call you?"
                            value={formData.name}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    name: event.target.value,
                                })
                            }
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    email: event.target.value,
                                })
                            }
                            required
                        />
                    </div>
                </div>
                <div className="form-field">
                    <label htmlFor="message">What&apos;s on your mind?</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your idea, project, or question..."
                        rows={6}
                        value={formData.message}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                message: event.target.value,
                            })
                        }
                        required
                    />
                </div>
                <button type="submit" className="button button-primary">
                    {status === "sending" ? (
                        <>
                            <LoaderCircle
                                className="spinner"
                                size={18}
                                aria-hidden="true"
                            />{" "}
                            Sending message…
                        </>
                    ) : (
                        <>
                            Send message{" "}
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </>
                    )}
                </button>
            </fieldset>
            <div
                className="form-status"
                role="status"
                aria-live="polite"
                aria-atomic="true"
            >
                {status === "success" && (
                    <p className="success-message">
                        <CheckCircle2 size={19} aria-hidden="true" /> Thanks for
                        reaching out! Your message has been sent.
                    </p>
                )}
            </div>
            {status === "error" && (
                <p className="error-message" role="alert">
                    Your message couldn&apos;t be sent. Your note is still here,
                    so you can try again or{" "}
                    <a href="mailto:keithneo00@gmail.com">email me directly</a>.
                </p>
            )}
        </form>
    );
}

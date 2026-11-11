import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

import ContactForm from "../components/contactForm";

export const metadata: Metadata = {
    alternates: { canonical: "/contact" },
    title: "Contact",
    description:
        "Have a project, a question, or an idea? Get in touch with Keith Neo by email, LinkedIn, or the portfolio contact form.",
};

export default function Contact() {
    return (
        <div className="container">
            <header className="page-heading">
                <p className="eyebrow">LET&apos;S MAKE A CONNECTION</p>
                <h1>
                    A question? An idea?
                    <br />
                    <span className="serif">I&apos;m all ears.</span>
                </h1>
                <p>
                    Great projects and good conversations start with a hello.
                    <br />
                    Share what&apos;s on your mind.
                </p>
            </header>
            <div className="contact-layout section-bottom">
                <section
                    className="contact-info"
                    aria-labelledby="contact-info-title"
                >
                    <h2 id="contact-info-title">
                        Let&apos;s get in touch<span className="accent">.</span>
                    </h2>
                    <p>
                        Have a project idea, a technical question, or just want
                        to talk about something interesting? I&apos;d love to
                        hear from you.
                    </p>
                    <a
                        className="contact-email"
                        href="mailto:keithneo00@gmail.com"
                    >
                        <Mail size={19} aria-hidden="true" />
                        keithneo00@gmail.com
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                    <div className="contact-location">
                        <MapPin size={18} aria-hidden="true" />
                        <div>
                            Singapore
                            <span>
                                Working at the intersection of development,
                                security, and operations.
                            </span>
                        </div>
                    </div>
                    <div className="social-links">
                        <a
                            href="https://github.com/Cyrof"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub (opens in a new tab)"
                        >
                            <Github size={17} aria-hidden="true" /> GitHub{" "}
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/keithnks"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn (opens in a new tab)"
                        >
                            <Linkedin size={17} aria-hidden="true" /> LinkedIn{" "}
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    </div>
                </section>
                <ContactForm />
            </div>
        </div>
    );
}

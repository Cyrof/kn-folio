import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div>
                        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
                        <h2>
                            Great things start
                            <br />
                            with a <span className="serif">conversation.</span>
                        </h2>
                    </div>
                    <Link
                        href="/contact"
                        className="round-link"
                        aria-label="Let's talk about your idea"
                    >
                        <ArrowUpRight size={36} aria-hidden="true" />
                    </Link>
                </div>
                <div className="footer-middle">
                    <a
                        className="footer-email"
                        href="mailto:keithneo00@gmail.com"
                    >
                        keithneo00@gmail.com{" "}
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                    <div className="social-links">
                        <a
                            href="https://github.com/Cyrof"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub (opens in a new tab)"
                        >
                            <Github size={18} aria-hidden="true" /> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/keithnks"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn (opens in a new tab)"
                        >
                            <Linkedin size={18} aria-hidden="true" /> LinkedIn
                        </a>
                        <a
                            href="https://stackoverflow.com/users/22228481/cyrof"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Stack Overflow (opens in a new tab)"
                        >
                            Stack Overflow{" "}
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <Link
                        href="/"
                        className="wordmark"
                        aria-label="Keith Neo, home"
                    >
                        kn<span>.</span>
                    </Link>
                    <p>© {new Date().getFullYear()} Keith Neo</p>
                    <p>Built with curiosity. Based in Singapore.</p>
                    <a href="#main-content">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}

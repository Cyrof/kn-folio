"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/myWork", label: "Work" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
];

export default function NavBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);

    return (
        <header className="site-header">
            <nav
                className="container nav"
                aria-label="Main navigation"
                onKeyDown={(event) => {
                    if (event.key === "Escape" && open) {
                        setOpen(false);
                        toggle.current?.focus();
                    }
                }}
            >
                <Link
                    className="wordmark"
                    href="/"
                    aria-label="Keith Neo, home"
                    onClick={() => setOpen(false)}
                >
                    kn<span>.</span>
                </Link>
                <button
                    ref={toggle}
                    className="menu-toggle"
                    type="button"
                    aria-expanded={open}
                    aria-controls="navigation-links"
                    aria-label={open ? "Close navigation" : "Open navigation"}
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <X aria-hidden="true" size={23} />
                    ) : (
                        <Menu aria-hidden="true" size={23} />
                    )}
                </button>
                <div
                    id="navigation-links"
                    className={`nav-links${open ? " is-open" : ""}`}
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={
                                pathname === link.href ? "page" : undefined
                            }
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <Link href="/contact" className="nav-cta">
                    Let&apos;s talk{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
            </nav>
        </header>
    );
}

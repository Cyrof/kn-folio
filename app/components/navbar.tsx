"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/myWork", label: "Work" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
];

export default function NavBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [experienceInView, setExperienceInView] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);
    const experienceActive = pathname === "/" && experienceInView;

    function currentLocation(href: string): "page" | "location" | undefined {
        if (href === "/#experience") {
            return experienceActive ? "location" : undefined;
        }
        if (href === "/" && experienceActive) return undefined;
        return pathname === href ? "page" : undefined;
    }

    useEffect(() => {
        if (pathname !== "/") return;
        const section = document.getElementById("experience");
        if (!section) return;
        const header = document.querySelector(".site-header");
        let frame: number | null = null;

        const updateActiveSection = () => {
            const bounds = section.getBoundingClientRect();
            // Match the page's anchor offset, including the mobile header.
            const readingLine = Math.max(
                110,
                (header?.getBoundingClientRect().bottom ?? 0) + 24,
            );
            setExperienceInView(
                bounds.top <= readingLine + 1 && bounds.bottom > readingLine,
            );
        };

        function scheduleUpdate() {
            if (frame !== null) return;
            frame = window.requestAnimationFrame(() => {
                frame = null;
                updateActiveSection();
            });
        }

        updateActiveSection();
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);
        window.addEventListener("hashchange", scheduleUpdate);
        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            window.removeEventListener("hashchange", scheduleUpdate);
            if (frame !== null) window.cancelAnimationFrame(frame);
        };
    }, [pathname]);

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
                            aria-current={currentLocation(link.href)}
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

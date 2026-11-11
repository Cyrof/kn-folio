import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "./components/footer";
import NavBar from "./components/navbar";

import "./globals.css";

const sans = localFont({
    src: "../public/fonts/dm-sans-latin.woff2",
    variable: "--font-sans",
    weight: "100 1000",
    display: "swap",
});
const heading = localFont({
    src: "../public/fonts/space-grotesk-latin.woff2",
    variable: "--font-heading",
    weight: "300 700",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Keith Neo - AI & Cybersecurity Portfolio",
    description:
        "Digital portfolio showcasing my journey in AI and Cybersecurity",
    icons: { icon: "/images/assets/portfolio.svg" },
};

export const viewport = { themeColor: "#443641" };

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${sans.variable} ${heading.variable}`}>
                <a className="skip-link" href="#main-content">
                    Skip to content
                </a>
                <NavBar />
                <main id="main-content" tabIndex={-1}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

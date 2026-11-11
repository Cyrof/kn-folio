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
    metadataBase: new URL(
        process.env.SITE_URL || "https://knfolio.cyrostack.dev",
    ),
    title: {
        default: "Keith Neo — AI System Engineer",
        template: "%s | Keith Neo",
    },
    description:
        "Keith Neo is an AI System Engineer in Singapore with DevSecOps experience, preparing to move into solution architecture. Explore projects in AI, infrastructure, and software.",
    applicationName: "Keith Neo Portfolio",
    openGraph: {
        title: "Keith Neo — AI System Engineer",
        description:
            "AI engineering and DevSecOps experience, with a growing focus on solution architecture. Explore Keith's projects and the systems behind them.",
        type: "website",
        locale: "en_SG",
        siteName: "Keith Neo",
    },
    twitter: {
        card: "summary_large_image",
        title: "Keith Neo — AI System Engineer",
        description:
            "AI engineering, DevSecOps experience, and a growing focus on solution architecture. Explore my projects and get in touch.",
    },
    icons: { icon: "/icon.svg" },
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

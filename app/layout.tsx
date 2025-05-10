import { mantineHtmlProps } from "@mantine/core";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";

import { Providers } from "./provider";

import "./globals.css";

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Keith Neo - AI & Cybersecurity Portfolio",
    description: "Digital portfolio showcasing my journey in AI and Cybersecurity",
    icons: {
        icon: "/images/assets/portfolio.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" {...mantineHtmlProps} suppressHydrationWarning>
            <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--paper)",
                foreground: "var(--ink)",
            },
            fontFamily: {
                sans: "var(--font-sans), Arial, Helvetica, sans-serif",
                heading: "var(--font-heading), Arial, Helvetica, sans-serif",
            },
        },
    },
    plugins: [],
} satisfies Config;

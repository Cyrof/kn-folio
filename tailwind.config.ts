import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: "var(--font-roboto), Arial, Helvetica, sans-serif",
        heading: "var(--font-poppins), Arial, Helvetica, sans-serif", 
      },
      keyframes: {
        // animation for contact form
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateX(10%)", 
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        // animation for contact form
        appear: "appear 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

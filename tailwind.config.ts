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

        // staggered text
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20%)",
          },
          "100%": {
            opacity: "1",
            translate: "translateY(0)",
          },
        },

        slideDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20%)",
          },
          "100%": {
            opacity: "1",
            translate: "translateY(0)",
          },
        },

        // main picture slide in
        mainAppear: {
          "0%": {
            opacity: "0",
            transform: "translateX(-10%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          }
        },

        // text reveal 
        "text-reveal": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          }
        },

        // skills card load animation 
        cardDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-50%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },

        // left slide in 
        leftSlide: {
          "0%": {
            opacity: "0",
            transform: "translateX(10%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        // animation for contact form
        appear: "appear 1.5s ease-in-out forwards",

        // staggered text
        "staggered-text-up": "slideUp 1s ease var(--slidein-delay, 0) forwards",
        "staggered-text-down": "slideDown 1s ease var(--slidein-delay, 0) forwards",

        // main picture slide in
        "right-slideIn": "mainAppear 1.5s ease forwards",

        // left slide in animation 
        "left-slidein": "leftSlide 1.5s ease forwards",

        // text reveal animation
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s backwards",

        // skills card animation 
        "card-down": "cardDown 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards"
      },
    },
  },
  plugins: [],
} satisfies Config;

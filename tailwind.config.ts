import { transform } from "next/dist/build/swc"
import type { Config } from "tailwindcss"


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        logincardcolor:"hsla(130, 19%, 49%, 0.29)",
        registercardcolor1:"hsla(147, 100%, 33%, 0.32)",
        registercardcolor2:"hsla(43, 96%, 58%, 0.35)",
        loginbordercolor:"hsla(162, 56%, 28%, 1)",
        registerbordercolor:"hsla(39, 59%, 55%, 0.5)",
        inputfildcolor:"hsla(115, 34%, 78%, 0.5)",
        submitbtncolor:"hsla(0, 0%, 0%, 0.5)",
        loginsignuplinkcolor:"hsla(61, 40%, 58%, 1)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "reverse-spin":{
          from:{transform: "rotate(360deg)"},
          to:{transform: "rotate(0deg)"},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "reverse-spin": "reverse-spin 4s linear infinite",
        "spin-slow": "spin 7s linear infinite",
      },
      backgroundImage: {
        'card-bg': "url('/images/cardbg.png')", // Ensure this path is correct relative to the public directory
      },
      fontFamily: {
        WallpoetFont: ['WallpoetFont', 'sans-serif'], // Add the custom font here
        vt323: ['VT323', 'monospace'],
        diary: ['diary', 'sans-serif']
      },
      fontFamily: {
        vt323: ['VT323-Regular', 'sans-serif'],
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
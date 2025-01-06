import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        slate: {
          300: "hsl(212, 45%, 89%)",
          500: "hsl(216, 15%, 48%)",
          900: "hsl(218, 44%, 22%)",
        }
      },
      fontFamily: {
        serif: ["Outfit", ...defaultTheme.fontFamily.serif],
      },
      
    },
  },
  plugins: [],
} satisfies Config;

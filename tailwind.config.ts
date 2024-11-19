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
        dark: "var(--dark)",
        secondary: "var(--secondary)",
        primary: "var(--primary)",
        lowPriority: "var(--lowPriority)",
        lightColor: "var(--lightColor)",
        White: "var(--White)",
      },
    },
  },
  plugins: [],
} satisfies Config;

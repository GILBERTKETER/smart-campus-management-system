import type { Config } from "tailwindcss";

const config: Config = {
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
        secondary: "#fcb815",
        primary: "#22409a",
        light: "#eef5fe",
        black: "#36454F",
        green: "#3d9970",
        lightgray:"#F4F4F4",
        white:"#FFFFFF"
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2376FF",
        yellow: "#F3AA50",
        black: "#333333",
        gray: "#E1E1E1",
      },
    },
  },
  plugins: [],
};
export default config;

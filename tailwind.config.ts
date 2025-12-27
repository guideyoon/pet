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
        softBrown: "#D4A574",
        pastel: "#F5E6D3",
        offWhite: "#FEFCF9",
        darkGray: "#3A3A3A",
      },
    },
  },
  plugins: [],
};
export default config;


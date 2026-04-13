/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2DD4BF",
        primaryDark: "#14B8A6",
        darkBg: "#0F172A",
        textLight: "#E5E7EB",
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-arimo)", "sans-serif"], // Add Arimo as sans-serif fallback
        serif: ["var(--font-merriweather)", "serif"], // Add Merriweather as serif fallback
      },
      colors: {
        mainBlue: "#4747D6",
        customBlack: "#333333",
        ash: "#555555",
        fade: "#999999",
      },
    },
  },
  plugins: [],
};

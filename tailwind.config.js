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
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-manrope)", "serif"],
      },
      colors: {
        mainBlue: "#4747D6",
        customBlack: "#333333",
        ash: "#555555",
        fade: "#999999",
      },
      boxShadow: {
        "custom-1": "0px 2px 5px 0px #6B6B6B03",
        "custom-2": "0px 10px 10px 0px #6B6B6B03",
        "custom-3": "0px 21px 13px 0px #6B6B6B03",
        "custom-4": "0px 38px 15px 0px #6B6B6B03",
        "custom-5": "0px 60px 17px 0px #6B6B6B00",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

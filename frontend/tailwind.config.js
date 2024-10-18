/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thunder: ["Thunder", "san-serif"],
      },
      lineHeight: {
        "4percent": "1.04",
      },
    },
  },
  plugins: [],
};

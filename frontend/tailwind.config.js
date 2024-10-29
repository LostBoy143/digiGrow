/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        thunder: ["Thunder", "san-serif"],
      },
      lineHeight: {
        "4percent": "1.04",
      },
    },
  },
  plugins: [],
};

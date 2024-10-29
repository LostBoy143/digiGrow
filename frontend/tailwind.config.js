/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        thunder: ["Thunder", "sans-serif"],
        monument: ["PPMonument", "sans-serif"],
      },
      lineHeight: {
        "4percent": "1.04",
      },
      rotate: {
        60: "60deg",
      },
    },
  },
  plugins: [],
};

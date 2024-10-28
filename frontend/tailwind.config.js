/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        thunder: ["Thunder", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      lineHeight: {
        "4percent": "1.04",
      },
      colors: {
        'semi-transparent-white': '#FFFFFF30',
        'half-white': 'rgba(255, 255, 255, 0.05)'
      },
      backdropBlur: {
        'backdrop-60': '60px', // Define a custom blur
      },
    },
  },
  plugins: [],
};

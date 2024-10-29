/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        thunder: ["Thunder", "sans-serif"],
<<<<<<< HEAD
        monument: ["PPMonument", "sans-serif"],
=======
        poppins: ["Poppins", "sans-serif"]
>>>>>>> 2d1b7bd65b36e450d0773f9c94c520596f23443e
      },
      lineHeight: {
        "4percent": "1.04",
      },
<<<<<<< HEAD
      rotate: {
        60: "60deg",
=======
      colors: {
        'semi-transparent-white': '#FFFFFF30',
        'half-white': 'rgba(255, 255, 255, 0.05)'
      },
      backdropBlur: {
        'backdrop-60': '60px', // Define a custom blur
>>>>>>> 2d1b7bd65b36e450d0773f9c94c520596f23443e
      },
    },
  },
  plugins: [],
};

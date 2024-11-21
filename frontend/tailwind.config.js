/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        thunder: ["Thunder", "sans-serif"],
        monument: ["PP Monument Extended", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        porter: ["Porter", "sans-serif"],
      },
      lineHeight: {
        "4percent": "1.04",
      },
      backdropBlur: {
        "backdrop-60": "60px", // Define a custom blur
      },
      blur: {
        64: "64px",
      },
      rotate: {
        60: "60deg",
      },
      colors: {
        "semi-transparent-white": "#FFFFFF30",
        "semi-transparent-white-10": "#FFFFFF10",
        "half-white": "rgba(255, 255, 255, 0.05)",
      },
      plugins: [],
    },
  },
};

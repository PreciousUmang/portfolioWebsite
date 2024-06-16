/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },

      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        marker: ["Permanent Marker", "cursive"],
      },
      colors: {
        primary: "#2B2B2B",
        secondary: "#F5F5F5",
        accent: "#FF4C4C",
        darkAccent: "#8B0000",
      },
    },

    screens: {
      xs: { max: "360px" }, //=> Breakpoint for Samsung Galaxy S8+ (Default screen used for building)
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

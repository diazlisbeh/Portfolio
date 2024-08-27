const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#fff",
      bunker: {
        50: "#f4f6fb",
        100: "#e8ecf6",
        200: "#ccd8eb",
        300: "#a0b8d9",
        400: "#6d92c3",
        500: "#4a74ad",
        600: "#385b91",
        700: "#2f4975",
        800: "#2a4062",
        900: "#273753",
        950: "#080b11",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({})],
};

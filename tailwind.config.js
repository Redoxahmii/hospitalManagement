/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    themes: [
      "winter",
      {
        winter: {
          ...require("daisyui/src/theming/themes")["[data-theme=winter]"],
          primary: "#C4E9E1",
        },
      },
    ],
  },
};

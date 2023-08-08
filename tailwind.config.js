/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#451F55",
          dark: "#22162B",
          lighter: "#724E91",
        },
        secondary: {
          DEFAULT: "#EFAAC4",
          lighter: "#FFC4D1",
        },
        "gray-default": "#6B717E",
      },
    },
  },
  plugins: [
  ],
};

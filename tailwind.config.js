/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        serif: ['"Noto Serif"', "serif"],
      },
      container: {
        screens: {
          sm: "94vw",
          md: "90vw",
          lg: "720px",
          xl: "960px",
        },
      },
    },
  },
  plugins: [],
};

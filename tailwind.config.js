/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Figtree"', "sans-serif"],
        serif: ['"Figtree"', "serif"],
        display: ['"Playfair Display"', "sans-serif"],
        subdisplay: ['"Figtree"', "sans-serif"],
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

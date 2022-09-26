/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    transitionProperty: { transitionHeader: ["all", "visibility", "z-index"] },
    transitionDuration: { transitionHeader: ["0.35s", "0s", "0s"] },
    transitionDelay: { transitionHeader: ["0s", "0.01s", "0.01s"] },
    extend: {},
  },
  plugins: [],
};

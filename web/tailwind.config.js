/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'brand-primary': '#8257E5',
        'brand-hover': '#996DFF',
      },
    },
  },
  plugins: [],
}

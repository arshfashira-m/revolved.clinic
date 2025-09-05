/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      henju: ['Henju', 'sans-serif'],
      quinn: ['Quinn Rounded', 'sans-serif'],
      quinn: ["Quinn Rounded", "sans-serif"],

    }
    },
  },
  safelist: [
  'hover:border-[#F2A472]',
  'hover:border-[#85B5A5]',
  'hover:border-[#0C7885]',
],
  plugins: [],
}
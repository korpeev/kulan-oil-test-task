/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF363C",
        gray: "#F6F6F6",
        link: "#583899"
      },
      fontFamily: {
        'mulish': ['Mulish']
      }
    },
  },
  plugins: [],
}


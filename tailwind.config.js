/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#EEEAF9', 
          DEFAULT: '#673DCB', 
          dark: '#794FDE',
        },
      },
    },
  },
  plugins: [],
}


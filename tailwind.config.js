/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#353345',
        'background': '#e2d8d8',
        'primary': '#937769',
        'secondary': '#a4a2c1',
        'accent': '#a8a6d0',
       },
    },
  },
  plugins: [
    require('daisyui'),
  ],
 
   
}


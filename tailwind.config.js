/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text': '#353345',
        'background': '#e2d8d8',
        'primary': '#937769',
        'secondary': '#a4a2c1',
        'accent': '#a8a6d0',
        'text-dark':'#e2e2e2',
        'background-dark':'#181818',
        'primary-dark': '#666380',
        'accent-dark':'#5e5c75',
       },
    },
  },
  plugins: [
    require('daisyui'),
  ],
 
   
}


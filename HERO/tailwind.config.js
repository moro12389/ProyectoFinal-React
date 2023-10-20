/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondoAzul': 'url(/otro.svg)',
        
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
        lobster: ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [],
}
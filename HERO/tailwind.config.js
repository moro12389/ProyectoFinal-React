/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondoAzul': 'url(/otro2.svg)',
        'ticket':'url(/ticket2.svg)'

      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
        lobster: ['Lobster', 'cursive'],
      },
    },
    screens: {
      "2xl": { max: "1535px" },    // => @media (max-width: 1535px) { ... }        
      xl: { max: "1279px" },       // => @media (max-width: 1275px) { ... }        
      lg: { max: "1023px" },       // => @media (max-width: 1023px) { ... }        
      md: { max: "767px" },        // => @media (max-width: 767px) { ... }        
      sm: { max: "639px" },        // => @media (max-width: 639px) { ... }       
      xs: { max: "479px" },        // => @media (max-width: 479px) { ... } galaxy fold 280px
    }
  },
  plugins: [],
}
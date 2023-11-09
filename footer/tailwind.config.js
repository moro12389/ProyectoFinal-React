/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
      'posright': 'center',
      'positionxl': 'center'
    },
    extend: {
      backgroundImage: {
        'footerBg': 'url(./public/img/footerbg.png)',
        'footerBgXl': 'url(./public/img/bg1024.png)',
      },
    },
    screens: {

      xxl: { max: "1400px" },
      // => @media (max-width: 1275px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1275px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "361px" },
      // => @media (max-width: 479px) { ... }
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      opacity: ['group-hover'],
    },
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        grayWhite: '#f8f8f8',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        LightGray: '#EEEEEE',
        veryLightGray: '#F8F8F8',
        menu:'#000',
        darkGray: '#777',
        veryDarkGray: '#333',
        themeRed:'#be1d28',
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
      letterSpacing: {
        wider: '.15em',
        widest: '.35em',
      },
      fontSize: {

      },
      keyframes: {
        'open-menu': {
          '0%': {  opacity: 0 },
          '100%': {  opacity: 1 },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s',
      },
    },
  },
  plugins: [],
}

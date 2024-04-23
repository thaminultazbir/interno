/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container:{
      padding:{
        DEFAULT:'15px',
      },
    },
    screens:{
      sm: '640px',
      md: '764px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily:{
      primary: 'DM Serif Display',
      secondary: 'Jost'
    },
    backgroundImage:{
      hero: 'url(/assets/hero/bg.jpg)',
      grid: 'url(/assets/grid.png)',
    },
    extend: {
      colors:{
        primary: {
          DEFAULT: '#292F36',
          hover: '#343e41',
        },
        secondary: '#4D5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover:'#b88c5d'
        },
      },
    },
  },
  plugins: [],
}
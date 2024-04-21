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
    extend: {},
  },
  plugins: [],
}
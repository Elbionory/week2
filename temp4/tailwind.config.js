/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        AlmostWhite: 'hsl(0, 0%, 98%)',
        MediumGray: 'hsl(0, 0%, 41%)',
        AlmostBlack: 'hsl(0, 0%, 8%)'
      },
      fontSize:{
        body:'18px'
      },
      fontFamily:{
        family:'Epilogue'
      },
      fontWeight:{
        500:'500',
        600:'600'
      }
    },
  },
  plugins: [],
}
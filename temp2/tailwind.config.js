/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Libre Franklin",
      },
      colors: {
        Blue: ' hsl(223, 87%, 63%)',
        PaleBlue: 'hsl(223, 100%, 88%)',
        LightRed: 'hsl(354, 100%, 66%)',
        Gray: 'hsl(0, 0%, 59%)',
        VeryDarkBlue: 'hsl(209, 33%, 12%)'
      },
      backgroundColor:{
        VeryDarkBlue: 'hsl(209, 33%, 12%)',
        Blue: ' hsl(223, 87%, 63%)',
        PaleBlue: 'hsl(223, 100%, 88%)',
        LightRed: 'hsl(354, 100%, 66%)',
        Gray: 'hsl(0, 0%, 59%)'
      },
      fontWeight: {
        300: '300',
        600: '600',
        700: '700'
      },
      fontSize: {
        2: '20px'
      }
    },
  },
  plugins: [],
}
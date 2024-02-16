/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Moderateviolet: 'hsl(263, 55%, 52%)',
         Verydarkgrayishblue: 'hsl(217, 19%, 35%)',
          Verydarkblackishblue: 'hsl(219, 29%, 14%)', 
          White:' hsl(0, 0%, 100%)',
LightGray:'hsl(0,0%,81%)',
grayish:'hsl(210,46%,95%)'
      },
      fontSize:{
        body:'13px'
      },
      fontFamily:{
        family:'Barlow Semi Condensed'
      },
      fontWeight:{
        500:'500',
        600:'600'
      },
      width:{
        700:'700px'
      },
      height:{
        600:'600px'
      }
    },
  },
  plugins: [],
}
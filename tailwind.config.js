/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        'gray': '#202020',
        'yellow': '#FDE12D',
        'white': '#ffffff',
        'blue': '#60B3DC',
        'gold': '#FFD060',
        'pink': "#F25185",
        'purple': "#9629C4"
      },
      fontSize:{
        '7.5xl': '5.25rem'
      },
      fontFamily:{
        'title': ['Newake','sans-serif'],
        'body': ['GeneralSans','sans-serif'],
        'marquee': ['NeueMachina','sans-serif'],
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        marquee2: 'marquee2 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#079211',
        'white': '#ffff',
        'light-gray': '#d1d508',
        'gray': '#808080',
        'deep-gray': '#0A0A0AF',
        'light-dark': '#313131',
        'dark': '#101017',
        'deep-dark': '#050507',
             }
    },
  },
  plugins: [],
}


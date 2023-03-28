/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
        fontFamily: {
            'libre-baskerville': ['Libre Baskerville', 'sans-serif',],
        },
    },
    screens: {
        'us': '370px',
        'sm': '640px',
        'md': '768px',
        'md-1': '767px',
        'lg': '1024px',
        'lg-1': '1023px',
        'xl': '1366px',
        'xl-1': '1365px',
        '2xl': '1536px',
    },
    container: {
        center: true,
    },
    important: true,
  },
  plugins: [],
  content: ["./src/partials/*.html", "./src/*.html"],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
        fontFamily: {
            'libre-baskerville': ['Libre Baskerville', 'sans-serif',],
        },
        colors: {
          "btn-color": "#FF6525",
          "outrageous-orange": "#FF6B3F",
          "crisis-bg": "#BECDCE",
          silver: "#B8B8B8",
          "silver-chalice": "#9E9E9E",
          blur: "rgba(255, 255, 255, 0.3)",
          tiara: "#BECDCE",
        },
        boxShadow: {
          "md-1": "0px 0px 5px 0px rgba(0,0,0,0.1)",
        },
        zIndex: {
          '100': '100',
        }
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
    fontFamily: {
      farro: ["Farro", "sans-serif"],
      tryGrtskVariable: ["TRY Grtsk Variable", "sans-serif"],
      gilroy: ["Gilroy", "sans-serif"],
    },
    container: {
        center: true,
    },
    important: true,
  },
  plugins: [],
  content: ["./src/partials/*.html", "./src/*.html"],
}

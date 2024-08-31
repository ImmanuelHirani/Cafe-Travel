/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    screens: {
      sm: "412px", // Ukuran layar mobile kecil, sangat sering digunakan untuk smartphone.
      md: "798px", // Ukuran layar tablet atau perangkat mobile yang lebih besar.
      lg: "834px", // Ukuran layar desktop kecil atau tablet dalam mode landscape.
      xl: "1280px", // Ukuran layar desktop standar, cukup umum digunakan.
      "2xl": "1440px", // Ukuran layar desktop besar atau monitor high-definition.
      "3xl": "1800px",
    },
    extend: {
      fontFamily: {
        magilo: ["Magilo"],
        aesthetnova: ["AesthetNova"],
      },

      colors: {
        "highlight-content": "#F8C055",
        "accent-color": "#FAF7F5",
        "primary-color": "#090E1A",
        "secondary-accent-color": "#141925",
        "secondary-color": "#F24949",
      },

      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};

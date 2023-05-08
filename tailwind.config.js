/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        title: "#111111",
        text: "#444444",
        background: "#f6f6f2",
        primary: "#FFBE26",
        primaryHover: "#ffd166",
        primaryGradient: "#ffb53d",
        secondary: "#844B05",
        secondaryHover: "#b66707",
        secondaryGradient: "#9d4006",
      },
      backgroundImage: {
        banner: "url('../images/backgrounds/banner.webp')",
        "beans-spill": "url('../images/backgrounds/coffee-beans-spill.webp')",
        "beans-cover": "url('../images/backgrounds/coffee-beans-cover.webp')",
        "beans-wall": "url('../images/backgrounds/coffee-beans-wall.webp')",
      },
    },
  },
  plugins: [],
};

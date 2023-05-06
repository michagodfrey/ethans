/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        title: "#111111",
        text: "#444444",
        misc: "#999999",
        background: "#f6f6f2",
        primary: "#FFBE26",
        primaryHover:  "#ffd166",
        secondary: "#6d4c41",
      },
      backgroundImage: {
        banner: "url('/images/banner.webp')",
        bannerOg: "url(/images/ech-banner.webp)",
        "beans-spill": "url('/images/backgrounds/coffee-beans-spill.webp')",
        "beans-cover": "url('/images/backgrounds/coffee-beans-cover.webp')",
        "beans-wall": "url('/images/backgrounds/coffee-beans-wall.webp')",
      },
    },
  },
  plugins: [],
};

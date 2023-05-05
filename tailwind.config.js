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
        primary: "#ffd166",
        primaryHover: "#ffc233",
        secondary: "#6d4c41",
      },
      backgroundImage: {
        banner: "url('/images/banner.webp')",
        beans: "url('/images/bg-coffee-beans.webp')",
        "beans-cover": "url('/images/coffee-beans-cover.webp')",
        "beans-wall": "url('/images/coffee-beans-wall.webp')",
      },
    },
  },
  plugins: [],
};

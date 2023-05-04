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
        secondary: "#6d4c41",
      },
      backgroundImage: {
        "banner": "url('/images/banner.webp')",
      }
    },
  },
  plugins: [],
};

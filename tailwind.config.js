/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        "brand-color": "#97edaa",
        "dark-10": "#0b0b0b",
        "dark-20": "#101010",
        "dark-30": "#1f1f1f",
        "light-10": "#ffffff",
        "light-20": "#c2c2c2",
      },
    },
    fontFamily: {
      body: ["Archivo, sans-serif"],
      emphasis: ["Fira Code, monospace"],
    },
  },
  plugins: [],
};

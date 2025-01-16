/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },

      animation: {
        gradient: "gradient 6s linear infinite",
      },

      fontFamily: {
        nuku1: ['Nuku1', 'sans-serif'],
        android: ['Android', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

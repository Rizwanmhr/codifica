/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baloo-tamma': ['Baloo Tamma', 'sans-serif'],
        'libre-franklin': ['Libre Franklin', 'sans-serif'],
        'lustria': ['Lustria', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


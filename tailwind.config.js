/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black':'#0B0B0C',
        'purple':'#3A1F97',
        'gold':'#F5E989',
        'white':'#F3F0FE'
      }
    },
  },
  plugins: [],
}

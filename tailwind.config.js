/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s linear infinite',
        'pulse-slow': 'pulse 3s linear infinite',
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

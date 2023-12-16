/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '128': '32rem', // 128/4 = 32rem
      },
    },
  },
  plugins: [],
}


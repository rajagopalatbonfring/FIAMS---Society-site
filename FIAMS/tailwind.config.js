/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fiams-purple': '#6A4C93',
        'fiams-gold': '#F4A261',
        'fiams-coral': '#E76F51',
        'fiams-charcoal': '#2D3436',
        'fiams-warmwhite': '#FEFEFE',
        'fiams-lavender': '#A8DADC',
      },
      fontFamily: {
        sans: ['"FK Grotesk Neue"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '96rem',
      }
    },
  },
  plugins: [],
}
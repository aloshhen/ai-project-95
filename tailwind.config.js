/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bar-primary': '#1E3A8A',
        'bar-secondary': '#3B82F6',
        'bar-accent': '#F59E0B'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
}
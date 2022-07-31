/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./node_modules/ui/src/**/*.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

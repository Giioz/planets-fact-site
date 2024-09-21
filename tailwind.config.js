/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Antonio"', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    spacing: {
      sm: ["1.5rem"],
    },
    extend: {},
  },
  plugins: [],
}


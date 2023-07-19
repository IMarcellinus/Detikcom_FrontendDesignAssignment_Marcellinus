/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('./src/assets/images/herosection.png')",
        'about-section': "url('./src/assets/images/aboutsection.png')",
      }
    },
  },
  plugins: [],
}


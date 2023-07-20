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
        'register-section': "url('./src/assets/images/Background.png')",
        'about-section': "url('./src/assets/images/aboutsection.png')",
        'mekanisme-section': "url('./src/assets/images/mekanismesection.png')",
      },
      colors: {
        'biru-muda': '#007CBD',
      }
    },
  },
  plugins: [],
}


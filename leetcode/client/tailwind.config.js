/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#1A202C',  // Dark background color
        'custom-text': '#FFFFFF', // White text color for high contrast
        'accent-color': '#FFD700', // Gold accent color for a highlight
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"], // Add your custom font
      },
    },
  },
  plugins: [],
};

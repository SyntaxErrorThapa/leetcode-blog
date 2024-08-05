/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg-image': "url('/leetcode_background.gif')"
      },
      colors: {
        'custom-bg': '#1A202C',  // Dark background color
        'custom-text': '#FFFFFF', // White text color for high contrast
        'accent-color': '#FFD700', // Gold accent color for a highlight
        'custom-green':'#10B981', 
        'custom-orange': '#F59E0B', 
        'custom-red':'#F43F5E',
      },
      fontFamily: {
        fira: ["Fira Code", "monospace"], // Add your custom font
      },
    },
  },
  plugins: [],
};

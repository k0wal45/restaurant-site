/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['playfair', 'serif'],
        'playfair-semibold': ['playfair-semibold', 'serif'],
        'playfair-bold': ['playfair-bold', 'serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#84cc16",
        "secondary": "#2563eb",
        "accent": "#00dfff",
        "neutral": "#4b5563",
        "base-100": "#f3f4f6",
        "info": "#00e8ff",
        "success": "#00fda9",
        "warning": "#a55600",
        "error": "#ce0037",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
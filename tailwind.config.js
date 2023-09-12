/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "White": "#ffffff",
        "Lightgrayishviolet": "#dedddf",
        "Darkgrayishviolet": "#8e8593",
        "verydarkviolet": "#21092f",
        "error":"#ff5252",          
        'Linearpurple': '#8e44ad',
        'LinearpurpleB': '#eee',
        // 'bg-gradient-to-r from-Linearpurple to-LinearpurpleB'                
      },      
    },
    fontFamily:{
      Grotes:['Space Grotesk','sans-serif']
    }
  },
  plugins: [],
}


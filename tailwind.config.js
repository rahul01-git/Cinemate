export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'other' : { 'min' : '340px' , 'max' : '1200px'}
      },
      colors: {
        darkbg: "#1E293B"
      }

    },
  },
  plugins: [],
}


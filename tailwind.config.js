
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Tuatara":"#1a1a19",
        "DiSerria":"#d69b4d",
        "PuertoRico":"#50ba9f",
        "Lynch":"#648090"
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'poppins':['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
  ],
}
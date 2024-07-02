/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#171A1FFF",
        secondary: "#9095A1FF",
        brown: "#3D1700FF",
      },
      fontFamily: {
        epilogue: ["Epilogue"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};

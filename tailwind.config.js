/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#171A1FFF",
        secondary: "#9095A1FF",
        brown: "#3D1700FF",
        buttonColor: "#f8f6f5",
        yellow: "#f4bd62",
        gray: "#ebebeb",
        sectionColor: "#F5F5F5FF",
      },
      fontFamily: {
        epilogue: ["Epilogue"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};

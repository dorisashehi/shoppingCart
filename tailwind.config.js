/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        brown: "var(--brown-color)",
        buttonColor: "var(--button-color)",
        yellow: "var(--yellow-color)",
        gray: "var(--gray-color)",
        sectionColor: "var(--section-bg-color)",
        category: "var(--category-color)",
      },
      fontFamily: {
        epilogue: ["Epilogue"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};

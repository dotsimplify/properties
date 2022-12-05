/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firsFont: ["Arial", "sans-serif"],
      },
      colors: {
        Primary: "#F5F5F5",
        buttonColor: "#FFAC12",
        bg: "#F5F5F5",
      },
      boxShadow: {
        imageShadow: "0px 32px 52px 12px rgba(0,0,0,0.4)",
        cardShadow: "-1px 4px 64px -19px rgba(255,172,18,0.71)",
      },
    },
  },
  plugins: [],
};

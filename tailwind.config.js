/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D7A71",
        secondary: "#CDD9C5",
        accent: "#BA806A",
        "neutral-bg": "#EFEADD",
        "neutral-surface": "#E8D7C7",
      },
    },
  },
  plugins: [],
};


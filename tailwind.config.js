/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: "#252d4a",
          lightBlue: "#7cc6fe",
        },
        accent: {
          ring: "#234668",
          blueHover: "#555e7d",
        },
      },
    },
  },
  plugins: [],
};

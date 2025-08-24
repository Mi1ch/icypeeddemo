/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        icypeed: {
          blue: "#00AEEF",
          red: "#EE2C2C",
          dark: "#0A2533"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(2, 12, 27, 0.15)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  plugins: [],
}
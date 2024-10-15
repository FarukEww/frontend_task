/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Raleway", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0px",
        },
      },
      zIndex: {
        9999: "9999",
      },
      colors: {
        darkBlue: "#0E0538",
        lightBlue: "#E3DEFE",
        red: "#BE0606",
      },
      backgroundColor: {
        darkblue: "#0E0538",
        lightkblue: "#E3DEFE",
        red: "#BE0606",
        blue: "#7258F9",
      },
      borderColor: {
        darkblue: "#0E0538",
        blue: "#7258F9",
      },
    },
  },
  plugins: [],
};

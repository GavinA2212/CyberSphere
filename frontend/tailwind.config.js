/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#141416",
        line: "rgba(31,31,34,.9)",
        greyish: "rgba(255,255,255,.5)",
        lessgreyish: "rgba(255,255,255,.9)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

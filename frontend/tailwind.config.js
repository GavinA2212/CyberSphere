/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#141416",
        darkbglighter: "rgb(31,31,31)",
        line: "rgba(31,31,34,.9)",
        greyish: "rgba(255,255,255,.5)",
        lessgreyish: "rgba(255,255,255,.9)",
        greyhover: "rgba(255,255,255,.1)",
        greyclick: "rgba(255,255,255,.2)",
        purp: "rgba(130,44,242, 1)",
        purphover: "rgba(130,44,242, .5)",
        purpclick: "rgba(130,44,242, .3)",
      },
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        xl05: ["1.37rem", "1.87rem"],
      },
      spacing: {
        thirtyp: "30%",
        seventyp: "70%",
        sixtytwop: "62%",
        thirtysixp: "36%",
        featuresize: "26rem",
        smfeaturesize: "22rem",
        navoffset: "10.5rem",
      },
      screens: {
        xs: "1px",
      },
    },
  },
  plugins: [],
};

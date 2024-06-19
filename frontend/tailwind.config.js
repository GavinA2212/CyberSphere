/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      default: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        darkbg: "#141416",
        darkbglighter: "rgb(31,31,31)",
        line: "rgba(31,31,34,.9)",
        lineT: "rgba(31,31,34,.1)",
        greyish: "rgba(255,255,255,.5)",
        lessgreyish: "rgba(255,255,255,.9)",
        greyhover: "rgba(255,255,255,.1)",
        greyclick: "rgba(255,255,255,.2)",
        purp: "rgba(130,44,242, 1)",
        purphover: "rgba(130,44,242, .5)",
        purpclick: "rgba(130,44,242, .3)",
        lightgreen: "rgb(120,224,184)",
      },
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        xl05: ["1.37rem", "1.87rem"],
        "2xs": [".625rem", ".75rem"],
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
        twol: "1380px",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
    },
  },
  plugins: [],
};

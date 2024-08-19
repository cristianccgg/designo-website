/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        peach: "#E7816B",
        black: "#1D1C1E",

        // Secondary Colors
        lightPeach: "#FFAD9B",
        DarkGrey: "#333136",
        lightGrey: "#F1F3F5",
        verylightpeach: "#FDF3F0",
      },
      fontFamily: {
        Jost: "Jost",
      },
      fontSize: {
        body: "16px",
        h1: "48px",
        h2: "40px",
        h3: "20px",
      },
      lineHeight: {
        body: "26px",
        h1: "48px",
        h2: "48px",
        h3: "26px",
      },
      letterSpacing: {
        h2: "2px",
        h3: "5px",
      },
      backgroundImage: {
        "webdesign-mobile": "url(/images/home/mobile/image-web-design.jpg)",
        "webdesign-desktop":
          "url(/images/home/desktop/image-web-design-large.jpg)",
        "graphicdesing-mobile":
          "url(/images/home/mobile/image-graphic-design.jpg)",
        "graphicdesing-desktop":
          "url(/images/home/desktop/image-graphic-design.jpg)",
        "appdesign-mobile": "url(/images/home/tablet/image-app-design.jpg)",
        "appdesign-desktop": "url(/images/home/desktop/image-app-design.jpg)",
      },
    },
  },
  plugins: [],
};

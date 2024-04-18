import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      heading: [
        "3rem",
        {
          lineHeight: "110%",
          letterSpacing: "6%",
          fontWeight: "700",
        },
      ],
      subheading: [
        "1.5rem",
        {
          lineHeight: "120%",
          letterSpacing: "4%",
          fontWeight: "500",
        },
      ],
      paragraph: [
        "1rem",
        {
          lineHeight: "125%",
          letterSpacing: "2%",
          fontWeight: "300",
        },
      ],
      button: [
        "1rem",
        {
          lineHeight: "125%",
          letterSpacing: "2%",
          fontWeight: "500",
        },
      ],
      logo: [
        "1rem",
        {
          lineHeight: "90%",
          letterSpacing: "5.5%",
          fontWeight: "500",
        },
      ],
    },
    fontFamily: {
      larsseit: ["Larsseit"],
    },
    screens: {
      phone: "400px",
      tablet: "600px",
      tabletLarge: "950px",
      desktopSmall: "1100px",
      desktop: "1450px",
    },
    colors: {
      white: "#ffffff",
      black: "#2D2C33",
      brown: "#A77655",
      lightBrown: "#DDC3A0",
      khaki: "#A5996D",
      green: "#A6B2A9",
      link: "#0000EE",
    },
    dropShadow: {
      default: "0 4px 4px rgba(45, 44, 51, 0.25)",
    },
    extend: {},
  },
  plugins: [],
};
export default config;

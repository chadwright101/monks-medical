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
          letterSpacing: "0.18rem",
          fontWeight: "700",
        },
      ],
      subheading: [
        "1.5rem",
        {
          lineHeight: "120%",
          letterSpacing: "0.06rem",
          fontWeight: "500",
        },
      ],
      paragraph: [
        "1rem",
        {
          lineHeight: "125%",
          letterSpacing: "0.02rem",
          fontWeight: "300",
        },
      ],
      button: [
        "1rem",
        {
          lineHeight: "125%",
          letterSpacing: "0.02rem",
          fontWeight: "500",
        },
      ],
      logoLarge: [
        "1rem",
        {
          lineHeight: "80%",
          letterSpacing: "0.055rem",
          fontWeight: "500",
        },
      ],
      logoSmall: [
        "0.744rem",
        {
          lineHeight: "90%",
          letterSpacing: "0.04092rem",
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

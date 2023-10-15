import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
    // "./src/constants/content.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        branch: ["var(--font-branch)"],
        objectivity: ["var(--font-objectivity)"],
      },
      colors: {
        brand: {
          brown: {
            100: "#FDFCFB",
            200: "#F9F6F2",
            300: "#E2D7C5",
            400: "#BEA57D",
          },
          gray: {
            200: "#CCCCD8",
            400: "#8E8EA9",
            500: "#737383",
            600: "#32323B",
          },
        },
      },
      screens: {
        maxSm: { max: "767.98px" },
      },
      transitionProperty: {
        fadeIn: "transform, opacity",
      },
    },
  },
  corePlugins: {
    container: true,
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "16px",
          paddingRight: "16px",
          "@screen sm": {
            maxWidth: "640px",
            paddingLeft: "initial",
            paddingRight: "initial",
          },
          "@screen md": {
            maxWidth: "640px",
          },
          "@screen lg": {
            maxWidth: "640px",
          },
          "@screen xl": {
            maxWidth: "640px",
          },
        },
      });
    },
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/forms"),
    // require("preline/plugin"),
  ],
};
export default config;

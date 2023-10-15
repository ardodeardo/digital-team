import localFont from "next/font/local";

const branch = localFont({
  src: [
    {
      path: "../../public/fonts/Branch.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-branch",
});

const objectivity = localFont({
  src: [
    {
      path: "../../public/fonts/Objectivity-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Objectivity-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Objectivity-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-objectivity",
});

export { branch, objectivity };

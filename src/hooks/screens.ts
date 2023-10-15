import React, { useState, useEffect } from "react";

function useScreen() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const mobile: number = 767.98;
  const tabletSmall: number[] = [768, 1023.98];
  const tabletLarge: number[] = [1024, 1199.98];
  const desktop: number = 1200;
  const desktopLarge: number = 1600;

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  const sm = () => screenWidth <= mobile;

  const md = () =>
    screenWidth >= tabletSmall[0] && screenWidth <= tabletSmall[1];

  const lg = () =>
    screenWidth >= tabletLarge[0] && screenWidth <= tabletLarge[1];

  const xl = () => screenWidth >= desktop;

  const xxl = () => screenWidth >= desktopLarge;

  return [sm, md, lg, xl, xxl];
}

export default useScreen;

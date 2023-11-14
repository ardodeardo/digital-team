import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Globe, Sun, Moon } from "../Icon";

import useScreen from "@/hooks/screens";

function Header() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [didMount, setDidMount] = useState<boolean>(false);
  const [sm] = useScreen();

  useEffect(() => {
    setDidMount(true);
  }, []);

  const toggleTheme = () => {
    const swappedTheme = theme === "dark" ? "light" : "dark";

    setTheme(swappedTheme);
  };

  return (
    <header className="py-8 dark:bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center justify-center">
            <Globe
              className="text-black dark:text-[#C9C9C9]"
              width={sm() ? "20" : "24"}
              height={sm() ? "20" : "24"}
              fillColor="#000"
            ></Globe>
            <span className="font-objectivity text-[20px] md:text-[24px] font-bold dark:text-[#C9C9C9]">
              dev.team
            </span>
          </div>
          <div>
            <button
              className="flex items-center text-2xl w-6"
              onClick={() => toggleTheme()}
            >
              {didMount &&
                (theme === "dark" ? (
                  <Sun
                    width={sm() ? "20" : "24"}
                    height={sm() ? "20" : "24"}
                    className="text-[#FFE600]"
                  ></Sun>
                ) : (
                  <Moon
                    width={sm() ? "20" : "24"}
                    height={sm() ? "20" : "24"}
                  ></Moon>
                ))}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

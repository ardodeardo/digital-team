import React from "react";

import { Globe } from "../Icon";

import useScreen from "@/hooks/screens";

function Footer() {
  const [sm] = useScreen();

  return (
    <footer className="dark:bg-black">
      <div className="container mx-auto">
        <span className="inline-block w-full border border-b-black"></span>
        <div className="py-[64px] md:py-[84px]">
          <div className="flex gap-x-2 items-center">
            <Globe
              className="text-black dark:dark:text-[#C9C9C9]"
              width={sm() ? "20" : "24"}
              height={sm() ? "20" : "24"}
            ></Globe>
            <span className="font-objectivity text-[20px] md:text-[24px] font-bold dark:text-[#C9C9C9]">
              mytripology.digitalteam
            </span>
          </div>
          <p className="font-objectivity text-base leading-[24px] mt-8 dark:text-[#C9C9C9]">
            Copyright © 2023. mytripology. All Rights Reserved. Ruko L&apos;Agricola
            C/16, Jl. Raya Curug Sangereng. 3rd Floor. Tangerang. Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

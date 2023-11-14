import React from "react";
import Image from "next/image";

import useScreen from "@/hooks/screens";

interface ICard {
  title: string;
  image: string | boolean;
  shifted: boolean;
}

function WeDo() {
  const [sm] = useScreen();

  const cards: ICard[] = [
    {
      title: "What We Do",
      image: false,
      shifted: false,
    },
    {
      title: "Bussiness Development",
      image: "timo-wielink-Uz_9UwAsMgs-unsplash.jpg",
      shifted: true,
    },
    {
      title: "Creative & Design",
      image: "andras-vas-Bd7gNnWJBkU-unsplash.jpg",
      shifted: false,
    },
    {
      title: "Data & Analytics",
      image: "maximalfocus-HakTxidk36I-unsplash.jpg",
      shifted: true,
    },
    {
      title: "Web Development",
      image: "mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg",
      shifted: false,
    },
  ];

  const Card = ({ title, image, shifted }: ICard) => (
    <div
      className={`relative w-[240px] md:w-[300px] h-[320px] md:h-[400px] rounded-xl overflow-hidden ${
        image ? "shadow-xl" : ""
      } ${
        shifted ? "transform translate-y-[130px] md:translate-y-[160px]" : ""
      }`}
    >
      {image && (
        <div className="aspect-w-3 aspect-h-4">
          <Image
            alt={title}
            width={sm() ? 240 : 300}
            height={sm() ? 320 : 400}
            src={`/images/${image}`}
            className="w-full h-full object-cover rounded-xl"
          ></Image>
        </div>
      )}

      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="relative w-full h-full p-4 md:p-5 flex items-end">
          {image ? (
            <h3 className="font-objectivity text-[28px] md:text-[32px] font-bold leading-[36px] md:leading-[40px] text-[#F5F5F5]">
              {title}
            </h3>
          ) : (
            <h2 className="font-objectivity text-[64px] md:text-[84px] leading-[80px] md:leading-[100px] font-bold dark:text-[#C9C9C9]">
              {title}
            </h2>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-[64px] md:py-[100px] dark:bg-black overflow-hidden">
      <div className="container mx-auto overflow-x-auto">
        <div className="w-[504px] md:w-full py-4 md:py-0">
          <div className="grid grid-cols-2 gap-6 md:gap-10">
            {cards.map((content, index) => {
              return (
                <Card
                  key={content.title.concat(index.toString())}
                  {...content}
                ></Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeDo;

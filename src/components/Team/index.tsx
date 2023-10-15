import React from "react";
import Image from "next/image";

interface ITeam {
  name: string;
  position: string;
  image: string;
}

function Team() {
  const people: ITeam[] = [
    {
      name: "Deardo Dibrianto",
      position: "Front End Developer",
      image: "ardo.png",
    },
    {
      name: "Elvin Vinsky",
      position: "Digital Marketing",
      image: "elvin.png",
    },
    {
      name: "Iqbal Muharram",
      position: "Backend Developer",
      image: "iqbal.png",
    },
    {
      name: "Riza Pahlevi",
      position: "UI/UX Designer",
      image: "riza.png",
    },
    {
      name: "Wendy Sunanda",
      position: "Project Manager",
      image: "wendy.png",
    },
  ];

  const Card = ({ name, position, image }: ITeam) => (
    <div className="w-[150px] h-auto mx-auto">
      <Image
        alt={name}
        width={120}
        height={120}
        src={`/images/${image}`}
        className="rounded-full w-[120px] mx-auto"
      ></Image>
      <div className="text-center">
        <h3 className="inline-block font-objectivity text-base leading-[24px] font-bold mt-4 dark:text-[#C9C9C9]">
          {name}
        </h3>
        <h4 className="inline-block font-objectivity text-xs leading-[20px] font-medium  text-brand-gray-500 mt-0 dark:text-[#C9C9C9]">
          {position}
        </h4>
      </div>
    </div>
  );

  return (
    <section className="py-[64px] md:py-[100px] dark:bg-black overflow-hidden">
      <div className="container mx-auto">
        <h2 className="font-objectivity text-[36px] leading-[44px] font-bold dark:text-[#C9C9C9]">
          Our partners in crime
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[24px] md:gap-y-[28px] mt-10">
          {people.map((content, index) => {
            return (
              <Card
                key={content.name.concat(index.toString())}
                {...content}
              ></Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;

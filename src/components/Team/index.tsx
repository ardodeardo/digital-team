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
      name: "FE Developer",
      position: "Front End Developer",
      image: "square.jpg",
    },
    {
      name: "BE Developer",
      position: "Back End Developer",
      image: "square.jpg",
    },
    {
      name: "Designer",
      position: "UI/UX Designer",
      image: "square.jpg",
    },
    {
      name: "Data Analyst",
      position: "Data Analyst",
      image: "square.jpg",
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
          Meet the team
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

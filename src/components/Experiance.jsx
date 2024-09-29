import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 6,
      logo: spring,
      name: "Spring",
    },
    {
      id: 7,
      logo: springBoot,
      name: "Spring Boot",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 pt-9"
    >
      <div>
        <h1 className="text-5xl font-bold mb-5 text-center text-gray-800">Experience</h1>
        <p className="text-center text-xl mb-10 text-gray-600">
          I've more than 2 years of experience in the below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full md:w-[180px] md:h-[180px] shadow-lg p-4 hover:shadow-xl cursor-pointer hover:scale-105 duration-300 transition-transform"
              key={id}
            >
              <img src={logo} className="w-[100px] h-[100px] rounded-full mb-3" alt={name} />
              <div className="text-center text-xl font-semibold text-gray-800">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 pt-9"
    >
      <div>
        <h1 className="text-4xl font-bold mb-10 text-center">Portfolio</h1>
        <span className="block text-center underline font-semibold text-xl mb-8">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="bg-white border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex flex-col items-center p-6">
                <img
                  src={logo}
                  className="w-[120px] h-[120px] mb-4 rounded-full border-2"
                  alt={name}
                />
                <h2 className="text-xl font-semibold mb-3">{name}</h2>
                <p className="text-gray-600 text-center mb-4">
                  A brief description of the technology and its use cases.
                </p>
                <div className="flex justify-between w-full space-x-3">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                    Video
                  </button>
                  <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;

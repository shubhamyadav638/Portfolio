import React from "react";
import pic from "../../public/shubham.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-2xl md:text-3xl font-semibold">Welcome to My Portfolio!</span>
            <div className="flex space-x-1 text-3xl md:text-5xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-lg md:text-xl text-justify">
              Hi! My name is Shubham Vishwakarma. I am a full-stack web developer with skills in React.js, Node.js, MongoDB, Express.js, and more.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center text-xl md:text-2xl">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/shubham.yaduvanshi.7393" target="_blank" rel="noopener noreferrer">
                      <FaSquareFacebook className="text-3xl cursor-pointer hover:text-blue-600 transition duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shubham-yadav-170b28237/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-700 transition duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@shortcreator_07" target="_blank" rel="noopener noreferrer">
                      <IoLogoYoutube className="text-3xl cursor-pointer hover:text-red-600 transition duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/shubham638607" target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-3xl cursor-pointer hover:text-blue-500 transition duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center text-xl md:text-2xl">Currently Working On</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-3xl md:text-4xl hover:scale-110 duration-200 cursor-pointer" />
                  <SiExpress className="text-3xl md:text-4xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaReact className="text-3xl md:text-4xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaNodeJs className="text-3xl md:text-4xl hover:scale-110 duration-200 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] shadow-lg transition-transform duration-300 hover:scale-105"
              alt="Shubham Vishwakarma"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;

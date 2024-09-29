import React, { useState } from "react";
import pic from "../../public/profile.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-lg h-20">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center h-full">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img
              src={pic}
              className="h-14 w-14 rounded-full shadow-lg"
              alt="Profile"
            />
            <div className="text-left">
              <Link
                to="Home" 
                smooth={true}
                duration={500}
                offset={-70}
                className="font-semibold text-2xl cursor-pointer"
              >
                Shubham<span className="text-green-500"> Yadav</span>
              </Link>
              <p className="text-sm text-gray-600">Web Developer</p>
            </div>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer text-lg"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70} 
                    activeClass="active"
                    className="hover:text-green-500"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden cursor-pointer"
            >
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-white w-full">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70} 
                    activeClass="active"
                    className="hover:text-green-500"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

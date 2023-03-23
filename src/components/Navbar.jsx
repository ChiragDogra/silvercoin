import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[70px] z-10 bg-zinc-200 fixed drop-shadow-lg z-50">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <NavLink to="/">
          <div className="flex items-center hover:cursor-pointer">
            <img
              src={logo}
              width={160}
              height={160}
              className="laptop:ml-6 mob:ml-1"
            />
          </div>
        </NavLink>
        <div className="relative float-right ">
          <ul className="hidden md:flex m-9">
            <li className="transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer">
              <NavLink to="home" smooth={true} duration={500}>
                Home
              </NavLink>
            </li>
            <li className="transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer">
              <NavLink to="about" smooth={true} offset={-200} duration={500}>
                About us
              </NavLink>
            </li>
            <li className="transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer">
              <NavLink to="services" smooth={true} offset={-50} duration={500}>
                Sevices
              </NavLink>
            </li>
            <li className="transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer">
              <NavLink to="/" smooth={true} offset={-100} duration={500}>
                Blog
              </NavLink>
            </li>
            <li className="transition-all ease-out duration-300 hover:scale-105 hover: cursor-pointer">
              <NavLink
                to="pricing"
                smooth={true}
                offset={-50}
                duration={500}
                className="bg-indigo-700 transition-all ease-out duration-300 hover:scale-105 text-white p-2 pb-2.5 rounded-md"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About us
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="services"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Services
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="/"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Blog
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full bg-indigo-700  text-white p-2 pb-2.5 rounded-md m-2">
          <NavLink
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

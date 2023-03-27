import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => (nav == true ? setNav(!nav) : setNav(false));

  return (
    <div className="w-screen h-[70px]  bg-zinc-200 fixed drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <NavLink to="/" onClick={handleClose}>
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
              {/* <NavLink to="services" smooth={true} offset={-50} duration={500}> */}
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-black rounded bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black dark:hover:text-black dark:focus:text-black dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Services{" "}
                  <svg
                    class="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-black-700 dark:text-black-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-black-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black-400 dark:hover:text-black"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              {/* </NavLink> */}
            </li>
            <li className="transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer">
              <NavLink to="blog" smooth={true} offset={-100} duration={500}>
                Blog
              </NavLink>
            </li>
            <li className="transition-all ease-out duration-300 hover:scale-105 hover: cursor-pointer">
              <NavLink
                to="contact"
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
            to="blog"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Blogs
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full bg-indigo-700  text-black p-2 pb-2.5 rounded-md m-2">
          <NavLink
            onClick={handleClose}
            to="contact"
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

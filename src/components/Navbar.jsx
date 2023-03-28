import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [subNav, setSubNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClickSubnav = () => setSubNav(!subNav);

  const handleClose = () => {
    if(nav === true){
      setNav(!nav)
    } else{
      setNav(false)
    } 

    if(subNav === true){
      setSubNav(!nav)
    } else{
      setSubNav(false)
    } 
  };


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

            <li class="group  relative dropdown transition-all ease-out duration-300 hover:scale-110 text-black hover:text-black cursor-pointer text-base tracking-wide">
              <NavLink to="services" smooth={true} offset={-50} duration={500}>
                <a>Services</a>
                <div class="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul class="top-0 w-48 bg-white shadow mt-5 pl-2 py-8 rounded">
                    <li class="py-1">
                      <NavLink to="tax">
                        <a class="block text-black text-base  hover:text-blue-400 cursor-pointer transition-all ease-out duration-300 hover:scale-110">
                          Accounting/Taxation
                        </a>
                      </NavLink>
                    </li>
                    <li class="py-1">
                      <NavLink to="gst" smooth={true} duration={500}>
                        <a class="block text-black text-base  hover:text-blue-400 cursor-pointer transition-all ease-out duration-300 hover:scale-110">
                          GST
                        </a>
                      </NavLink>
                    </li>
                    <li class="py-1">
                      <NavLink to="markres" smooth={true} duration={500}>
                        <a class="block text-black text-base  hover:text-blue-400 cursor-pointer transition-all ease-out duration-300 hover:scale-110">
                          Market Research
                        </a>
                      </NavLink>
                    </li>
                    <li class="py-1">
                      <NavLink to="audit" smooth={true} duration={500}>
                        <a class="block text-black text-base  hover:text-blue-400 cursor-pointer transition-all ease-out duration-300 hover:scale-110">
                          Audit Assurance
                        </a>
                      </NavLink>
                    </li>
                    <li class="py-1">
                      <NavLink to="compreg" smooth={true} duration={500}>
                        <a class="block text-black text-base  hover:text-blue-400 cursor-pointer transition-all ease-out duration-300 hover:scale-110">
                          ROC services
                        </a>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </NavLink>
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

        <div className="w-full flex flex-row align-center space-x-14 items-center">
          <li className=" border-zinc-300 border-b-2  mr-8">
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
          <div className="md:hidden ml-8 pl-8" onClick={handleClickSubnav}>
              {!subNav ? (
                <ChevronDownIcon className="w-5" />
              ) : (
                <XIcon className="w-5" />
              )}

            </div>
        </div>

        <ul className={!subNav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink
              onClick={handleClose}
              to="tax"
              smooth={true}
              duration={500}
            >
              Accounting/Taxation
            </NavLink>
          </li>

          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink
              onClick={handleClose}
              to="gst"
              smooth={true}
              offset={-100}
              duration={500}
            >
              GST
            </NavLink>
          </li>

          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink
              onClick={handleClose}
              to="markres"
              smooth={true}
              offset={-100}
              duration={500}
            >
              Market Research
            </NavLink>
          </li>

          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink
              onClick={handleClose}
              to="audit"
              smooth={true}
              offset={-100}
              duration={500}
            >
              Audit Assurance
            </NavLink>
          </li>

          <li className="border-b-2 border-zinc-300 w-full">
            <NavLink
              onClick={handleClose}
              to="compreg"
              smooth={true}
              offset={-100}
              duration={500}
            >
              ROC services
            </NavLink>
          </li>
        </ul>





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
        <li className="border-b-2 border-zinc-300 w-full bg-indigo-700  text-white p-2 pb-2.5 rounded-md m-2 ">
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

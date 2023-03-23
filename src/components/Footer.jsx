import React from "react";
import logo from "../assets/WhiteLogo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-gray-300 py-y px-2">
      {/* <!-- Flex Container --> */}
      <div className="container flex flex-col-reverse justify-between px-3 py-2 mx-auto space-y-4 md:flex-row md:space-y-0">
        {/* <!-- Logo and social links container --> */}
        <div className="flex flex-col-reverse items-center justify-between space-y-2 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          <Link to="/">
            <img
              src={logo}
              width={160}
              height={160}
              className=" mb-1 transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer"
              alt=""
            />
          </Link>
          {/* <!-- Social Links Container --> */}
          <div className="flex justify-center space-x-4">
            {/* <!-- Link 1 --> */}

            <a
              href=" https://www.linkedin.com/company/isilvercoin/"
              target="_blank"
            >
              <p className="flex px-4 py-2 text-white">
                <FaLinkedinIn className="text-xl transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer" />
              </p>
            </a>

            <a
              href="  https://www.facebook.com/profile.php?id=100089017104431"
              target="_blank"
            >
              <p className="flex px-4 py-2 text-white">
                <FaFacebookF className="text-xl transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer" />
              </p>
            </a>
            {/* <!-- Link 4 --> */}
            <a href=" https://in.pinterest.com/isilvercoin/" target="_blank">
              <p className="flex px-4 py-2 text-white">
                <FaPinterest className="text-xl transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer" />
              </p>
            </a>
            {/* <!-- Link 5 --> */}
            <a href="https://www.instagram.com/isilvercoin/" target="_blank">
              <p className="flex px-4 py-2 text-white">
                <FaInstagram className="text-xl transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer" />
              </p>
            </a>
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div className="flex justify-around space-x-32 ">
          <div className="flex flex-col space-y-3 text-white m-5">
            <h2 className="font-bold">Our Contact</h2>

            <div className="transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer">
              Phone no:{" "}
              <a href="tel:+919958550222" className="text-indigo-300">
                +91 9958550222
              </a>
            </div>

            <div className="transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer">
              Mail id:{" "}
              <a href="mailto:Info@silvercoinsinc.com" className="text-indigo-300">
                Info@silvercoinsinc.com
              </a>
            </div>

            <div className="transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer">
              Address:{" "}
              <a href="https://www.google.com/maps/dir//No+-+704++tower+4+Malibu+Town,+Sector+47+Gurugram,+Haryana+122018/@28.4235658,77.0516262,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d2281e38c1c71:0x858958b1237b484!2m2!1d77.0484208!2d28.4247771" target="_blank" className="text-indigo-300 ">
                Office no. 704, Tower–4, Malibu Town, Sec-47, Gurgaon, Haryana
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col space-y-3 text-white my-5">
          <h2 className="font-bold">Our Contact</h2>
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div> */}
        </div>

        <div className="flex flex-col justify-between">
          <div className="hidden text-white md:block p-2">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
      <p className="align-middle text-center justify-items-center pb-5">
        Made with 💖 by{" "}
        <a
          href="https://chiragdogra.com"
          target="_blank"
          className="text-indigo-300"
        >
          Chirag Dogra
        </a>
      </p>
    </div>
  );
};

export default Footer;

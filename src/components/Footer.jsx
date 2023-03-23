import React from "react";
import logo from "../assets/WhiteLogo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-gray-300 py-y px-2">
      {/* <!-- Flex Container --> */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* <!-- Logo and social links container --> */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          {/* <!-- Social Links Container --> */}
          <div className="flex justify-center space-x-4">
            {/* <!-- Link 1 --> */}

            <a
              href=" https://www.linkedin.com/company/isilvercoin/"
              target="_blank"
            >
              <p className="flex px-4 py-2 text-white">
                <FaLinkedinIn />
              </p>
            </a>

            <a
              href="  https://www.facebook.com/profile.php?id=100089017104431"
              target="_blank"
            >
              <p className="flex px-4 py-2 text-white">
                <FaFacebookF />
              </p>
            </a>
            {/* <!-- Link 4 --> */}
            <a href=" https://in.pinterest.com/isilvercoin/" target="_blank">
              <p className="flex px-4 py-2 text-white">
                <FaPinterest/>
              </p>
            </a>
            {/* <!-- Link 5 --> */}
            <a href="https://www.instagram.com/isilvercoin/" target="_blank">
              <p className="flex px-4 py-2 text-white">
                <FaInstagram />
              </p>
            </a>
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div className="flex flex-col justify-between">
          {/* <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form> */}
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

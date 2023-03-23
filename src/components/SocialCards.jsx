import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

function SocialCards() {
  return (
    <div className="w-full  flex flex-col justify-items-center items-center">
      <div className="flex flex-col py-3 md:min-w-[660px] mx-1 justify-center bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl my-4">
        <div className="flex justify-between flex-wrap px-4 ">
          <a href="https://www.instagram.com/isilvercoin/" target="_blank">
            <p className="flex px-4 py-2 text-black">
              <FaInstagram className="text-3xl transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer" />
            </p>
          </a>

          <a
            href=" https://www.linkedin.com/company/isilvercoin/"
            target="_blank"
          >
            <p className="flex px-4 py-2 text-black">
              <FaLinkedinIn className="text-3xl transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer"  />
            </p>
          </a>

          <a
            href="  https://www.facebook.com/profile.php?id=100089017104431"
            target="_blank"
          >
            <p className="flex px-4 py-2 text-black">
              <FaFacebookF className="text-3xl transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer" />
            </p>
          </a>

          <a href=" https://in.pinterest.com/isilvercoin/" target="_blank">
          <p className="flex px-4 py-2 text-black">
              <FaPinterest className="text-3xl transition-all ease-out duration-300 hover:scale-110 hover: cursor-pointer" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialCards;

import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../assets/images/landing/MoneyMotivation.svg";
import SocialCards from "../components/SocialCards";

function HomePage() {
  return (
    <div
      name="home"
      className="w-full min-h-screen lg:min-h-screen bg-zinc-200 flex flex-col justify-items-center items-center"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col pl-6 justify-center justify-items-center items-center text-center md: justify-start md:text-left md:align-items-left md:items-start w-full px-2 py-8 ">
          <h1 className="py-3 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold ">
            Silvercoins
          </h1>
          <p className="text-3xl sm:text-5xl">
            Your partner for financial success
          </p>
          <button className="py-2 w-[20%] sm:w-[30%] md:w-[40%] my-8 text-sm sm:text-2xl">
            <NavLink to="contact">Join Us</NavLink>
          </button>
        </div>
        <div className="flex justify-center ">
          <img
            className=" w-4/5 sm:w-1/2 md:w-5/6 lg:w-7/8"
            src={Image}
            alt="/"
          />
        </div>
      </div>
      <SocialCards />
    </div>
  );
}

export default HomePage;

import React from "react";
import creditCard from "../assets/creditCard.png";
import NameEmail from "../components/NameEmail";
import SocialCards from "../components/SocialCards";

function HomePage() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-items-center items-center"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col ml-6 justify-center md:items-start w-full px-2 py-8 ">
          <h1 className="py-3 md:text-9xl text-6xl font-bold z-20">
            Silvercoin
          </h1>
          <p className="text-3xl sm:text-5xl">
            Your partner for financial success
          </p>
          {/* <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button> */}
        </div>
        <div className="flex justify-center ">
          <img className="w-3/4" src={creditCard} alt="/" />
        </div>
      </div>
      <SocialCards/>
    </div>
  );
}

export default HomePage;

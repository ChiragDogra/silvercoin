import React from "react";
import phoneImg from "../assets/PhoneImg.png";

function TextImg() {
  return (
    <div className="w-full py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto my-5 grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold py-2">
            Welcome to Silvercoins
          </h1>
          <p className="text-xl sm:4-xl md:5xl ">
            Silvercoin is a financial advisory firm that helps individuals and
            businesses make smart investment decisions. They offer a wide range
            of services, including investment management, retirement planning,
            tax planning, and estate planning.
          </p>
          <button className="bg-black text-indigo-300 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
        <img className="w-[600px] mx-auto my-4 " src={phoneImg} alt="/" />
      </div>
    </div>
  );
}

export default TextImg;

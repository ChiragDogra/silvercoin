import React from "react";

function TextImg({Heading, text1, text2, text3, text4, Image, Button}) {
  return (
    <div className="w-full py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto pt-6 grid md:grid-cols-2">
        <div className="flex flex-col justify-center m-1 sm:p-5 lg:p-2">
          <h1 className={`${Heading !== ""?"md:text-7xl sm:text-5xl text-4xl font-bold py-2 text-center sm:text-left" : "invisible"}`}>
          {Heading}
          </h1>
          <p className="text-xl sm:4-xl md:5xl text-center sm:text-left mt-3">
            {text1}
          </p>
          <p className={`${text2 !== ""? "text-xl sm:4-xl md:5xl text-center sm:text-left mt-3" :"invisible"}`}>
            {text2}
          </p>
          <p className={`${text3 !== ""? "text-xl sm:4-xl md:5xl text-center sm:text-left mt-3" :"invisible"}`}>
            {text3}
          </p>
          <p className={`${text4 !== ""? "text-xl sm:4-xl md:5xl text-center sm:text-left mt-3" :"invisible"}`}>
            {text4}
          </p>
          <button  className = {`${Button? "bg-black text-indigo-300 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3": "invisible"}`}   >
            Get Started
          </button>
        </div>
        <img className="w-[600px] mx-auto my-4 " src={Image} alt="/" />
      </div>
    </div>
  );
}

export default TextImg;

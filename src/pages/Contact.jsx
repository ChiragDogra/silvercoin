import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import Axios from "axios"

function Contact() {


  const url = "http://localhost:4000/submit";
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    phone: ""
  })

const handleClick=(e)=>{
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
}

// const sendData = async (e)=>{
//   e.preventDefault();
//   const {fName, lName, email, address, city, state, phone} = data;


//   const res = await fetch(url, {
//       method: "POST",
//       headers:{
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         fName, lName, email, address, city, state, phone
//       })
//   })

//   const data = await res.json();

//   console.log(data);
// }

const submit =(e)=>{
  e.preventDefault();
  console.log(data);
  const strData = JSON.stringify({
    fName: data.fName,
    lName: data.lName,
    email: data.email, 
    address: data.address,
    city: data.city,
    state: data.state,
    phone: data.phone,
  });
  Axios.post(url, strData).then(res=>{
    console.log(res.data);
  }).catch((err)=>{
    console.log("oops something went wrong");
  })
}

  return (
    <div className="flex-row  align-middle items-center w-full p-10 ">
      <h1 className="text-5xl text-center font-bold mt-14">Contact us</h1>
      <div className="flex flex-row align-center text-center items-center justify-center my-10 bg-green " onSubmit={(e)=>submit(e)}>
        <form class="w-full max-w-md m-1 p-4 sm:m-8 sm:p-8 md:m-10 "  method="POST">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="fName"
              >
                First Name
              </label>
              <input onChange={(e)=>handleClick(e)} value={data.fName}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="fName"
                type="text"
                placeholder="Ishaan"
              />
              {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="lName"
              >
                Last Name
              </label>
              <input onChange={(e)=>handleClick(e)} value={data.lName}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lName"
                type="text"
                placeholder="Awasthi"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input onChange={(e)=>handleClick(e)} value={data.email}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="abc@xyzmail.com"
              />
              {/* <p class="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p> */}
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 ">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="phone"
              >
                Your Phone Number
              </label>
              <input onChange={(e)=>handleClick(e)} value={data.phone}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="phone"
                placeholder="+91 9958550222"
              />
              {/* <p class="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p> */}
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 ">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="address"
              >
                Your address
              </label>
              <input onChange={(e)=>handleClick(e)} value={data.address}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="address"
                type="address"
                placeholder="house no. 120, sec-420"
              />
              {/* <p class="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p> */}
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="city "
              >
                City
              </label>
              <input onChange={(e)=>handleClick(e)} value={data.city}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="city"
                type="text"
                placeholder="Gurgaon ..."
              />
              {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="state"
              >
                State
              </label>
              <input onChange={(e)=>handleClick(e)} value={data.state}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="state"
                type="text"
                placeholder="Haryana"
              />
            </div>
          </div>

          <button className='p-2 w-[20%] sm:w-[20%] md:w-[30%]  text-sm sm:text-2xl font-bold' >Send</button>
        </form>
      </div>





      <div className="max-w-[1240px] mx-auto pt-6 grid md:grid-cols-2 ">
        <div className=" flex flex-col">
          <div className="flex flex-col text-center align-middle  justify-center my-2 sm:p-5 lg:p-2">
            <h1 className="text-2xl flex align-center text-center font-bold my-1">
              {" "}
              <IoLocationOutline className="m-1" />
              Headquaters
            </h1>
            <a
              href="https://www.google.com/maps/dir//No+-+704++tower+4+Malibu+Town,+Sector+47+Gurugram,+Haryana+122018/@28.4235658,77.0516262,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d2281e38c1c71:0x858958b1237b484!2m2!1d77.0484208!2d28.4247771"
              target="_blank"
              className="text-indigo-800 "
            >
              <p className="text-xl sm:3-xl md:4xl text-center sm:text-left m-3 transition-all ease-out duration-300 hover:scale-110 ">
                Office no. 704, Tower - 4, Malibu Town, Sec-47, Gurgaon
                Haryana-122001
              </p>
            </a>
          </div>
          <div className="flex flex-col text-center align-middle  justify-center my-2 sm:p-5 lg:p-2">
            <h1 className="text-2xl flex align-center text-center font-bold my-1">
              {" "}
              <HiOutlineMail className="m-1" />
              Email
            </h1>
            <a
              href="mailto:Info@silvercoinsinc.com"
              className="text-indigo-800 "
            >
              <p className="text-xl sm:3-xl md:4xl text-center sm:text-left m-3 transition-all ease-out duration-300 hover:scale-110 ">
                Info@SilvercoinsInc.com
              </p>
            </a>
          </div>
          <div className="flex flex-col text-center align-middle  justify-center my-2 sm:p-5 lg:p-2">
            <h1 className="text-2xl flex align-center text-center font-bold my-1">
              {" "}
              <FiPhoneCall className="m-1" />
              Phone
            </h1>
            <a href="tel:+919958550222" className="text-indigo-800 ">
              <p className="text-xl sm:3-xl md:4xl text-center sm:text-left m-3 transition-all ease-out duration-300 hover:scale-110 ">
                +91 9958550222
              </p>
            </a>
          </div>
        </div>

        <div className="rounded m-6 flex align-center text-center justify-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.817038029701!2d77.0484208!3d28.4247771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18788dbf2f37%3A0x4c6326ae831f03f!2sSilvercoinsinc!5e0!3m2!1sen!2sin!4v1679678788413!5m2!1sen!2sin"
            width="300"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;

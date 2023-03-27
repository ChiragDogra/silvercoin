import React from 'react'
import SocialCards from '../../components/SocialCards'
import img from '../../assets/images/serve/gst/img.png'

const para1 = {
    text1: "Goods and Services Tax (GST) is an indirect tax levied on the supply of goods and services. It is a comprehensive, multi-stage, destination-based tax that is levied on every value addition. GST has replaced multiple taxes like VAT, Service Tax, Excise Duty, etc., and has become the most significant tax reform in India since its independence. ",
    text2: "GST compliance requires businesses to register for GST file ,GST returns regularly, issue GST invoices to customers, and pay applicable taxes timely. The process of filing GST returns involves collecting data from various sources such as sales invoices, purchase invoices, and other documents related to business transactions. This data needs to be compiled in a standard format before it can be submitted through the government portal or the use of GST filing software. If you need any help in Gst services, you can connect us no",

}

function GST() {
  return (
    <div className="w-full pt-12 ">
      <div className="flex-row  align-middle items-center flex flex-col justify-center w-full p-5 sm:p-8 md:p-10 min-h-screen">
        <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold pt-3 text-center  sm:text-left ">
        GST - Goods and Service Tax
        </h1>


        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text1}</p>

        <img src={img} alt="" />        

        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text2}</p> 


      </div>

      <SocialCards />
    </div>
  )
}

export default GST
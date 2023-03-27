import React from 'react'
import SocialCards from '../../components/SocialCards'
import img1 from '../../assets/images/serve/registration/img1.png'
import img2 from '../../assets/images/serve/registration/img2.png'
import img3 from '../../assets/images/serve/registration/img3.png'


const para1 =  {
    text1: "Starting a business can be a daunting task, especially if you are unfamiliar with the process of company registration. This blog will provide an overview of the different steps involved in registering a business and the services available to help you through the process. We will discuss topics such as company formation, company setup, company incorporation, and company registration services. We will also look at how to register a business in different countries and what documents are required for each type of registration. Finally, we will explore some of the advantages of registering your business and how it can help your business succeed. ",
   

}


function CompReg() {
  return (
    <div className="w-full pt-12 ">
      <div className="flex-row  align-middle items-center flex flex-col justify-center w-full p-5 sm:p-8 md:p-10 min-h-screen">
      <div className="w-full flex flex-col align-middle, items-center">
          <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold pt-3 text-center  sm:text-left ">
            Company Registration
          </h1>
        </div>


        <p className=" sm:text-xl md:text-2xl  text-left my-8">{para1.text1}</p>

        <img src={img1} alt="" /> 

        <p className=" sm:text-xl md:text-2xl  text-left my-8">Company Formation: What is a Limited Liability Company? A limited liability company (LLC) is a business structure that limits the legal personal and financial responsibility of the members of an LLC as compared to corporations, partnerships, and sole proprietorships. The name "limited liability company" does not appear in the United States or Japan's Companies Act but it does in other jurisdictions, most notably Delaware, which has become one of the most popular states for this type of business registration.</p>

        <p className=" sm:text-xl md:text-2xl  text-left my-8">The term "limited liability" refers to an exemption from certain types of legal responsibility while also limiting losses to shareholders who are not personally liable. A corporation is a legal entity that may be owned by one or more people and only those owning the corporation are legally responsible for its obligations. The shareholders authorise the company to use its property as collateral for loans, enabling it to borrow money on favourable terms. Shareholders are also not liable for any debts incurred by the corporation as long as they do not personally guarantee them with their credit</p>

        <img src={img2} alt="" /> 

        <p className=" sm:text-xl md:text-2xl  text-left my-8">The term "limited" refers to an exemption from certain types of legal responsibility while limiting losses to shareholders who are not personally liable. The term "limited liability company" refers to a business entity that has been specially formed by the state and which is designed to be organised and operated primarily as a private operating foundation, with members having limited personal liability for the debts of the business entity. </p>


      
        <p className=" sm:text-xl md:text-2xl  text-left my-8">The term "limited liability company" also includes a business entity that has been formed outside of the state, but which is formed under the laws of the state based on standards set by the state.</p>
        
        <img src={img3} alt="" /> 

        <p className=" sm:text-xl md:text-2xl  text-left my-8">The term "partnership" refers to an unincorporated association that is not classified as either a corporation or a limited liability company. Partnerships are formed with and operated under agreements in which each partner has certain rights and duties, including those relating to their respective share in its profits or losses, capital contributions, and control over management decisions. In some states, partnerships are considered to be closely akin to corporations for tax</p>

      </div>

      <SocialCards/>
    </div>
  )
}

export default CompReg
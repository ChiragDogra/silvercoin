import React from 'react'
import SocialCards from '../../components/SocialCards'

const para1 = {
    text1: "Filing Income Tax Returns (ITR) is an essential part of financial planning and compliance in India. It is a legal requirement for every citizen who falls under the taxable bracket. However, many people fail to understand the importance of filing ITR and end up facing legal and financial consequences. In this blog, we will discuss the benefits of filing ITR and why it is essential for financial planning and compliance.",
    text2: "Filing ITR is an essential part of financial planning as it helps you keep track of your income, expenses, and investments. It provides a clear picture of your financial health and helps you make informed decisions about your investments, savings, and expenses. Filing ITR also helps you in obtaining loans and credit cards, as it serves as a proof of your income and financial stability",
    text3: "Failing to file ITR can result in legal consequences, such as penalties, fines, and even imprisonment. It can also lead to a notice from the Income Tax Department, which can be a time-consuming and stressful process. Filing ITR on time ensures that you comply with legal requirements and avoid any legal consequences.",
    text4: "Filing ITR allows you to claim refunds and deductions that you are entitled to. Refunds can be claimed for excess tax paid, while deductions can be claimed for expenses such as investments, donations, and medical expenses. Filing ITR on time ensures that you claim these benefits and reduce your tax liability.",
    text5: "Filing ITR establishes financial credibility and trustworthiness. It is a requirement for various financial transactions, such as obtaining loans, visas, and credit cards. Filing ITR on time shows that you are responsible and trustworthy, which can help you in various financial dealings. ",
    text6: "Filing ITR is not just a legal requirement, but also a responsibility towards nation building. It helps the government in collecting taxes, which are used for various developmental activities such as infrastructure, education, and healthcare. Filing ITR on time ensures that you contribute to the nation's growth and development.",
    text7: "In conclusion, filing ITR is essential for financial planning and compliance in India. It helps in financial planning, avoids legal consequences, claims refunds and deductions, establishes financial credibility, and contributes to nation building. Therefore, it is essential to file ITR on time and comply with the legal requirements."

}

function blog2() {
  return (
    <div className="w-full pt-12 ">
      <div className="flex-row  align-middle items-center w-full p-5 sm:p-8 md:p-10 min-h-screen">
        <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold pt-3 text-center  sm:text-left ">
        Understanding the benefits:
        </h1>
        <h2 className="md:text-4xl sm:text-7xl text-2xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">
        Why Filing ITR is Essential for Financial Planning and Compliance
        </h2>


        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text1}</p>


        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">1. Helps in Financial Planning</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text2}</p>
        
        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">2. Avoids Legal Consequences</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text3}</p>


        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">3. Claim Refunds and Deductions</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text4}</p>


        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">4. Establishes Financial Credibility</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text5}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">5. Helps in Nation Building </h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text6}</p>

        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text7}</p> 


      </div>

      <SocialCards/>
    </div>
  )
}

export default blog2
import React from 'react'
import SocialCards from '../../components/SocialCards'
import img1 from '../../assets/images/serve/audit/img1.png'
import img2 from '../../assets/images/serve/audit/img2.png'
import img3 from '../../assets/images/serve/audit/img3.png'

const para1 = {
    text1: "Audit assurance is the process of examining an organisation's financial statements, internal controls, and compliance procedures to provide an opinion on their accuracy, completeness, and reliability. In this blog post, we will discuss various aspects of audit assurance. ",
    text2: "An audit is an independent examination of an organisation's financial statements and internal controls by a qualified auditor. The purpose of an audit is to provide assurance that the financial statements are free from material misstatements and fairly represent the financial position of the organisation. The audit process involves gathering audit evidence, testing internal controls, and assessing the risk of material misstatement. ",
    text3: " Assurance refers to the level of confidence that can be placed in the information provided by an organisation. Audit assurance provides stakeholders with a level of confidence that the financial statements of an organisation are reliable and free from material misstatement. ",
    text4: "Financial statements are a set of reports that provide information on an organisation's financial performance and position. The three main financial statements are the income statement, balance sheet, and statement of cash flows. The audit assurance process involves examining these statements to ensure that they are accurate, complete, and reliable.",
    text5: " An audit report is a document that provides an auditor's opinion on an organisation's financial statements. The report outlines the scope of the audit, the auditor's opinion on the financial statements, and any issues or concerns identified during the audit process.   ",
    text6: "Internal audit is a process of evaluating an organisation's internal controls and procedures to provide assurance that they are effective in mitigating risks and ensuring compliance with laws and regulations. Internal audits are conducted by internal auditors who are employed by the organisation.",
    text7: "External audit is an independent review of an organisation's financial statements and internal controls by a qualified auditor who is not employed by the organisation. The purpose of an external audit is to provide assurance to stakeholders that the financial statements are reliable and free from material",
    text8: "A performance audit is a review of an organisation's efficiency and effectiveness in achieving its objectives. The audit process involves assessing the organisation's performance against established standards and identifying areas for improvement.",
    text9: "Audit procedures are the steps taken by the auditor to gather audit evidence and assess the risk of material misstatement. Audit procedures can include testing internal controls, reviewing documentation, and analysing financial data.",
    text10: "Audit planning is the process of developing a strategy and approach for conducting an audit. Audit planning involves assessing the risks of material misstatement, determining the scope Regenerate response"
}

function Audit() {
  return (
    <div className="w-full pt-12 ">
      <div className="flex-row  align-middle items-center w-full p-5 sm:p-8 md:p-10 min-h-screen">
        <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold pt-3 text-center  sm:text-left ">
            Audit Assurance
        </h1>


        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text1}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Audit</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text2}</p>
        <img src={img1} alt="" /> 

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Assurance</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text3}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Financial Statements</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text4}</p>
        <img src={img2} alt="" /> 


        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Audit Report</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text5}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Internal Audit</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text6}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">External Audit</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text7}</p>
        <img src={img3} alt="" /> 
        
        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Performance Audit</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text8}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Audit Procedures</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text9}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Audit Planning</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text10}</p>



      </div>

      <SocialCards/>
    </div>
  )
}

export default Audit
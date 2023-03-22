import React from "react";
import ImgTextT from "../components/ImgTextT";
import TextImgT from "../components/TextImgT";
import AccountImg from "../assets/images/services/AccountantFlatline.svg";
import MarketRes from "../assets/images/services/MarketAnalysis.svg";
import Audit from "../assets/images/services/AccountantTwoColor.svg";
import FileFolder from "../assets/images/services/FileAndFolder.svg";
import SocialCards from "../components/SocialCards";
import NameEmail from "../components/NameEmail";


const sec1 = {
  Heading: "Accounting and Taxation",
  Text: " Accounting involves recording and analyzing financial transactions to ensure compliance with regulations and financial reporting standards. Taxation requires a thorough understanding of tax laws and regulations to ensure proper tax planning and compliance. silvercoin have unique accounting and tax considerations, such as managing digital assets and complying with regulations specific to the industry.",
  Img: AccountImg,
};
const sec2 = {
  Heading: "Market Research",
  Text: " Market research for a fintech company involves collecting and analyzing data about the financial services industry, market trends, and customer preferences to identify opportunities for growth and product development. It can help the company understand the needs and behaviors of its target audience, as well as the competitive landscape.",
  Img: MarketRes,
};
const sec3 = {
  Heading: "Audit Assurance",
  Text: "Audit assurance for a fintech company involves an independent examination of the company's financial records, controls, and processes to provide assurance to stakeholders that the financial statements are accurate and reliable. This can help identify any weaknesses or errors in the financial reporting process, improving the credibility of the company and its financial reporting.",
  Img: Audit,
};
const sec4 = {
  Heading: "Roc Services",
  Text: "ROC (Registrar of Companies) is a government body responsible for registering and regulating companies in India. As a fintech company, it is important to comply with ROC regulations and maintain accurate records to avoid penalties and legal issues.",
  Img: FileFolder,
};

function Services() {
  return (
    <div className="w-full">

      <div className="flex align-center text-center justify-center ">
        <h1 className="md:text-10xl sm:text-7xl text-6xl font-bold pt-3 text-center my-20 sm:text-left">
          Our Services
        </h1>
      </div>

      <div className="bg-white px-4 sm:px-2 md:px-0 ">
        <ImgTextT Heading = {sec1.Heading} text1 = {sec1.Text} text2 = {""} text3 = {""} text4 = {""} Image = {sec1.Img} Button = {false} />
      </div>
      <div className="bg-gray-200 px-4 sm:px-2 md:px-0">
        <TextImgT Heading = {sec2.Heading} text1 = {sec2.Text} text2 = {""} text3 = {""} text4 = {""} Image = {sec2.Img} Button = {false} />
      </div>
      <div className="bg-white px-4 sm:px-2 md:px-0 ">
        <ImgTextT Heading = {sec3.Heading} text1 = {sec3.Text} text2 = {""} text3 = {""} text4 = {""} Image = {sec3.Img} Button = {false} />
      </div>
      <div className="bg-gray-200 px-4 sm:px-2 md:px-0">
        <TextImgT Heading = {sec4.Heading} text1 = {sec4.Text} text2 = {""} text3 = {""} text4 = {""} Image = {sec4.Img} Button = {false} />
      </div>

      <NameEmail/>
    </div>
  );
}

export default Services;

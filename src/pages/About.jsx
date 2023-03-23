import React from "react";
import TextImg from "../components/TextImg";
import Paragraph from "../components/Paragraph";
import ImgTextT from "../components/ImgTextT";
import Cards from "../components/Cards";
import SocialCards from "../components/SocialCards";
import Consult from "../assets/images/about/ConsultingFlatline.svg";
import Designer from "../assets/images/about/DesignerFlatline.svg";

const text1 = {
  Heading: "Welcome to Silvercoins",
  Text: "Silvercoin Financial Advisory is a financial institution offering the best financial services to all those citizens of India who are eligible to pay taxes or involved in any financial activities.",
  Img: Consult
};

const para1 = {
  text1: "We are committed to helping and making our customers identify the important aspect of finance and why filing your taxes can be beneficial for both the individual and the country.",
  text2: "We are serving each and every individual, firm, and Co. Who is eligible to pay tax under Indian law, also providing our Clients other financial advisory services like tax planning, property tax management, investments, insurance, etc.",
  text3: "By giving our clients the best financial services and maintaining their data privacy, we strive hard to provide our customers with value-added services that will help them achieve their goals."
}

const text2 = {
  Heading: "",
  Text:"Silvercoin is a financial advisory firm that helps individuals and businesses make smart investment decisions. They offer a wide range of services, including investment management, retirement planning, tax planning, and estate planning",
  Img: Designer,
}

const para2 = {
  text1: "One of the key things that sets Silvercoin apart from other financial advisory firms is their approach to investing. They believe in taking a long-term, diversified approach, rather than trying to time the market or make quick profits. This means that they invest in a variety of assets, including stocks, bonds, and real estate, and they do so in a way that is tailored to each client's individual needs and goals.",
  text2: "In addition to their investment management services, Silvercoin also offers retirement planning, tax planning, and estate planning services. These services are designed to help clients plan for the future, minimise their tax liability, and ensure that their assets are passed on to their loved ones in the most efficient way possible.",
  text3: "If you would like to learn more about Silvercoin and the services they offer, you can visit their website or contact them directly."

}

const About = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-100">
      <TextImg
        Heading={text1.Heading}
        text1={text1.Text}
        text2={para1.text1}
        text3={para1.text2}
        text4={para1.text3}
        Image={text1.Img}
        Button={false}
      />
      </div>
      
      <div className="flex align-center text-center justify-center mt-5">
        <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold pt-3 text-center sm:text-left">
          Who we are?
        </h1>
      </div>
      <ImgTextT Heading = {""} text1 = {text2.Text} text2 = {""} text3 = {""} text4 = {""} Image = {text2.Img} Button = {false} />

      <div className="w-full px-4 py-5 sm:px-14 mb-10 bg-gray-100">
        <Paragraph text={para2.text1} className="my-5"/>
        <Paragraph text={para2.text2} className="my-5"/>
        <Paragraph text={para2.text3} className="my-5"/>
      </div>

      <div className="flex align-center text-center justify-center">
        <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold pt-3 text-center sm:text-left">
          What our clients say about us?
        </h1>
      </div>

      <div className="w-full">
        <Cards/>
      </div>      

      <SocialCards/>
      
    </div>
  );
};

export default About;

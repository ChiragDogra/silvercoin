import React from 'react'
import SocialCards from '../../components/SocialCards'
import img1 from '../../assets/images/serve/market/img1.png'
import img2 from '../../assets/images/serve/market/img2.png'
import img3 from '../../assets/images/serve/market/img3.png'


const para1 = {
    text1 : "Market research is the process of gathering information about consumers, competitors, and the overall market to help businesses make informed decisions. It involves a variety of techniques such as surveys, focus groups, and data analysis to gather and interpret information. In this blog, we'll explore some of the key concepts related to market research, including consumer behavior, demographics, competitor analysis, survey research, focus groups, data analysis, market trends, target audience, brand awareness, market segmentation, market share, customer satisfaction, qualitative research, quantitative research, marketing strategy, sales forecasting, product development, advertising effectiveness, market size, and industry analysis.",
    text2 : "Consumer behaviour is an important area of market research because it helps businesses understand what motivates their customers to buy. Demographics, or characteristics like age, gender, income, and education, are also important because they can influence purchasing decisions. Competitor analysis is another key aspect of market research because it allows businesses to understand their competition and how they can differentiate themselves in the market.",
    text3 : "Data analysis is an important part of market research because it allows businesses to make sense of the information they gather. Market trends, or patterns of behavior or preferences over time, are also important to track because they can inform business decisions. Understanding the target audience is essential for businesses because it allows them to tailor their products and services to meet the needs and preferences of their customers.",
    text4 : "Market share is a measure of a business's sales compared to the total sales in the market. Customer satisfaction is important to measure because it can influence whether customers will return to a business or recommend it to others. Qualitative research involves gathering non-numerical data such as opinions or perceptions, while quantitative research involves gathering numerical data such as sales figures or survey responses ",
    text5 : "Marketing strategy is the overall plan that businesses use to promote their products and services. Sales forecasting involves predicting how much a business is likely to sell in the future. Product development is the process of creating or improving products to meet customer needs. Advertising effectiveness is a measure of how well advertising campaigns are working. ",
    text6 : "Market size is the total value or volume of sales in a particular market. Industry analysis involves looking at the broader trends and forces that are shaping the market as a whole.",
    text7 : "In conclusion, market research is a critical tool for businesses to understand their customers and competition, and make informed decisions about their products and services. By gathering and analyzing data on consumer behavior, demographics, competitor analysis, survey research, focus groups, data analysis, market trends, target audience, brand awareness, market segmentation, market share, customer satisfaction, qualitative research, quantitative research, marketing strategy, sales forecasting, product development, advertising effectiveness, market size, and industry analysis, businesses can stay ahead of the curve and make decisions that will help them succeed in the marketplace."
}


function MarketRes() {
  return (
    <div className="w-full pt-12 ">
      <div className="flex-row  align-middle items-center flex flex-col justify-center w-full p-5 sm:p-8 md:p-10 min-h-screen">
      <div className="w-full flex flex-col align-middle, items-center">
          <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold pt-3 text-center  sm:text-left ">
            Market Research
          </h1>
        </div>


        <p className=" sm:text-xl md:text-2xl  text-left my-8">{para1.text1}</p>

        <img src={img1} alt="" /> 

        <p className=" sm:text-xl md:text-2xl  text-left my-8">{para1.text2}</p>

        <p className=" sm:text-xl md:text-2xl  text-left my-8">{para1.text3}</p>

        <p className=" sm:text-xl md:text-2xl  text-left my-8">{para1.text4}</p>

        <img src={img2} alt="" /> 

        <p className=" sm:text-xl md:text-2xl  text-left my-8">{para1.text5}</p>

        <p className=" sm:text-xl md:text-2xl  text-left my-8">{para1.text6}</p>

        <img src={img3} alt="" /> 
        
        <p className=" sm:text-xl md:text-2xl  text-left my-8">{para1.text7}</p>
        

      </div>

      <SocialCards/>
    </div>
  )
}

export default MarketRes
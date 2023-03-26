import React from 'react'
import SocialCards from '../../components/SocialCards'
import img1 from '../../assets/images/serve/tax/img1.png'
import img2 from '../../assets/images/serve/tax/img2.png'
import img3 from '../../assets/images/serve/tax/img3.png'
import img4 from '../../assets/images/serve/tax/img4.png'



const para1 = {
    text1: "Taxes are an integral part of any country's economic system. Direct taxes are taxes that are levied on individuals and organisations based on their income or profits. In this blog post, we will discuss various aspects of direct taxes.",
    text2: " Income tax is a direct tax that is levied on the income of individuals and organisations. It is calculated based on the income earned by an individual or an organisation in a given year. The income tax is usually levied on a progressive tax system where the tax rate increases as the income of the individual or the organisation increases. Taxable income can include wages, salaries, rental income, interest income, and other sources of income. Tax deductions and credits are available to reduce the amount of income tax payable.",
    text3: "Corporate tax is a direct tax that is levied on the profits earned by a company. It is calculated based on the net income of the company. Corporate tax rates can vary based on the country where the company is based and the profits earned. The tax rates can also be influenced by factors such as the size of the company and the sector it operates in.",
    text4: "Wealth tax is a direct tax that is levied on the net wealth of an individual or a company. It is calculated based on the value of the assets owned by the individual or the company. Wealth tax rates can vary based on the country where the individual or the company is based. The tax rates can also be influenced by factors such as the value of the assets and the type of assets owned.",
    text5: "Capital gains tax is a direct tax that is levied on the profit earned from the sale of an asset such as stocks, real estate, or other capital assets. It is calculated based on the difference between the sale price and the purchase price of the asset. Capital gains tax rates can vary based on the country where the asset is sold and the length of time the asset was held.",
    text6: "Property tax is a direct tax that is levied on the value of the property owned by an individual or a company. It is calculated based on the value of the property and is usually paid annually. Property tax rates can vary based on the country where the property is located and the value of the property.",
    text7: "Estate tax and inheritance tax are direct taxes that are levied on the transfer of property from a deceased individual to their heirs. Estate tax is calculated based on the value of the estate, while inheritance tax is calculated based on the value of the property received by the heirs. These taxes can vary based on the country where the property is located and the value of the property.",
    text8: "Gift tax is a direct tax that is levied on the value of gifts given by an individual to another person. It is calculated based on the value of the gift and can vary based on the country where the individual is located.",
    text9: "Taxation of dividends and interest is a direct tax that is levied on the income earned from dividends and interest. It is calculated based on the income earned and can vary based on the country where the individual or the company is based.",
    text10: "Tax credits, deductions, and exemptions are available to reduce the amount of tax payable. Tax credits reduce the amount of tax payable"
}

function DirectTax() {
  return (
    <div className="w-full pt-12 ">
      <div className="flex-row  align-middle items-center w-full p-5 sm:p-8 md:p-10 min-h-screen">
        <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold pt-3 text-center  sm:text-left ">
            Direct Tax
        </h1>


        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text1}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Income Tax</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text2}</p>
        <img src={img1} alt="" /> 

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Corporate Tax</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text3}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Wealth Tax</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text4}</p>


        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Capital Gains Tax</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text5}</p>
        <img src={img2} alt="" /> 

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Property Tax</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text6}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Estate Tax And Inharitance Tax</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text7}</p>
        <img src={img3} alt="" /> 
        
        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Gift Tax</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text8}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Taxation of Dividents and Interest</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text9}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:mt-10 md:mb-5 sm:text-left ">Tax Credits, Deductions and Exemptions</h1>
        <p className=" sm:text-xl md:text-2xl  text-left my-3">{para1.text10}</p>
        <img src={img4} alt="" /> 




      </div>

      <SocialCards/>
    </div>
  )
}

export default DirectTax
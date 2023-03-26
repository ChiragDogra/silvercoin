import React from "react";
import Paragraph from "../../components/Paragraph";
import SocialCards from "../../components/SocialCards";

const para1 = {
  text1: "Accounting is the process of recording, classifying and summarizing financial transaction's also one of the oldest professions in the world--accountants have been keeping records since ancient times. ",
  text2: "Accounting helps you understand how your business or organization makes money, where it spends money and whether it's making enough profit to survive. As an individual, accounting can help you track your personal finances so that you can plan for college tuition payments or retirement savings without getting caught off guard by unexpected expenses like medical bills or car repairs.",
  text3: "Accounting is the process of recording, classifying and summarizing financial information. Accounting principles are the rules that govern how this information is to be recorded and reported. There are two basic types of accounts: assets and liabilities. Assets are things like cash in your bank account or cars you have purchased; liabilities are debts owed by an individual or business (such as credit card balances).",
  text4: "Accounting records can be maintained using either single-entry book keeping or double-entry book keeping systems. Single-entry systems only record one side of each transaction (either income or expense), while double-entry systems record sides so that they balance out at the end of each period--the end result being that all transactions equal zero!",
  text5: "There are a variety of software and technology tools that can help you manage your accounts. These include: ",

  text6: "Accounting can be a challenge for many people. The financial world is complex and ever-changing, and it's important to stay up to date on the latest trends in accounting practices.",
  text7: "Accountants face challenges in managing complexity and avoiding mistakes as well as staying up to date with new developments in their field. ",
  text8: "Accounting is a useful tool for organizing and analyzing data. It can help you review trends, spot opportunities and make better decisions.",
  text9: "Accounting is a field that has been around for centuries, but it has also seen many changes over time. In today's world, there are many new technologies and innovations that could impact how we do accounting in the future.",
  text10: "Accounting technology is changing rapidly as artificial intelligence (AI) and automation become more prevalent in business operations. AI has already begun to make an impact on accounting by automating routine tasks such as data entry and analysis, which frees accountants' time for higher value activities such as strategic planning or communicating with clients. Blockchain technology may also play a role in how we do our books in the future; blockchain allows transactions to be recorded permanently without being able to be changed or deleted once they've been made publically available online--this means that if someone tries tampering with any information stored on this type of digital ledger system then everyone will know immediately because they'll see discrepancies between what was originally posted versus what's currently being displayed!. ",
  text11: "Global standards will continue evolving too: international organizations like IFAC (International Federation Of Accountants) have been working hard since their inception back during World War II when they first formed out of necessity due to wartime conditions where communications between countries had become difficult due to conflict between nations.",
  text12: "Accounting is one of the most important skills you can learn in life. It's not just a job, it's a way of thinking that will help you make better decisions and plan for the future. Accountants are responsible for keeping track of all the money flowing through an organization or company, which means they're able to see patterns in how people spend their money. This allows them to predict trends before they happen makes accountants very valuable! ",


}


function blog1() {
  return (
    <div className="w-full pt-12 ">
      <div className="flex-row  align-middle items-center w-full p-5 sm:p-8 md:p-10 min-h-screen">
        <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold pt-3 text-center  sm:text-left ">
          Balancing the books:
        </h1>
        <h2 className="md:text-4xl sm:text-7xl text-2xl font-bold pt-3 text-center md:my-10 sm:text-left ">
          How Accounts Serve as the Backbone of Your Personal and Professional
          Life
        </h2>


        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text1}</p>
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text2}</p>


        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:my-10 sm:text-left ">The Basics of Accounting</h1>
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text3}</p>
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text4}</p>
        
        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:my-10 sm:text-left ">Accounting in your personal life</h1>
          <li className=" sm:text-xl md:text-3xl md:5xl text-left leading-none">Managing budgets</li>
          <li className=" sm:text-xl md:text-3xl md:5xl text-left leading-none">Tracking expenses</li>
          <li className=" sm:text-xl md:text-3xl md:5xl text-left leading-none">Creating financial goals</li>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:my-10 sm:text-left ">Software and technology for accounting</h1>

        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text5}</p>
          <li className=" sm:text-xl md:text-3xl md:5xl text-left leading-none">Cloud-based solutions, which allow you to access your financial information from anywhere.</li>
          <li className=" sm:text-xl md:text-3xl md:5xl text-left leading-none">Automation tools that make it easier for you to perform tasks such as billing and invoicing automatically. </li>
          <li className=" sm:text-xl md:text-3xl md:5xl text-left leading-none"> Financial dashboards, which provide real-time insights into key performance indicators (KPIs) so that you can make better business decisions in real time. </li>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:my-10 sm:text-left ">Challenges of acounting</h1>
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text6}</p>
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text7}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:my-10 sm:text-left ">Tips for effective accounting</h1>
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text8}</p>
          <li className=" sm:text-xl md:text-3xl md:5xl text-left ">Organize financial data: You should have one place where all of your financial information is stored so that it's easy to find when needed. This will allow you to keep track of everything from bills paid to investments made, which will help provide an overview of your current situation as well as any future goals or plans that need attention.</li>
          <li className=" sm:text-xl md:text-3xl md:5xl text-left ">Analyze trends: Once organized, accounting software allows users to track spending habits over time so they can see how much money they spend on certain items each month (or year). This information can be used when planning budgets or managing personal finances more effectively by helping identify areas where cuts could be made without affecting quality of life too much; for example, cutting back on eating out would save some cash but also mean fewer opportunities for socializing with friends--which may not be worth it! </li>


        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:my-10 sm:text-left ">The Future of accounting</h1>
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text9}</p>
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text10}</p>
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text11}</p>

        <h1 className="md:text-3xl sm:text-6xl text-xl font-bold pt-3 text-center md:my-10 sm:text-left ">Conclusion</h1>
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">{para1.text12}</p>  
        <p className=" sm:text-xl md:text-3xl md:5xl text-left my-3">college classes on accounting before applying for jobs at companies where they work with numbers every day (like banks). You'll also need strong math skills so that when someone asks "What does this number mean?", you have an answer ready!</p>  


      </div>

      <SocialCards/>
    </div>
  );
}

export default blog1;

import React from 'react'
import NameEmail from '../components/NameEmail'
import TextImg from '../components/TextImg'
import PhoneImg from '../assets/PhoneImg.svg'


const text1 = {
  Heading : "Welcome to Silvercoins",
  Text : "Silvercoin is a financial advisory firm that helps individuals and businesses make smart investment decisions. They offer a wide range of services, including investment management, retirement planning, tax planning, and estate planning.",
  Img : PhoneImg

}

function Home() {
  return (
    <div>
        <TextImg Heading = {text1.Heading} text1 = {text1.Text} text2 = {""} text3 = {""} text4 = {""}  Image={text1.Img} Button ={false} />
        <NameEmail/>
    </div>
  )
}

export default Home
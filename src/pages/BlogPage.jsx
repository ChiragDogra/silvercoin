import React from 'react'
import SocialCards from '../components/SocialCards'
import { NavLink } from "react-router-dom";
import img1 from "../assets/images/blogs/img1.jpg"
import img2 from "../assets/images/blogs/Thingking.svg"
import img3 from "../assets/images/blogs/Thingking.svg"


function BlogPage() {
  return (
    <div className="w-full pt-12 ">
      <div className="flex flex-col items-center justify-center w-full p-5 sm:p-8 md:p-10 lg:min-h-screen ">
        <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold pt-3 text-center  ">
            Blogs
        </h1>

        <div class="container w-full px-4 flex-grow w-full py-4 sm:py-16 mx-auto px-0">
      <div class="mx-auto w-full md:w-4/5 px-4">
        <div class="container my-8 flex flex-col items-center justify-center">
          
          <div
            id="scrollContainer"
            class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8 scrollbar w-screen max-w-[1100px]"
          >



            <div
              class="flex-none w-3/4 md:w-4/6 lg:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray-100 my-4"
            >
              <NavLink to="blog1" >
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg object-cover h-54 w-96 "
                    src={img1}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2 ">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                        Balancing the books
                    </h3>
                  </div>
                  <div class="text-lg">
                    <p class="">
                    Accounting is the process of recording, classifying and summarizing financial transaction's also one of the oldest professions in the 
                    </p>
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Read more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>


            





            <div
              class="flex-none w-3/4 md:w-4/6 lg:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray-100 my-4"
            >
              <NavLink to="blog2" >
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg object-cover h-60 w-96 "
                    src={img2}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2 ">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                        Understanding the benefits
                    </h3>
                  </div>
                  <div class="text-lg">
                    <p class="">
                    Filing Income Tax Returns (ITR) is an essential part of financial planning and compliance in India. It is a legal 
                    </p>
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Read more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>


            

            <div
              class="flex-none w-3/4 md:w-4/6 lg:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray-100 my-4"
            >
              <NavLink to="blog3" >
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg object-cover h-60 w-96 "
                    src={img3}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2 ">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                        Breaking Down Barriers 
                    </h3>
                  </div>
                  <div class="text-lg">
                    <p class="">
                    How Startups Can Thrive in India
                    </p>
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Read more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div
              class="flex-none w-3/4 md:w-4/6 lg:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray-100 my-4"
            >
              <NavLink to="blog4" >
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg object-cover h-60 w-96 "
                    src={img4}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2 ">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                          Driving Startup Growth in India
                    </h3>
                  </div>
                  <div class="text-lg">
                    <p class="">
                  Strategies and Best Practices for Success 
                    </p>
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Read more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>


            <div
              class="flex-none w-3/4 md:w-4/6 lg:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray-100 my-4"
            >
              <NavLink to="blog5" >
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg object-cover h-60 w-96 "
                    src={img5}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2 ">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                     Beyond Crunching Numbers 
                    </h3>
                  </div>
                  <div class="text-lg">
                    <p class="">
                 The Critical Role of Financial Advisory in Your Financial Success
                    </p>
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Read more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>


            
          </div>
        </div>
        
      </div>
    </div>         


      </div>

      <SocialCards/>
    </div>
  )
}

export default BlogPage
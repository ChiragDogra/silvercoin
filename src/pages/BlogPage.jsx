import React from 'react'
import SocialCards from '../components/SocialCards'

function BlogPage() {
  return (
    <div className="w-full pt-12 ">
      <div className="flex flex-col items-center justify-center w-full p-5 sm:p-8 md:p-10 lg:min-h-screen ">
        <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold pt-3 text-center  ">
            Blogs
        </h1>

        <div class="container w-full px-4 flex-grow w-full py-4 sm:py-16 mx-auto px-0">
      <div class="mx-auto w-full md:w-4/5 px-4">
        <div class="container my-8">
          
          <div
            id="scrollContainer"
            class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
          >



            <div
              class="flex-none w-3/4 md:w-4/6 lg:w-1/3 mr-8 md:pb-4 border rounded-lg bg-gray-100 my-4"
            >
              <a href="#" class="space-y-4 ">
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                    alt=""
                  />
                </div>
                <div class="px-4 py-2 ">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      Some title goes here
                    </h3>
                  </div>
                  <div class="text-lg">
                    <p class="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad recusandae, consequatur corrupti vel quisquam id itaque
                      nam
                    </p>
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Read more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </a>
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
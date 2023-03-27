import React from 'react'
import { NavLink } from 'react-router-dom'

function NameEmail() {
  return (
    <div className='w-full bg-black py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='text-center sm:text-left md:text-5xl sm:text-4xl text-3xl font-bold py-2'>
            Want a financially secured future?
          </h1>
          <p className='text-center sm:text-left md:text-3xl sm:text-2xl text-xl py-2'>Let our experts assist you to manage your finance wisely.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full md:ml-5'>
            <button className='bg-indigo-700 text-white transi transition-all ease-out duration-300 rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 md:ml-10 md:mt-10'>
            <NavLink to="/contact">
              Connect with us
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NameEmail
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const Register = () => {

  return (
    <>
      <div className='h-screen bg-gray-300 bg-bg-login flex items-center justify-center sm:px-1'>
        <div className='w-[25%] h-auto bg-white flex flex-col  rounded-xl shadow-2xl xll:w-[40%] xll:right-0 xll:top-0 lg:w-[50%] sm:w-[100%] sm:flex sm:flex-col sm:right-0 sm:top-0'>
          <span className='w-full h-20 bg-blue-950 rounded-b-full flex items-center justify-center text-white text-4xl font-lobster'>
            Welcome
          </span>
          <div className='flex flex-row justify-evenly mt-8'>
            <span className='relative group'>
              <Link to='/login' className='text-blue-950' >Login</Link>
            </span>
            <span className='relative group'>
              <Link to='/register' className='text-blue-950 border-b-2  border-gray-500' >Registration</Link>
            </span>
          </div>
          <hr className="w-full bg-gray-200 h-[0.5] border" />
          <div className='flex flex-col items-center mt-8'>
            <li className='text-blue-900 text-sm hover:text-yellow-400 w-[70%]'>
              <input type="text" className='border-b-2  mb-2  w-full hover:border-yellow-400' placeholder='Phone number' />
            </li>
            <li className='text-blue-900 text-sm hover:text-yellow-400 w-[70%]'>
              <input type="text" className='border-b-2 mb-2 w-full form-control hover:border-yellow-400' placeholder='Password' />
            </li>
            <label className="flex justify-center items-center mb-4 w-[70%] mt-2">
              <input type="checkbox" className="mr-2" />
              I accept Terms of Use
            </label>
            <button className='whitespace-nowrap  border py-1 px-36 rounded-xl bg-gray-200 shadow-sm shadow-gray-500 xl:px-28 lg:px-24 sm:px-24'>Register Now</button>
            <p className='text-blue-900 text-sm mt-4 text-center'><span className='text-orange-600'>-5% </span>on everything for registered users<br />Get a <span className='text-orange-600'>discount cupon</span> every month</p>
          </div>
          <div className='flex justify-end pb-2 mr-2'>
            <div className='w-10 h-10 bg-white shadow-sm shadow-gray-600 rounded-full flex items-center justify-center cursor-pointer'>
              <Link to='/' ><Icon icon="ph:x" className='text-xl' /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

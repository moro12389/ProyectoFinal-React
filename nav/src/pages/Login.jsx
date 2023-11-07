import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Login = () => {


  return (
    <>
      <div className='h-screen bg-gray-300 bg-bg-login flex items-center justify-center sm:px-1'>
        <div className='w-[25%] flex flex-col h-auto bg-white   rounded-xl shadow-2xl xll:w-[40%] xll:right-0 xll:top-0 lg:w-[50%] sm:w-[100%] sm:flex sm:flex-col sm:right-0 sm:top-0'>
          <span className='w-full h-20 bg-blue-950 rounded-b-full flex items-center justify-center text-white text-4xl font-lobster'>
            Welcome
          </span>
          <div className='flex flex-row justify-evenly mt-8'>
            <span className='relative group'>
              <Link to='/login' className='text-blue-950 border-b-2 border-gray-500' >Login</Link>
            </span>
            <span className='relative group'>
              <Link to='/register' className='text-blue-950' >Registration</Link>
            </span>
          </div>
          <hr className="w-full bg-gray-200 h-[0.5] border" />
          <div className='flex flex-col items-center mt-8'>
            <li className='text-blue-900 text-sm hover:text-yellow-400 w-[70%]'>
              <input type="text" className='border-b-2 focus:outline-none mb-2 w-full hover:border-yellow-400' placeholder='Phone number' />
            </li>
            <li className='text-blue-900 text-sm hover:text-yellow-400 w-[70%]'>
              <input type="text" className='border-b-2  mb-2 w-full hover:border-yellow-400' placeholder='Password' />
            </li>
            <button className='border py-1 px-36 rounded-xl bg-gray-200 shadow-sm shadow-gray-500 mt-4 xll:px-44 xl:px-36 lg:px-28'>Enter</button>
          </div>
          <div className='flex justify-end pb-2 mr-2'>
            <div className='w-10 h-10 bg-white shadow-sm shadow-gray-600 rounded-full flex items-center justify-center cursor-pointer' >
              <Link to='/' ><Icon icon="ph:x" className='text-xl' /></Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Login;
import React from 'react'
import { Icon } from '@iconify/react';


const AboutText = () => {
  return (
    <>
      <div className='flex flex-col w-[30%] h-max font-roboto xll:w-[40%] xl:w-full lgg:w-[100%]'>
        <p className='bg-blue-950 text-white px-4 py-2 rounded-r-xl text-lg lg:text-base lgg:text-sm lgg:px-2 sm:text-base sm:rounded-xl'>"Mr.Chef is street food with Odessa hospitality. We have been making our guests happy since 2015.
          Hope with pleasure they will cook you the most delicious and fast, and most importantly fresh food! Delight you with a great assortment of not only bombastic shawarma,
          but also delicious pastries, a variety of pizzas, khachapuri and other oriental dishes. We have delicious homemade drinks and coffee. A charge of positivity and pleasure is
          prodived for you."</p>
        <p className='text-orange-400 p-4 text-lg xl:px-4 lg:px-2 lgg:p-2 lgg:text-sm sm:px-4 sm:text-base'>Follow the new on our social networks not to miss interesting events, it's always fun and delicious with us :) </p>
        <div className='flex flex-row pl-2 sm:justify-center lgg:pl-0'>
          <div className=''>
            <Icon icon="devicon:facebook" className='mx-2' width={25} />
          </div>
          <div>
            <Icon icon="skill-icons:instagram" width={25} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutText
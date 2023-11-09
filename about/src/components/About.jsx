import React from 'react'
import Carrusel from './Carrusel'
import AboutText from './AboutText';

const About = () => {

  const images = [
    '/img/carrusel.png',
    '/img/carrusel2.png',
    '/img/carrusel3.png',
  ];

  return (
    <>
      <div className=' w-full h-max-screen'>
        <h3 className='text-center text-5xl font-lobster text-blue-950 mt-4 sm:text-3xl'>About Us</h3>
        <div className='flex flex-row justify-center w-full mt-8 mb-16 xl:px-2 sm:flex-col'>
          <Carrusel images={images} />
          <AboutText />
        </div>
      </div>
    </>
  )
}

export default About
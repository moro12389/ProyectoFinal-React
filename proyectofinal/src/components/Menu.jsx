import React from 'react';
import { Link } from 'react-router-dom';
import iconsconfeti from "../assests/icons-confeti.png";
import iconshawarma from "../assests/icons-shawarma1.png";
import iconspancho from "../assests/icons-pancho.png";
import iconspizza from "../assests/icons-pizza2.png";
import iconskhachapuri from "../assests/icons-khachapuri.png";
import iconscoctel from "../assests/icons-coctel1.png";

const Menu = () => {
  return (

    <>
      <div className="text-center text-6xl sm:text-2xl p-4 sm:p-1">
      Dur Menu
      </div>
    
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-4 sm:gap-1 m-4 mt-12">
              
        <Link className="bg-[url('assests/condimentos4.jpeg')] bg-no-repeat bg-cover h-80 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/new' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-4xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={iconsconfeti} alt=""/> 
            New
          </div> 
        </Link>

        <Link className="bg-[url('assests/shawarma1.jpeg')] bg-no-repeat bg-cover h-80 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/new' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-4xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={iconshawarma} alt=""/> 
            New
          </div> 
        </Link>

        <Link className="bg-[url('assests/panchos4.jpeg')] bg-no-repeat bg-cover h-80 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/new' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-4xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={iconspancho} alt=""/> 
            New
          </div> 
        </Link>

        <Link className="bg-[url('assests/pizza2.jpg')] bg-no-repeat bg-cover h-80 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/new' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-4xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={iconspizza} alt=""/> 
            New
          </div> 
        </Link>
        
        <Link className="bg-[url('assests/khachapuri.jpg')] bg-no-repeat bg-cover h-80 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/new' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-4xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={iconskhachapuri} alt=""/> 
            New
          </div> 
        </Link>

        <Link className="bg-[url('assests/bebidas.jpeg')] bg-no-repeat bg-cover h-80 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/new' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-4xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={iconscoctel} alt=""/> 
            New
          </div> 
        </Link>

        
      </div>
    </>        
  );
};

export default Menu;
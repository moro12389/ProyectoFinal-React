import React from 'react';
import { Link } from 'react-router-dom';
import iconsconfeti from "/img/menu/icons-confeti.png";
import iconshawarma from "/img/menu/icons-shawarma1.png";
import iconspancho from "/img/menu/icons-pancho.png";
import iconspizza from "/img/menu/icons-pizza2.png";
import iconskhachapuri from "/img/menu/icons-khachapuri.png";
import iconscoctel from "/img/menu/icons-coctel1.png";

const Menu = () => {
  return (

    <>
      <div className="text-center text-4xl sm:text-2xl p-4 sm:p-1">
      Dur Menu
      </div>
    
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:gap-1 m-3 mt-8">
              
        <Link className="bg-[url('img/menu/condimentos4.jpeg')] bg-no-repeat bg-cover h-60 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/submenu' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-2xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={iconsconfeti} alt=""/> 
            New
          </div> 
        </Link>

        <Link className="bg-[url('img/menu/shawarma1.jpeg')] bg-no-repeat bg-cover h-60 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/submenu' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-2xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={iconshawarma} alt=""/> 
            Shawarma
          </div> 
        </Link>

        <Link className="bg-[url('img/menu/panchos4.jpeg')] bg-no-repeat bg-cover h-60 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/submenu' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-3xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={iconspancho} alt=""/> 
            Street Food
          </div> 
        </Link>

        <Link className="bg-[url('img/menu/pizza2.jpg')] bg-no-repeat bg-cover h-60 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/submenu' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-2xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-20 sm:10 p-1 ml-10 sm:ml-4" src={iconspizza} alt=""/> 
            Pizza
          </div> 
        </Link>
        
        <Link className="bg-[url('img/menu/khachapuri.jpg')] bg-no-repeat bg-cover h-60 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/submenu' >
          <div className="w-20 sm:w-20 h-20 sm:h-20 pt-1 tracking-widest text-2xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-20 sm:10 p-1 ml-10 sm:ml-4" src={iconskhachapuri} alt=""/> 
            East
          </div> 
        </Link>

        <Link className="bg-[url('img/menu/bebidas.jpeg')] bg-no-repeat bg-cover h-60 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/submenu' >
          <div className="w-20 sm:w-20 h-20 sm:h-20 pt-1 tracking-widest text-2xl sm:text-2xl text-center text-white">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-20 sm:10 p-1 ml-10 sm:ml-4" src={iconscoctel} alt=""/> 
            Drinks
          </div> 
        </Link>

        
      </div>
    </>        
  );
};

export default Menu;
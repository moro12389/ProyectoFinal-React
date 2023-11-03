import React from "react";
import {Link} from "react-router-dom";
import iconsconfeti from "../assests/icons-confeti.png";
import iconshawarma from "../assests/icons-shawarma1.png";
import iconspancho from "../assests/icons-pancho.png";
import iconspizza from "../assests/icons-pizza2.png";
import iconskhachapuri from "../assests/icons-khachapuri.png";
import iconscoctel from "../assests/icons-coctel1.png";
//import imgcondimentos from "../assests/condimentos4.jpeg";
//import imgshawarma from "../assests/shawarma1.jpeg";
//import imgpancho from "../assests/panchos4.jpeg";
//import imgpizza from "../assests/pizza2.jpg";
//import imgKhachapuri from "../assests/Khachapuri.jpg";
//import imgbebida from "../assests/bebidas.jpeg";


const Menu = ()=> {
    return(
        <>
            <div className="text-center text-4xl p-6">
             Dur Menu
            </div>
       
            <div className="flex flex-wrap w-full justify-center" >
                
                <Link className="bg-[url('assests/condimentos4.jpeg')] w-64 h-40 p-4 m-2 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/new' >
                  <div className="w-20 h-20 pt-1 tracking-widest text-center text-white">
                    <img className="bg-white border-solid border-black border-2 rounded-full w-10 h-10 p-1 ml-4" src={iconsconfeti} alt=""/> 
                      New
                  </div> 
                </Link>

                <Link className="bg-[url('assests/shawarma1.jpeg')] w-64 h-40 p-4 m-2 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/shawarma' >
                  <div className="w-20 h-20 pt-1 tracking-widest text-center text-white">
                     <img className="bg-white border-solid border-black border-2 rounded-full w-10 h-10 p-1 ml-4" src={iconshawarma} alt=""/>
                      Shawarma
                  </div> 
                </Link>

                <Link className="bg-[url('assests/panchos4.jpeg')] w-64 h-40 p-4 m-2 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/streetfood' >
                  <div className="w-20 h-20 pt-1 tracking-widest text-center text-white">
                     <img className="bg-white border-solid border-black border-2 rounded-full w-10 h-10 p-1 ml-4" src={iconspancho} alt=""/>
                      Street Food
                  </div> 
                </Link>

                <Link className="bg-[url('assests/pizza2.jpg')] w-64 h-40 p-4 m-2 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/pizza' >
                  <div className="w-20 h-20 pt-1 tracking-widest text-center text-white">
                     <img className="bg-white border-solid border-black border-2 rounded-full w-10 h-10 p-1 ml-4" src={iconspizza} alt=""/>
                      Pizza
                  </div> 
                </Link>

                <Link className="bg-[url('assests/khachapuri.jpg')] w-64 h-40 p-4 m-2 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/east' >
                  <div className="w-20 h-20 pt-1 tracking-widest text-center text-white">
                     <img className="bg-white border-solid border-black border-2 rounded-full w-10 h-10 p-1 ml-4" src={iconskhachapuri} alt=""/>
                      East
                  </div> 
                </Link>

                <Link className="bg-[url('assests/bebidas.jpeg')] w-64 h-40 p-4 m-2 flex items-center justify-center rounded-md hover:scale-105 transition duration-500" to='/drinks' >
                  <div className="w-20 h-20 pt-1 tracking-widest text-center text-white">
                     <img className="bg-white border-solid border-black border-2 rounded-full w-10 h-10 p-1 ml-4" src={iconscoctel} alt=""/>
                      Drinks
                  </div> 
                </Link>
                
                

            </div>
        </>    
       
    );
};
export default Menu;




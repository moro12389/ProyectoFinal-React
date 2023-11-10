import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import iconsconfeti from "/img/menu/icons-confeti.png";
import iconshawarma from "/img/menu/icons-shawarma1.png";
import iconspancho from "/img/menu/icons-pancho.png";
import iconspizza from "/img/menu/icons-pizza2.png";
import iconskhachapuri from "/img/menu/icons-khachapuri.png";
import iconscoctel from "/img/menu/icons-coctel1.png";

const Menu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
     fetch('Json/Data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('no se conecto');
            }
            return  response.json();
        })
        .then(data => {
            setData(data["VIVIANA"]["categoryProduct"]);
        }).catch(error => console.error('Error no se pudo obtener:', error))},[])


  return (

    <>
      <div className="text-center text-4xl sm:text-2xl p-4 sm:p-1">
      Dur Menu
      </div>
    
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:gap-1 m-3 mt-8">
              
     {data.map((key)=>(<Link key={key.id} className={`bg-[url("${key.image}")] bg-no-repeat bg-cover h-60 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500`} to='/submenu' >
          <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-2xl sm:text-2xl text-center text-whit">
            <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={iconsconfeti} alt=""/> 
            {key.categoryName}
          </div> 
        </Link>
        ))}
        
      </div>
    </>        
  );
};

export {Menu};
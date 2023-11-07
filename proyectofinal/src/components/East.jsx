import React, { useState} from "react";
//import {motion} from "framer-motion";
import imgshawarma from "../assests/shawarma1.jpeg";
import bolsitacompra from "../assests/icons-bolsitacompra.png";


const East = () => {
 const [botonClick, setBotonClick] = useState(false);
 const handleBotonClick = () => {
 setBotonClick(true);
 setTimeout(() => {
 setBotonClick(false);
 }, 1000);

  const img = document.getElementById('imageId');
    if (img) {
      img.style.transform = 'translate(50vw, -50vh)';
    }
}

  return (
        <>
           <div className="text-center text-4xl p-4">
             East
           </div>  
           
           <div className="grid grid-cols-4 gap-4 m-4 pt-6">
             
             <div className="relative justify-center w-full h-60 mb-16 bg-gray-800 rounded-xl text-white text-center">
                 <div className="justify-center w-full h-40 mt-4 bg-gray-800 rounded-xl text-white text-center">
                     <span className="text-2xl">Mini</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="">Ingredientes: pollo, verduras,<br/> 
                     especias,habas</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="text-2xl">450g</span>
                 </div>
                 <div className=" absolute top-0 right-0 w-full p-2 bg-gray-800 rounded-xl text-white text-center hover:opacity-0">
                     <img id="imageId" className={`w-40 h-40 rounded-full -mt-16 ml-8 ${botonClick ? 'transform transition-transform duration-700' : ''}`}  src={imgshawarma} alt=""/>
                     <p className="mt-2 text-sm text-gray-400">East</p>
                     <p className="text-2xl">Crazy Cheese</p>
                     <p className="text-2xl pt-2" >$3,95</p>
                 </div>
                 <button className={`py-2 px-4 mt-10 inline-flex items-center font-sans text-xm text-black bg-white rounded-lg border-2 border-black transition duration-300 ${botonClick ? 'bg-orange-700' : 'hover:bg-yellow-400 '}`}
                   onClick={handleBotonClick} >
                     <img src={bolsitacompra} alt="" className="flex items-center p-1"/> 
                     <span>Add To Cart</span> 
                 </button>
             </div>

             <div className="relative justify-center w-full h-60 mb-16 bg-gray-800 rounded-xl text-white text-center">
                 <div className="justify-center w-full h-40 mt-4 bg-gray-800 rounded-xl text-white text-center">
                     <span className="text-2xl">Mini</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="">Ingredientes: pollo, verduras,<br/> 
                     especias,habas</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="text-2xl">450g</span>
                 </div>
                 <div className=" absolute top-0 right-0 w-full p-2 bg-gray-800 rounded-xl text-white text-center hover:opacity-0">
                     <img id="imageId" className={`w-40 h-40 rounded-full -mt-16 ml-8 ${botonClick ? 'transform transition-transform duration-700' : ''}`}  src={imgshawarma} alt=""/>
                     <p className="mt-2 text-sm text-gray-400">East</p>
                     <p className="text-2xl">Crazy Cheese</p>
                     <p className="text-2xl pt-2" >$3,95</p>
                 </div>
                 <button className={`py-2 px-4 mt-10 inline-flex items-center font-sans text-xm text-black bg-white rounded-lg border-2 border-black transition duration-300 ${botonClick ? 'bg-orange-700' : 'hover:bg-yellow-400 '}`}
                   onClick={handleBotonClick} >
                     <img src={bolsitacompra} alt="" className="flex items-center p-1"/> 
                     <span>Add To Cart</span> 
                 </button>
             </div>

             <div className="relative justify-center w-full h-60 mb-16 bg-gray-800 rounded-xl text-white text-center">
                 <div className="justify-center w-full h-40 mt-4 bg-gray-800 rounded-xl text-white text-center">
                     <span className="text-2xl">Mini</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="">Ingredientes: pollo, verduras,<br/> 
                     especias,habas</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="text-2xl">450g</span>
                 </div>
                 <div className=" absolute top-0 right-0 w-full p-2 bg-gray-800 rounded-xl text-white text-center hover:opacity-0">
                     <img id="imageId" className={`w-40 h-40 rounded-full -mt-16 ml-8 ${botonClick ? 'transform transition-transform duration-700' : ''}`}  src={imgshawarma} alt=""/>
                     <p className="mt-2 text-sm text-gray-400">East</p>
                     <p className="text-2xl">Crazy Cheese</p>
                     <p className="text-2xl pt-2" >$3,95</p>
                 </div>
                 <button className={`py-2 px-4 mt-10 inline-flex items-center font-sans text-xm text-black bg-white rounded-lg border-2 border-black transition duration-300 ${botonClick ? 'bg-orange-700' : 'hover:bg-yellow-400 '}`}
                   onClick={handleBotonClick} >
                     <img src={bolsitacompra} alt="" className="flex items-center p-1"/> 
                     <span>Add To Cart</span> 
                 </button>
             </div>

             <div className="relative justify-center w-full h-60 mb-16 bg-gray-800 rounded-xl text-white text-center">
                 <div className="justify-center w-full h-40 mt-4 bg-gray-800 rounded-xl text-white text-center">
                     <span className="text-2xl">Mini</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="">Ingredientes: pollo, verduras,<br/> 
                     especias,habas</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="text-2xl">450g</span>
                 </div>
                 <div className=" absolute top-0 right-0 w-full p-2 bg-gray-800 rounded-xl text-white text-center hover:opacity-0">
                     <img id="imageId" className={`w-40 h-40 rounded-full -mt-16 ml-8 ${botonClick ? 'transform transition-transform duration-700' : ''}`}  src={imgshawarma} alt=""/>
                     <p className="mt-2 text-sm text-gray-400">East</p>
                     <p className="text-2xl">Crazy Cheese</p>
                     <p className="text-2xl pt-2" >$3,95</p>
                 </div>
                 <button className={`py-2 px-4 mt-10 inline-flex items-center font-sans text-xm text-black bg-white rounded-lg border-2 border-black transition duration-300 ${botonClick ? 'bg-orange-700' : 'hover:bg-yellow-400 '}`}
                   onClick={handleBotonClick} >
                     <img src={bolsitacompra} alt="" className="flex items-center p-1"/> 
                     <span>Add To Cart</span> 
                 </button>
             </div>

             <div className="relative justify-center w-full h-60 mb-16 bg-gray-800 rounded-xl text-white text-center">
                 <div className="justify-center w-full h-40 mt-4 bg-gray-800 rounded-xl text-white text-center">
                     <span className="text-2xl">Mini</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="">Ingredientes: pollo, verduras,<br/> 
                     especias,habas</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="text-2xl">450g</span>
                 </div>
                 <div className=" absolute top-0 right-0 w-full p-2 bg-gray-800 rounded-xl text-white text-center hover:opacity-0">
                     <img id="imageId" className={`w-40 h-40 rounded-full -mt-16 ml-8 ${botonClick ? 'transform transition-transform duration-700' : ''}`}  src={imgshawarma} alt=""/>
                     <p className="mt-2 text-sm text-gray-400">East</p>
                     <p className="text-2xl">Crazy Cheese</p>
                     <p className="text-2xl pt-2" >$3,95</p>
                 </div>
                 <button className={`py-2 px-4 mt-10 inline-flex items-center font-sans text-xm text-black bg-white rounded-lg border-2 border-black transition duration-300 ${botonClick ? 'bg-orange-700' : 'hover:bg-yellow-400 '}`}
                   onClick={handleBotonClick} >
                     <img src={bolsitacompra} alt="" className="flex items-center p-1"/> 
                     <span>Add To Cart</span> 
                 </button>
             </div>

             <div className="relative justify-center w-full h-60 mb-16 bg-gray-800 rounded-xl text-white text-center">
                 <div className="justify-center w-full h-40 mt-4 bg-gray-800 rounded-xl text-white text-center">
                     <span className="text-2xl">Mini</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="">Ingredientes: pollo, verduras,<br/> 
                     especias,habas</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="text-2xl">450g</span>
                 </div>
                 <div className=" absolute top-0 right-0 w-full p-2 bg-gray-800 rounded-xl text-white text-center hover:opacity-0">
                     <img id="imageId" className={`w-40 h-40 rounded-full -mt-16 ml-8 ${botonClick ? 'transform transition-transform duration-700' : ''}`}  src={imgshawarma} alt=""/>
                     <p className="mt-2 text-sm text-gray-400">East</p>
                     <p className="text-2xl">Crazy Cheese</p>
                     <p className="text-2xl pt-2" >$3,95</p>
                 </div>
                 <button className={`py-2 px-4 mt-10 inline-flex items-center font-sans text-xm text-black bg-white rounded-lg border-2 border-black transition duration-300 ${botonClick ? 'bg-orange-700' : 'hover:bg-yellow-400 '}`}
                   onClick={handleBotonClick} >
                     <img src={bolsitacompra} alt="" className="flex items-center p-1"/> 
                     <span>Add To Cart</span> 
                 </button>
             </div>

             <div className="relative justify-center w-full h-60 mb-16 bg-gray-800 rounded-xl text-white text-center">
                 <div className="justify-center w-full h-40 mt-4 bg-gray-800 rounded-xl text-white text-center">
                     <span className="text-2xl">Mini</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="">Ingredientes: pollo, verduras,<br/> 
                     especias,habas</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="text-2xl">450g</span>
                 </div>
                 <div className=" absolute top-0 right-0 w-full p-2 bg-gray-800 rounded-xl text-white text-center hover:opacity-0">
                     <img id="imageId" className={`w-40 h-40 rounded-full -mt-16 ml-8 ${botonClick ? 'transform transition-transform duration-700' : ''}`}  src={imgshawarma} alt=""/>
                     <p className="mt-2 text-sm text-gray-400">East</p>
                     <p className="text-2xl">Crazy Cheese</p>
                     <p className="text-2xl pt-2" >$3,95</p>
                 </div>
                 <button className={`py-2 px-4 mt-10 inline-flex items-center font-sans text-xm text-black bg-white rounded-lg border-2 border-black transition duration-300 ${botonClick ? 'bg-orange-700' : 'hover:bg-yellow-400 '}`}
                   onClick={handleBotonClick} >
                     <img src={bolsitacompra} alt="" className="flex items-center p-1"/> 
                     <span>Add To Cart</span> 
                 </button>
             </div>
             <div className="relative justify-center w-full h-60 mb-16 bg-gray-800 rounded-xl text-white text-center">
                 <div className="justify-center w-full h-40 mt-4 bg-gray-800 rounded-xl text-white text-center">
                     <span className="text-2xl">Mini</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="">Ingredientes: pollo, verduras,<br/> 
                     especias,habas</span>
                     <div className="w-full h-px bg-gray-300 my-4"></div>
                     <span className="text-2xl">450g</span>
                 </div>
                 <div className=" absolute top-0 right-0 w-full p-2 bg-gray-800 rounded-xl text-white text-center hover:opacity-0">
                     <img id="imageId" className={`w-40 h-40 rounded-full -mt-16 ml-8 ${botonClick ? 'transform transition-transform duration-700' : ''}`}  src={imgshawarma} alt=""/>
                     <p className="mt-2 text-sm text-gray-400">East</p>
                     <p className="text-2xl">Crazy Cheese</p>
                     <p className="text-2xl pt-2" >$3,95</p>
                 </div>
                 <button className={`py-2 px-4 mt-10 inline-flex items-center font-sans text-xm text-black bg-white rounded-lg border-2 border-black transition duration-300 ${botonClick ? 'bg-orange-700' : 'hover:bg-yellow-400 '}`}
                   onClick={handleBotonClick} >
                     <img src={bolsitacompra} alt="" className="flex items-center p-1"/> 
                     <span>Add To Cart</span> 
                 </button>
             </div>

             
             
         </div>
        </>
        
        
    );
};

export default East;





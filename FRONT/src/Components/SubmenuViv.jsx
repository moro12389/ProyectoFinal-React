import React, { useState, useEffect } from "react";
//import {motion} from "framer-motion";
import bolsitacompra from "/img/menu/icons-bolsitacompra.png";


const Submenu = () => {
  const [botonClick, setBotonClick] = useState(false);
  const [data, setData] = useState([]);
  const [categoria, setCategoria] = useState("");
  

  const usuarioId = "654a9a52a98d90b8a059d045"

  const Categoria = [
    "654e6b3abbe177b7c9bf40fc",
    "654e6b09bbe177b7c9bf40fa",
    "654e6b43bbe177b7c9bf40fe",
    "654e6b5abbe177b7c9bf4102",
    "654e6b5ebbe177b7c9bf4104",
    "654e7b08c149d1f652d2b4db"]

  //cambia el submenu
  const cat=Categoria[3]



  const handleBotonClick = async(productoId, usuarioId, quantity) => {
    setBotonClick(true);
    setTimeout(() => {
      setBotonClick(false);
    }, 1000);

    const img = document.getElementById('imageId');
    if (img) {
      img.style.transform = 'translate(50vw, -50vh)';
    }

    console.log(productoId," ", usuarioId," ", quantity)


    try {

      const URL = "http://localhost:5172/api/menu/cargarCarrito"; // Reemplaza con la ruta correcta
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productoId,
          usuarioId,
          quantity,
        }),
      });

      if (!response.ok) {
        console.error('Error en la respuesta:', response.status, response.statusText);
        throw new Error('No se pudo agregar al carrito');
      }

      // Manejar la respuesta del backend si es necesario
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }
  }


  useEffect(() => {

    const fetchData = async(cat) => {
      try {
        const URL = "http://localhost:5172/api/menu/obtenerProductosCategoria/"
        const response = await fetch(`${URL}${cat}`);

        if (!response.ok) {
          console.error('Error en la respuesta:', response.status, response.statusText);
          throw new Error('No se pudo obtener la respuesta esperada');
        }

        const data = await response.json();
        setData(data);
        console.log(data)
      } catch (error) {
        console.error('Error no se pudo obtener:', error);
      }
    };
    fetchData(cat);
  }, []);
    
    useEffect(() => {
    const fetchCategoria = async (cat) => {
      try {
        const URL = "http://localhost:5172/api/menu/obtenerCategoria/"
        
        const response = await fetch(`${URL}${cat}`);

        if (!response.ok) {
          console.error('Error en la respuesta:', response.status, response.statusText);
          throw new Error('No se pudo obtener la respuesta esperada');
        }

        const data = await response.json();
        setCategoria(data);
        console.log(data)
      } catch (error) {
        console.error('Error no se pudo obtener:', error);
      }
    };

    
    fetchCategoria(cat);
  }, []);


  return (
    <>
      <div className="text-center text-4xl p-4">
        {categoria.nombreCategoria}
      </div>

      <div className="grid grid-cols-4 gap-4 m-4 pt-6">
        {data.map((data, key) => (
          <div
            key={key}
            className="relative justify-center w-full h-60 mb-16 bg-gray-800 rounded-xl text-white text-center"
          >
            <div className="justify-center w-full h-40 mt-4 bg-gray-800 rounded-xl text-white text-center">
              <span className="text-2xl">{data.nombreProducto}</span>
              <div className="w-full h-px bg-gray-300 my-4"></div>
              <span className="">{data.ingredientesProducto}</span>
              <div className="w-full h-px bg-gray-300 my-4"></div>
              <span className="text-2xl">{data.pesoProducto}</span>
            </div>
            <div className=" absolute top-0 right-0 w-full p-2 bg-gray-800 rounded-xl text-white text-center hover:opacity-0">
              <img id="imageId" className={`w-40 h-40 rounded-full -mt-16 ml-8 ${botonClick ? 'transform transition-transform duration-700' : ''}`} src={data.imgUrlProducto} alt="" />
              <p className="mt-2 text-sm text-gray-400">{categoria.nombreCategoria}</p>
              <p className="text-2xl">{data.nombreProducto}</p>
              <p className="text-2xl pt-2" >
                {data.valorProducto.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </p>
            </div>
            <button className={`py-2 px-4 mt-10 inline-flex items-center font-sans text-xm text-black bg-white rounded-lg border-2 border-black transition duration-300 ${botonClick ? 'bg-orange-700' : 'hover:bg-yellow-400 '}`}
              onClick={()=>{handleBotonClick(data._id, usuarioId,1)}} >
              <img src={bolsitacompra} alt="" className="flex items-center p-1" />
              <span >Add To Cart</span>
            </button>
          </div>
        ))}
      </div>
    </>


  );
};

export default Submenu;





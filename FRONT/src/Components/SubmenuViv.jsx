import React, { useState, useEffect } from "react";
//import {motion} from "framer-motion";
import bolsitacompra from "/img/menu/icons-bolsitacompra.png";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

const Submenu = () => {
  const [botonClick, setBotonClick] = useState(false);
  const [data, setData] = useState([]);
  const [categoria, setCategoria] = useState("");
  
  //envio datos
  const dispatch = useDispatch();

  //recepcion datos
  const cat = useSelector((state) => state.actSeleccion)
  if (cat === undefined) {
    window.location.href = '/';
  }

  
  
  // //cambia el submenu CATEGORIA
  let location =useLocation();
  // const cat=location.state.id

  const [usuarioId, setUsuarioId] = useState("");

  useEffect(() => {
    
    const fetchData = async() => {
      try {
        const URL = "http://localhost:5172/api/menu/userId"
        const response = await fetch(`${URL}`,{ 
          method: "GET",
          credentials: 'include',
        })

        if (!response.ok) {
          console.error('Error en la respuesta:', response.status, response.statusText);
          throw new Error('No se pudo obtener la respuesta esperada');
        }
        const data = await response.json();
        setUsuarioId(data.usuario.userId)
      } catch (error) {
        console.error('Error no se pudo obtener:', error);
      }
    };
    fetchData();
  }, []);

  

  const handleBotonClick = async(productoId, usuarioId, quantity) => {
    if (botonClick) {
      return; // Evitar múltiples clics simultáneos
    }
    setBotonClick(true);
    setTimeout(() => {
      setBotonClick(false);
    }, 1000);

    const img = document.getElementById('imageId');
    if (img) {
      img.style.transform = 'translate(50vw, -50vh)';
    }


    try {

      const URL = "http://localhost:5172/api/menu/cargarCarrito";
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productoId,
          usuarioId,
          quantity,
          option:true,
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
      console.error('Error al procesar la solicitud:', error)
      res.status(500).json({ error: 'Error interno del servidor' })
    }

    dispatch({ type: 'ACTUALIZAR_NUM_CARRO', payload: productoId })

  }


  useEffect(() => {

    const fetchData = async(cat) => {
      try {
        const URL = "http://localhost:5172/api/menu/obtenerProductosCategoria/"
        const response = await fetch(`${URL}${cat}`,{
          method: 'GET',
          credentials: 'include',
        });

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
  }, [cat]);
    
    useEffect(() => {
    const fetchCategoria = async (cat) => {
      try {
        const URL = "http://localhost:5172/api/menu/obtenerCategoria/"
        
        const response = await fetch(`${URL}${cat}`,{
          method: "GET",
          credentials: 'include',
      });

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
  }, [cat]);


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
            <Link className={`py-2 px-4 mt-10 inline-flex items-center font-sans text-xm text-black bg-white rounded-lg border-2 border-black transition duration-300 ${botonClick ? 'bg-orange-700' : 'hover:bg-yellow-400 '}`}
              onClick={(e) => {
                e.preventDefault(); // Evita la navegación predeterminada
                handleBotonClick(data._id, usuarioId, 1)
              }}
              >
              
              <img src={bolsitacompra} alt="" className="flex items-center p-1" />
              <span>Add To Cart</span>
            </Link>
          </div>
        ))}
      </div>
    </>


  );
};

export default Submenu;





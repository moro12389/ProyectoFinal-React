import React, { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';


const NavPerfil = () => {
  const [data, setData] = useState([]);
  const [bagDropdown, setBagDropdown] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [usuarioId, setUsuarioId] = useState("");
  const [cambio, setCambio] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState([]);

  const dispatch = useDispatch();

  const act = useSelector((state) => state.changeNum)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "http://localhost:5172/api/menu/userId"
        const response = await fetch(`${URL}`, {
          method: "GET",
          credentials: 'include',
        });

        if (!response.ok) {
          console.error('Error en la respuesta:', response.status, response.statusText);
          throw new Error('No se pudo obtener la respuesta esperada');
        }
        const data = await response.json();
        setUsuarioId(data.usuario.userId)
        setNombreUsuario(data.usuario.nombre)
      } catch (error) {
        console.error('Error no se pudo obtener:', error);
      }
    };
    fetchData();
  }, []);



  useEffect(() => {

    const fetchData = async () => {
      try {
        const URL = "http://localhost:5172/api/menu/obtenerCarrito/"
        const response = await fetch(`${URL}${usuarioId}`, {
          method: "GET",
          credentials: 'include',
        });

        if (!response.ok) {
          console.error('Error en la respuesta:', response.status, response.statusText);
          throw new Error('No se pudo obtener la respuesta esperada');
        }

        const data = await response.json();
        setBagDropdown(data);
        console.log(data)
      } catch (error) {
        console.error('Error no se pudo obtener:', error);
      }
    };
    fetchData();
  }, [usuarioId, cambio, act]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const URL = "http://localhost:5172/api/menu/obtenerProductos"
        const response = await fetch(`${URL}`, {
          method: "GET",
          credentials: "include",
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
    fetchData();
  }, []);

  const handleQuantityChange = async (index, newQuantity, basePrice, id, operation) => {
    console.log(index, newQuantity, basePrice, id, operation)
    newQuantity = Math.max(1, newQuantity);

    if (operation === "-") {
      newQuantity--;
    } else {
      newQuantity++;
    }

    const newPrice = basePrice * newQuantity


    setCarrito(prevBagDropdown => {
      const updatedBagDropdown = [...prevBagDropdown];
      updatedBagDropdown[index].newPrice = newPrice;
      return updatedBagDropdown;
    });

    try {
      const URL = "http://localhost:5172/api/menu/actualizarCarrito"; // Reemplaza con la ruta correcta
      const response = await fetch(URL, {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify({
          usuarioId,
          productoId: id,
          quantity: newQuantity
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        console.error('Error en la respuesta:', response.status, response.statusText);
        throw new Error('No se pudo agregar al carrito');
      }
      const data = await response.json();
      setCambio(data)
      console.log(data)

    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }


  };



  const eliminarDeCarrito = async (index, id) => {
    try {
      const URL = "http://localhost:5172/api/menu/eliminarCarritoUserProducto/"; // Reemplaza con la ruta correcta
      const response = await fetch(URL, {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify({
          usuarioId,
          productoId: id,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        console.error('Error en la respuesta:', response.status, response.statusText);
        throw new Error('No se pudo agregar al carrito');
      }
      const data = await response.json();
      setCambio(data)
      console.log(data)
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
    }
    dispatch({ type: 'ACTUALIZAR_NUM_CARRO', payload: id })

    // const nuevoCarrito = carrito.filter(item => item.id !== id)
    // setCarrito(nuevoCarrito)
    // console.log('Elemento eliminado del carrito:', id)
  }


  useEffect(() => {
    const newTotalPrice = carrito.reduce((total, item) => total + item.newPrice, 0);
    setTotalPrice(newTotalPrice);
  }, [carrito]);

  useEffect(() => {
    const obtenerProductosEnCarrito = () => {
      // Filtrar los productos que coinciden con la condición
      const productosEnCarrito = data.map(producto => {
        const carritoItem = bagDropdown.find(item => item.productoId === producto._id);
        return carritoItem ? { ...producto, quantity: carritoItem.quantity, productoId: carritoItem.productoId, usuarioId: carritoItem.usuarioId } : null;
      }).filter(Boolean);

      // Actualizar el estado con la información de los productos en el carrito
      const updatedData0 = productosEnCarrito.map(item => ({
        id: item._id,
        productoId: item.productoId,
        usuarioId: item.usuarioId,
        image: item.imgUrlProducto,
        title: item.nombreProducto,
        price: item.valorProducto,
        newPrice: item.valorProducto * item.quantity,
        stock: item.stockProducto,
        quantity: item.quantity,
      }));
      setCarrito(updatedData0)
    };

    // Llama a la función en el lugar adecuado de tu código
    obtenerProductosEnCarrito();
  }, [data, bagDropdown]);

////////////////////////////////

const loginLogout = async () => {
    if (usuarioId == "") {
    } else {
      try {
        const URL = "http://localhost:5172/api/menu/logOut"
        const response = await fetch(URL, {
          method: "GET",
          credentials: 'include',
        });

        if (!response.ok) {
          console.error('Error en la respuesta:', response.status, response.statusText);
          throw new Error('No se pudo obtener la respuesta esperada');
        }
        window.location.href = '/'
      } catch (error) {
        console.error('Error no se pudo obtener:', error);
      }
    }
  }

  return (
    <motion.div className='bg-white z-[3] max-h-[400px] overflow-y-auto w-1/5 border shadow-xl absolute right-40 xll:w-1/3 xll:right-20 xl:w-1/3 xl:right-12 lg:w-1/2 lg:right-6 sm:w-[100%] sm:right-0 rounded-lg'
      initial={{ opacity: 0 }} animate={{ opacity: 1, y: 50 }} transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
    >
      <div className='flex items-center justify-center'>
        <div className=' mt-4'>
          {carrito.length > 0 && (
            <div className='flex flex-col'>
              
              <strong className='2xl:text-3xl'>Perfil</strong>
              <span className='2xl:text-xl'>Usuario: </span> <span className='text-gray-600'>{nombreUsuario}</span>
              <Link to="/cupons">Cupones</Link>
              <Link onClick={() => loginLogout()}> Log Out</Link>
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
};

export default NavPerfil;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
  const [data, setData] = useState([]);
  const userId = "654a9a52a98d90b8a059d045"

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('http://localhost:5172/api/menu/obtenerCategorias');

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

    fetchData(); // Llamada a la función asincrónica
  }, []);


  return (
    <>
      <div className="text-center text-4xl sm:text-2xl p-4 sm:p-1">
        Dur Menu ss 
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:gap-1 m-3 mt-8">
        {data.map((card, key) => (
          <Link
            style={{ backgroundImage: `url(${card.imgUrlCategoria})` }}
            className="bg-no-repeat bg-cover h-60 sm:h-32 flex items-center justify-center rounded-md hover:scale-105 transition duration-500"
            key={key}
            to={`/submenu`} state={{id: card._id, userId:userId}}
          >
            <div className="w-40 sm:w-20 h-40 sm:h-20 pt-1 tracking-widest text-2xl sm:text-2xl text-center text-white">
              <img className="bg-white border-solid border-black border-2 rounded-full w-20 sm:w-10 h-30 sm:10 p-1 ml-10 sm:ml-4" src={card.iconUrlCategoria} alt="" />
              {card.nombreCategoria}
            </div>

          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
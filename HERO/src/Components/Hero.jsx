import React, { useState, useEffect } from 'react';
import fondo from '/otro.svg'; // Asegúrate de que la ruta sea correcta
import iconBolso from '/Icons/icons8-bolsa-de-compras-48.png'
import iconDelivery from '/Icons/icons8-fast-delivery-64.png'

const Hero = () => {
    const [descMenu, setDescMenu] = useState([]); // Define un estado para almacenar la información de las tarjetas de trabajo
    const [data, setData] = useState({ number: '' });

    useEffect(() => {
        fetch('Json/Data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('no se conecto');
                }
                return response.json();
            })
            .then(data => {
                setDescMenu(data['menu']);
                setData(data['data'][0]);
            })

            .catch(error => console.error('Error no se pudo obtener:', error)); // Manejo de errores en caso de falla en la solicitud
    }, []);


    let ofert = 0
    let valorDesc = descMenu[ofert]?.valor - (descMenu[ofert]?.valor * (1 / descMenu[ofert]?.descount))



    return (
        <div className='flex m-0 p-0'>
            <div className='w-[35vw] h-screen bg-slate-600 font-lobster flex flex-col justify-center items-center '>
                <div className='max-w-[25vw] bg-green-600' >
                    <div>
                        <p className='text-gray-900 text-4xl'> <strong>{descMenu[ofert]?.title}</strong></p>
                        <p className='text-orange-500 text-2xl'>{descMenu[ofert]?.subtitle}</p>
                        <p className='font-roboto'>{descMenu[ofert]?.detail} <strong>{descMenu[ofert]?.other}</strong></p>
                    </div>

                    <div className='flex justify-start gap-10 content-between pt-4'>
                        <div>
                            <div className='text-gray-400 text-sm line-through'>
                                <p>{descMenu[ofert]?.valor.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                            </div>

                            <p className='text-xl'>{valorDesc.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                        </div>
                        <button className='bg-yellow-500 rounded-xl shadow-xl flex items-center px-5 hover:bg-yellow-400 hover:translate-x-[1px] hover:translate-y-[1px]'>
                            <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                                <img className='w-5 h-5' src={iconBolso} alt="" />
                            </div>
                            <span className='ml-2'>Buy Now</span>
                        </button>
                    </div>
                    <div className='pt-20 flex items-center '>
                        <img className='scale-x-[-1] w-10' src={iconDelivery} alt="" />
                        <span className='ml-2 underline'>{data.number}</span>
                    </div>
                </div>



            </div>
            <div className='z-[-1] w-[65vw] h-screen bg-green-400'>
                <img
                    className='z-[1] h-screen w-full object-cover'
                    src={fondo}
                    alt="" />

                <div className='absolute top-2 flex items-center justify-center'>
                    <img
                        className='w-[20em] z-[2]'
                        src={descMenu[ofert]?.image}
                        alt=""
                    />
                </div>

            </div>
        </div>
    );
};

export { Hero };

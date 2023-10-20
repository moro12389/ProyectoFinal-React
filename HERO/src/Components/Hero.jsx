import React, { useState, useEffect } from 'react';
import fondo from '/otro2.svg'; // Asegúrate de que la ruta sea correcta
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


    let ofert = 1
    let valorDesc = descMenu[ofert]?.valor * (1 - (descMenu[ofert]?.descount / 100))

    return (
        <div className='flex flex-col-reverse ...
                       md:flex md:m-0 md:p-0'>
            <div className='md:w-[40vw] h-screen bg-gray-600 font-lobster flex justify-center items-center '>
                <div className='md:max-w-[25vw] max-w-[70vw]' >
                    <div>
                        <p className='text-gray-900 text-4xl'> <strong>{descMenu[ofert]?.title}</strong></p>
                        <p className='text-orange-500 text-2xl'>{descMenu[ofert]?.subtitle}</p>
                        <p className='text-gray-400 font-roboto'>{descMenu[ofert]?.detail} <strong className='text-gray-900'>{descMenu[ofert]?.other}</strong></p>
                    </div>

                    <div className='flex justify-start gap-10 content-between pt-4'>
                        <div>
                            <div className='text-gray-400 text-sm line-through'>
                                <p><strong>{descMenu[ofert]?.valor.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</strong></p>
                            </div>

                            <p className='text-xl'><strong>{valorDesc.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</strong></p>
                        </div>
                        <button className='bg-yellow-500 rounded-xl shadow-xl flex items-center px-5 hover:bg-yellow-400 hover:translate-x-[1px] hover:translate-y-[1px]'>
                            <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                                <img className='w-5 h-5' src={iconBolso} alt="" />
                            </div>
                            <span className='ml-2'>{data.boton1}</span>
                        </button>
                    </div>

                    <div className='flex pt-2'>
                        {descMenu.map((key) => (
                            <div
                                key={key}
                                className={`h-1 rounded-sm mr-2  ${ofert == key.id - 1 ? 'bg-orange-500 w-6' : 'bg-gray-500 w-2'}`}
                            >
                            </div>
                        ))}
                    </div>

                    <div className='pt-20 flex items-center '>
                        <img className='scale-x-[-1] w-10' src={iconDelivery} alt="" />
                        <span className='ml-2 underline'> <strong>{data.number}</strong></span>
                    </div>
                </div>



            </div>
            <div className='md:w-[60vw] md:h-screen'>

                <div className=''>
                    <img
                        className='z-[1] h-screen w-full object-cover'
                        src={fondo}
                        alt="" />
                    <img
                        className='
                        w-[20em] z-[2] absolute top-[2em] right-[3em]
                        md:w-[20em] md:absolute md:top-[2em] md:right-[15em]
                        lg:w-[20em] lg:absolute lg:top-[2em] lg:right-[20em]'
                        src={descMenu[ofert]?.image}
                        alt=""
                    />
                    <div className='bg-white 
                    h-[5em] w-[22em] rounded-xl absolute bottom-[15em] right-[2em] flex justify-center items-center gap-10 content-between p-4
                    md:h-[5em] md:w-[22em] md:rounded-xl  md:absolute md:bottom-[6em] md:right-[2em] md:flex md:justify-center md:items-center md:gap-10 md:content-between md:p-4
                    lg:h-[5em] lg:w-[22em] lg:rounded-lg  lg:absolute lg:bottom-[10em] lg:right-[2em] lg:flex lg:justify-center lg:items-center lg:gap-10 lg:content-between lg:p-4
                    '
                    >
                        <div>
                            <p>{data.registerText}</p>
                            <p className='text-orange-500'>{data.cuponText}</p>
                        </div>
                        <button className='bg-yellow-500 shadow-sm shadow-gray-500/50 hover:bg-yellow-400 hover:translate-x-[1px] hover:translate-y-[1px] 
                        h-[2em] rounded-xl flex items-center px-5 '>
                            <span className='ml-2'>{data.boton2}</span>
                        </button>
                    </div>
                    <div class="absolute 
                                bottom-[11em] right-[5em] h-10 w-10
                                md:bottom-[11em] md:right-[35em] md:h-10 md:w-10
                                lg:bottom-[14em] lg:right-[26em] lg:h-10 lg:w-10">
                        <div class="absolute w-2 h-2 -bottom-8 -left-6 bg-gray-300 rounded-full "></div>
                        <div class="absolute w-2 h-2 -bottom-5 -left-6 bg-gray-400 rounded-full opacity-50"></div>
                        <div class="absolute w-2 h-2 -bottom-2 -left-6 bg-red-500 rounded-full opacity-25"></div>
                        <div class="absolute w-2 h-2 -bottom-8 -left-8 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" class="w-6 h-6 mx-auto text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-9 9-9-9"></path>
                            </svg>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export { Hero };

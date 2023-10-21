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


    let ofert = 0
    let valorDesc = descMenu[ofert]?.valor * (1 - (descMenu[ofert]?.descount / 100))

    return (
        <div className='flex m-0 p-0'>
            <div className='w-[50vw] h-screen bg-gray-600 font-lobster flex justify-center items-center 
                            md:w-[40vw]'>
                <div className='max-w-[35vw]
                                md:max-w-[25vw]' >
                    <div>
                        <p className='text-gray-900 text-2xl
                                        md:text-4xl'>
                            <strong>{descMenu[ofert]?.title}</strong>
                        </p>
                        <p className='text-orange-500 text-xl
                                        md:text-2xl'>
                            {descMenu[ofert]?.subtitle}
                        </p>
                        <p className='text-gray-400 font-roboto
                                        md:text-xl'>
                            {descMenu[ofert]?.detail} <strong className='text-gray-900'>{descMenu[ofert]?.other}</strong>
                        </p>
                    </div>

                    <div className='gap-10 content-between pt-4 
                                    md:flex md:justify-start '>
                        <div className='flex space-x-3 items-center 
                        md:flex'>
                            <div className='text-gray-400 text-xs line-through
                                            md:text-sm'>
                                <p><strong>{descMenu[ofert]?.valor.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</strong></p>
                            </div>

                            <p className='text-lg
                                        md:text-2xl'>
                                <strong>{valorDesc.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</strong>
                                </p>
                        </div>

                        <button className='bg-yellow-500 rounded-xl shadow-2xl flex items-center hover:bg-yellow-400 hover:translate-x-[1px] hover:translate-y-[1px]
                                            px-4 py-2 mt-2
                                            md:px-6'>
                            <div className='w-7 h-7 bg-white rounded-full flex items-center justify-center'>
                                <img className='w-5 h-5' src={iconBolso} alt="" />
                            </div>
                            <span className='ml-[1px]
                                                md:ml-2'>
                                {data.boton1}
                                </span>
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

                    <div className='pt-20 flex items-center invisible
                                    md:visible'>
                        <img className='scale-x-[-1] w-10' src={iconDelivery} alt="" />
                        <span className='ml-2 underline'> <strong>{data.number}</strong></span>
                    </div>
                </div>



            </div>
            <div className='w-[50vw] h-screen bg-fondoAzul bg-cover bg-no-repeat
                            md:w-[60vw]'>

                <div className=''>
                    {/* <img
                        className='z-[1] h-screen w-full object-cover
                        
                        xl:scale-y-[.] xl:scale-x-[1] xl:h-screen xl:w-full xl:object-cover
                        
                        '
                        src={fondo}
                        alt="" /> */}
                    <img
                        className='
                        w-[10em] z-[2] absolute top-[18em] right-[1em]
                        md:w-[18em] md:absolute md:top-[12em] md:right-[5em]
                        lg:w-[20em] lg:absolute lg:top-[8em] lg:right-[10em]
                        xl:w-[25em] xl:absolute xl:top-[8em] xl:right-[20em]
                        2xl:w-[30em] 2xl:absolute 2xl:top-[4em] 2xl:right-[20em]'
                        src={descMenu[ofert]?.image}
                        alt=""
                    />
                    <div className='
                    bg-[#080d22] w-[22em] rounded-xl absolute bottom-[1em] right-[0.3em] flex justify-center items-center gap-10 content-between p-4

                    md:bg-white md:h-[4em] md:w-[20em] md:rounded-md  md:absolute md:bottom-[11em] md:right-[1em] md:flex md:justify-center md:items-center md:gap-10 md:content-between md:p-4
                    lg:h-[5em] lg:w-[22em] lg:rounded-lg  lg:absolute lg:bottom-[10em] lg:right-[3em] lg:flex lg:justify-center lg:items-center lg:gap-10 lg:content-between lg:p-4
                    xl:h-[5em] xl:w-[22em] xl:rounded-xl  xl:absolute xl:bottom-[10em] xl:right-[3em] xl:flex xl:justify-center xl:items-center xl:gap-10 xl:content-between xl:p-4
                    2xl:h-[5em] 2xl:w-[22em] 2xl:rounded-xl  2xl:absolute 2xl:bottom-[10em] 2xl:right-[2em] 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-10 2xl:content-between 2xl:p-4
                    '
                    >
                        <div>
                            <p className='text-white
                                            md:text-black'>
                                {data.registerText}</p>
                            <p className='text-orange-500'>{data.cuponText}</p>
                        </div>
                        <button className='bg-yellow-500 shadow-sm shadow-gray-500/50 hover:bg-yellow-400 hover:translate-x-[1px] hover:translate-y-[1px] 
                        h-[2em] rounded-xl flex items-center px-5 '>
                            <span className='ml-2'>{data.boton2}</span>
                        </button>
                    </div>
                    <div class="absolute 
                                bottom-[11em] right-[5em] h-10 w-10 invisible

                                md:bottom-[18em] md:right-[21em] md:h-10 md:w-10 md:visible
                                lg:bottom-[16em] lg:right-[29em] lg:h-10 lg:w-10
                                xl:bottom-[14em] xl:right-[35em] xl:h-10 xl:w-10
                                2xl:bottom-[14em] 2xl:right-[45em] 2xl:h-10 2xl:w-10">
                        <div class="absolute w-2 h-2 -bottom-8 -left-6 bg-gray-300 rounded-full "></div>
                        <div class="absolute w-2 h-2 -bottom-5 -left-6 bg-gray-400 rounded-full opacity-50"></div>
                        <div class="absolute w-2 h-2 -bottom-2 -left-6 bg-gray-500 rounded-full opacity-25"></div>
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

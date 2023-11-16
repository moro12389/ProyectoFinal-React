import React, { useState, useEffect } from 'react';
import fondo from '/otro2.svg'; // Asegúrate de que la ruta sea correcta
import iconBolso from '/Icons/icons8-bolsa-de-compras-48.png'
import iconDelivery from '/Icons/icons8-fast-delivery-64.png'

import { motion } from "framer-motion"

const Hero = () => {
    const [descMenu, setDescMenu] = useState([]); // Define un estado para almacenar la información de las tarjetas de trabajo
    const [data, setData] = useState({ number: '' });
    const [ofert, setOfert] = useState(0);

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



    let valorDesc = descMenu[ofert]?.valor * (1 - (descMenu[ofert]?.descount / 100))

    const TiempoEspera = () => {
        function esperar(milisegundos) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    let set = ofert + 1
                    set < descMenu.length ? setOfert(set) : setOfert(0)
                }, milisegundos);
            });
        }

        async function ejemploEsperar() {
            await esperar(4000); // Espera 4 segundos (4 Segundos)
        }

        ejemploEsperar();
    }
    TiempoEspera()

    return (
        <div className='flex m-0 p-0'>
            <div className='w-[50vw] h-screen bg-gray-100 font-lobster flex justify-center items-center 
                            xs:w-[50vw] xs:pt-[7em]
                            2xl:w-[40vw]'>
                <div className='max-w-[35vw]
                                xs:max-w-[35vw]
                                md:max-w-[35vw]
                                2xl:max-w-[32vw]' >
                    <motion.div
                        key={ofert}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.div
                            key={ofert}
                            initial={{ x: 0, opacity: 1 }}
                            animate={{ x: 500, opacity: 0 }}
                            transition={{ delay: 3.92, duration: 1 }}
                        >

                            <p className='text-gray-900 
                                        xs:text-2xl
                                        lg:text-4xl
                                        2xl:text-6xl
                                        '>
                                <strong>{descMenu[ofert]?.title}</strong>
                            </p>
                            <p className='text-orange-500 
                                        xs:text-xl
                                        lg:text-2xl
                                        2xl:text-4xl'>
                                {descMenu[ofert]?.subtitle}
                            </p>
                            <p className='text-gray-400 font-roboto
                                        xs:text-sm
                                        md:text-xl
                                        2xl:text-xl 2xl:pt-5'>
                                {descMenu[ofert]?.detail} <strong className='text-gray-900'>{descMenu[ofert]?.other}</strong>
                            </p>


                            <div className=' xs:gap-10 xs:content-between xs:pt-4 xs:flex-col
                                    sm:flex-col sm:pt-4 sm:space-y-3
                                    md:flex-col md:pt-4 md:space-y-3 md:justify-start 
                                    lg:flex lg:flex-row lg:space-x-6 lg:pt-4
                                    2xl:flex 2xl:flex-row 2xl:space-x-[3em] 2xl:pt-4
                                    '>
                                <div className='xs:flex-col space-x-3 items-center
                                        sm:flex-row
                                        md:flex
                                        lg:flex-row lg:space-x-1
                                        '>
                                    <div className='text-gray-400 text-xs line-through
                                            md:text-sm
                                            2xl:text-lg'>
                                        <p><strong>{descMenu[ofert]?.valor.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</strong></p>
                                    </div>

                                    <p className='text-lg
                                        md:text-2xl
                                        2xl:text-4xl
                                        '>
                                        <strong>{valorDesc.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</strong>
                                    </p>
                                </div>

                                <button className=' bg-yellow-500 space-x-4 rounded-xl shadow-2xl flex items-center hover:bg-yellow-400 hover:translate-x-[1px] hover:translate-y-[1px]
                                            xs:px-4 xs:py-2
                                            sm:px-4 sm:py-2
                                            md:px-6 md:py-2
                                            2xl:px-6 2xl:py-2 '>
                                    <div className='w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center
                                            2xl:w-[3em] 2xl:h-[3em]'>
                                        <img className='w-5 h-5
                                                2xl:w-[2em] 2xl:h-[2em]
                                ' src={iconBolso} alt="" />
                                    </div>
                                    <span className='ml-[1px]
                                            md:ml-2 md:text-base
                                            2xl:text-2xl
                                            '>
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
                        </motion.div>
                    </motion.div>

                    <div className=' xs:pt-20 xs:flex xs:items-center xs:invisible
                                    sm:invisible
                                    md:visible 
                                    2xl:flex 2xl:justify-center 2xl:items-center 2xl:pt-[7em]
                                    '>
                        <img className='scale-x-[-1] w-10 justify-center
                                        2xl:w-[4em]
                                        ' src={iconDelivery} alt="" />
                        <span className='ml-2 underline
                                        md:text-xs
                                        2xl:text-2xl'>
                            <strong>
                                {data.number}
                            </strong>
                        </span>
                    </div>
                </div>



            </div>
            <div className='w-[50vw] h-screen bg-gray-100 bg-fondoAzul bg-cover bg-no-repeat
                            2xl:w-[60vw]'>

                <div className=''>
                    {/* <img
                        className='z-[1] h-screen w-full object-cover
                        
                        xl:scale-y-[.] xl:scale-x-[1] xl:h-screen xl:w-full xl:object-cover
                        
                        '
                        src={fondo}
                        alt="" /> */}
                    <motion.img
                        key={ofert}
                        className='
                        z-[2] absolute
                        xs:w-[8em] xs:top-[18em] xs:right-[1em]
                        sm:w-[15em] sm:top-[12em] sm:right-[5em]
                        md:w-[16em] md:top-[6em] md:right-[8em]
                        lg:w-[18em] lg:top-[5em] lg:right-[8em]
                        xl:w-[25em] xl:top-[4em] xl:right-[10em]
                        2xl:w-[30em] 2xl:top-[4em] 2xl:right-[10em]
                        
                        '
                        src={descMenu[ofert]?.image}
                        alt=""
                        initial={{ rotate: 180 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className='
                        xs:w-[16em] xs:rounded-xl xs:absolute xs:bottom-[5%] xs:right-[5%] xs:origin-center xs:flex xs:justify-center xs:items-center xs:gap-2 xs:content-between xs:p-1
                        sm:bg-[#050E28] sm:h-[4em] sm:w-[20em] sm:rounded-xl sm:absolute sm:bottom-[5%] sm:right-[25%] sm:origin-center sm:flex sm:justify-center sm:items-center sm:gap-10 sm:content-between sm:p-4
                        md:h-[4em] md:w-[18em] md:rounded-xl md:absolute md:bottom-[11em] md:right-[1em] md:flex md:justify-center md:items-center md:gap-10 md:content-between md:p-4
                        lg:h-[3em] lg:w-[18em] lg:rounded-xl lg:absolute lg:bottom-[10em] lg:right-[3em] lg:flex lg:justify-center lg:items-center lg:gap-10 lg:content-between lg:p-4
                        xl:h-[5em] xl:w-[22em] xl:rounded-xl xl:absolute xl:bottom-[10em] xl:right-[3em] xl:flex xl:justify-center xl:items-center xl:gap-10 xl:content-between xl:p-4
                        2xl:bg-white 2xl:h-[7em] 2xl:w-[26em] 2xl:rounded-xl  2xl:absolute 2xl:bottom-[5em] 2xl:right-[2em] 2xl:flex 2xl:justify-center 2xl:items-center 2xl:gap-10 2xl:content-between 2xl:p-4
                    '>
                        <div>
                            <p className='sm:text-white xs:text-sm
                                            lg:text-sm
                                            2xl:text-black 2xl:text-2xl
                                            '>
                                {data.registerText}</p>
                            <p className='text-orange-500
                                            lg:text-sm
                                            2xl:text-2xl
                            '>{data.cuponText}</p>
                        </div>
                        <button className='bg-yellow-500 shadow-sm shadow-gray-500/50 hover:bg-yellow-400 hover:translate-x-[1px] hover:translate-y-[1px] 
                                            h-[2em] rounded-xl flex items-center px-5
                                            lg:px-1
                                            2xl:text-lg'>
                            <span className='ml-2
                                            lg:text-sm
                                            2xl:text-xl'>
                                {data.boton2}
                            </span>
                        </button>
                    </div>
                    <div class="absolute
                                xs:bottom-[11em] xs:right-[5em] xs:h-10 xs:w-10 
                                md:bottom-[18em] md:right-[21em] md:h-10 md:w-10 
                                lg:bottom-[16em] lg:right-[29em] lg:h-10 lg:w-10 lg:invisible
                                xl:bottom-[17em] xl:right-[39em] xl:h-10 xl:w-10 xl:visible
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

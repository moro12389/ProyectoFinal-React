
import './CuponsRam'
import React, { useState, useEffect } from 'react';
import iconOk from '/Icons/icons8-de-acuerdo.svg'
import iconSinOk from '/Icons/iconSinOk.svg'

const Cupons = () => {
    const [data, setData] = useState({ owner: '' });
    const [cupons, setCupons] = useState([]);
    const [points, setPoints] = useState(0);
    const [levels, setLevels] = useState([]);


    useEffect(() => {
        fetch('Json/Data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('no se conecto');
                }
                return response.json();
            })
            .then(data => {
                setData(data['data'][0]);
                setCupons(data['cupon']);
                setPoints(data['points'][0]);
                setLevels(data['levelsAwards']);
            })


            .catch(error => console.error('Error no se pudo obtener:', error)); // Manejo de errores en caso de falla en la solicitud
    }, []);

    // const color="rgb(235, 105, 23)"
    function changeColor(color) {
        const svgContent = `<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <g style="" transform="matrix(1.885431, 0, 0, 1.691267, -238.790928, -176.881655)">
      <path style="stroke: rgb(0, 0, 0); stroke-opacity: 0; transform-origin: 261.778px 171.614px; fill:${color};" d="M 261.306 230.697 L 385.028 229.75 L 379.96 224.886 L 385.164 221.967 L 380.266 220.192 L 385.232 217.555 L 380.563 214.781 L 385.221 211.834 L 380.416 209.496 L 385.31 206.822 L 380.565 204.532 L 385.297 201.189 L 380.77 198.606 L 385.187 195.588 L 381.039 193.39 L 385.309 191.218 C 385.309 191.218 383.467 190.835 380.857 189.09 C 378.37 187.428 376.872 184.329 376.872 184.329 L 375.587 180.857 L 374.98 178.212 L 374.503 175.34 L 374.234 171.599 L 374.275 168.239 L 374.792 164.675 L 375.502 161.691 L 376.633 158.3 L 378.45 154.968 L 380.813 152.26 L 382.377 151.312 L 384.918 150.536 L 379.499 148.644 L 384.609 145.989 L 379.496 142.918 L 384.721 140.53 L 379.539 137.944 L 384.818 134.748 L 379.713 131.503 L 384.946 128.453 L 379.767 125.215 L 384.95 121.654 L 379.064 118.324 L 384.322 113.298 L 261.616 113.484" transform="matrix(-1, 0, 0, -1, -0.000016, 0.000013)"/>
      <path style="stroke: rgb(0, 0, 0); stroke-opacity: 0; transform-origin: 260.548px 171.089px; fill:${color};" d="M 260.725 229.747 L 383.798 229.225 L 378.73 224.361 L 383.934 221.442 L 379.036 219.667 L 384.002 217.03 L 379.333 214.256 L 383.991 211.309 L 379.186 208.971 L 384.08 206.297 L 379.335 204.007 L 384.067 200.664 L 379.54 198.081 L 383.957 195.063 L 379.809 192.865 L 384.079 190.693 C 384.079 190.693 382.237 190.31 379.627 188.565 C 377.14 186.903 375.642 183.804 375.642 183.804 L 374.357 180.332 L 373.75 177.687 L 373.273 174.815 L 373.004 171.074 L 373.045 167.714 L 373.562 164.15 L 374.272 161.166 L 375.403 157.775 L 377.22 154.443 L 379.583 151.735 L 381.147 150.787 L 383.688 150.011 L 378.269 148.119 L 383.379 145.464 L 378.266 142.393 L 383.491 140.005 L 378.309 137.419 L 383.588 134.223 L 378.483 130.978 L 383.716 127.928 L 378.537 124.69 L 383.72 121.129 L 377.834 117.799 L 383.092 112.773 L 261.306 112.538"/>
    </g>
  </svg>`
        return svgContent
    }


    console.log(cupons)
    return (
        <>
            <div className='2xl:p-4'>
                back to <strong>Home</strong>
            </div>
            <div>
                <h1 className='2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-4xl font-lobster'>
                    Welcome to {data.owner}
                </h1>

                <div className=' bg-gray-300 w-[63%] m-auto 2xl:p-[1em] 2xl:justify-center 2xl:items-center 2xl:rounded-2xl 2xl:my-[2em] 2xl:font-roboto'>


                    <div className='2xl:flex 2xl:flex-row 2xl:justify-center space-x-[1em]'>

                        <div className='bg-gray-50 2xl:h- 2xl:w-[30vw] 2xl:rounded-lg 2xl:p-[2em]'>

                            <div className='space-y-4 text-gray-500'>
                                <h3 className='text-2xl font-lobster text-gray-800'>
                                    Contact Information
                                </h3>

                                <p>Cabinet number: <strong className='text-gray-800'>4846</strong></p>
                                <p>Date of registration: <strong className='text-gray-800'>20.02.2023</strong></p>
                                <p>Phone number: <strong className='text-gray-800'>(063) 979-6123</strong></p>
                            </div>

                            <h3 className='text-2xl font-lobster text-gray-800 my-[1em]'>
                                Change password
                            </h3>

                            <form action='' className='2xl:flex 2xl:flex-col 2xl:items-cente'>
                                <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder='* Current password' />
                                <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder='* New password' />
                                <input className='2xl:w-full border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder='* Enter the new password again' />
                                <button className='bg-gray-200 2xl:rounded-xl 2xl:h-[2.5em] 2xl:w-full my-[1em] shadow-md shadow-gray-600'>
                                    Save edit
                                </button>
                            </form>

                        </div>


                        <div className='bg-gray-50 2xl:h- 2xl:w-[30vw] 2xl:rounded-lg 2xl:p-[2em]'>

                            <div className='space-y-4'>
                                <h3 className='text-2xl font-lobster text-gray-800'>
                                    Buyer level
                                </h3>
                                <div className='flex'>
                                    <p className='text-gray-600 2xl:w-[50%]'>Your level: <strong className='text-gray-800 mr-[1em]'>{points.level}</strong></p>
                                    <div class="w-full bg-gray-300 rounded-lg">

                                        <div class="h-full bg-orange-500  rounded-lg animate-waiting"
                                            style={{ width: `calc((${points.points} / 500) * 100%)` }}
                                        >
                                        </div>
                                        <div class="h-full flex justify-between">
                                            <strong className='text-orange-500'>{points.points}</strong>
                                            500
                                        </div>

                                    </div>
                                    <strong className='text-gray-800 ml-[1em]'>{points.level + 1}</strong>
                                </div>


                            </div>


                            <h3 className='text-2xl font-lobster text-gray-800 my-[1em] mt-[4em]'>
                                Awards
                            </h3>
                            <div className="w-[100%] overflow-x-auto bg-gray-100 rounded-lg">
                                <ul className="overflow-y-auto max-h-[190px] scrollbar-w-20 scrollbar-track-gray-100 scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full">
                                    {levels.map((list, index) => (
                                        <li key={index} className="flex 2xl:py-1 2xl:px-1">
                                            {list.level <= points.level ? (
                                                <img className="2xl:pr-3" src={iconOk} alt="" />
                                            ) : (
                                                <img className="2xl:pr-3" src={iconSinOk} alt="" />
                                            )}
                                            <p>Level {list.level}: {list.title}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>





                        </div>
                    </div>
                </div>

                <h1 className='2xl:flex 2xl:justify-center 2xl:items-center 2xl:text-4xl font-lobster 2xl:pt-[3em]'>
                    Yours coupons
                </h1>

                <div className='2xl:grid 2xl:grid-cols-2 2xl:gap-4 2xl:justify-center 2xl:items-center 2xl:p-[1em] 2xl:px-[19.5%]'>

                    {cupons.map((card, index) => (
                        <div key={index} className='bg-green-600 2xl:h-[12em] 2xl:w-[30vw]' style={{
                            background: `url('data:image/svg+xml,${encodeURIComponent(changeColor(card.colorTicket))}')`,
                            backgroundSize: 'cover',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingBottom: '1em'

                        }}>
                            <div className=' 2xl:h-[65%] 2xl:w-[50%] 2xl:flex 2xl:justify-center 2xl:items-center'>
                                <div className=' 2xl:text-sm'>
                                    {Array.from({ length: card.stars }, (_, i) => (
                                        <div key={i} className='2xl:text-white'>✰</div>
                                    ))}
                                </div>

                                <div className=' 2xl:w-[100%] 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:text-center'>
                                    <div className='2xl:text-lg font-lobster text-white uppercase'>
                                        <strong>{card.title}</strong>
                                    </div>
                                    <div className='2xl:text-2xl font-lobster text-white mt-[4px]'>
                                        {card.descount === 100 ? (
                                            <strong>Free</strong>
                                        ) : (
                                            <strong>-{card.descount}%</strong>
                                        )}
                                    </div>
                                    <div className='2xl:text-[10px] text-white'>
                                        <strong>{card.subtitle}</strong>
                                    </div>
                                </div>

                                <div className='2xl:text-sm'>
                                    {Array.from({ length: card.stars }, (_, i) => (
                                        <div key={i} className='2xl:text-white'>✰</div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    ))}

                </div>


            </div>
        </>

    )
}

export { Cupons }
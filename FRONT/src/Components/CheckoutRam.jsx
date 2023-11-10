import BagDropdown from './BagDropdownPa';
import './CheckoutRam'
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';




import Select from 'react-select'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const Checkout = () => {
    const [data, setData] = useState({ owner: '' });
    const [bagDropdown, setBagDropdown] = useState([]);
    const [textDropdown, setTextDropdown] = useState([]);
    const [descuento, setDescuento] = useState(0)
    const [delivery, setDelivery] = useState(0)
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const [productCuantityPrice, setProductCuantityPrice] = useState(0);
    

    const location = useLocation();
  const data1 = location.state?.data;


    useEffect(() => {
        fetch('Json/Data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('no se conecto');
                }
                return response.json();
            })
            .then(data => {
                setData(data['checkout'][0]);
                //setBagDropdown(bagDropdownNav.location.state)

                const updatedData1 = data['levelsAwards'].map(item => ({
                    value: item.id,
                    level: item.level,
                    label: item.title,
                    used: item.used,
                    stars: item.stars,
                    discount: item.discount,
                    colorTicket: item.colorTicket,
                }));

                setTextDropdown(updatedData1);

            })
            .catch(error => console.error('Error no se pudo obtener:', error)); // Manejo de errores en caso de falla en la solicitud
    }, []);

    useEffect(() => {
        const newSubTotalPrice = bagDropdown.reduce((total, item) => total + item.price, 0);
        const TotalPrice = newSubTotalPrice - (newSubTotalPrice * (descuento / 100))

        setSubTotalPrice(newSubTotalPrice);
        setTotalPrice(TotalPrice)

    }, [bagDropdown, descuento]);

    const handleChange = selectedOption => {
        if (selectedOption) {
            setDescuento(selectedOption.discount)
        }
    };
    const SelectCupon = () => {


        return (
            <Select
                options={textDropdown}
                onChange={handleChange}
            />
        );
    };

    const handleQuantityChange = (index, newQuantity, calcPrice, operation) => {
        console.log(index, newQuantity)
        newQuantity = Math.max(1, newQuantity)
        if(operation==="-"){
            newQuantity--
        }else{
            newQuantity++
        }

        calcPrice=calcPrice*newQuantity

        setBagDropdown(prevBagDropdown => {
            const updatedBagDropdown = [...prevBagDropdown];
            updatedBagDropdown[index].quantity = newQuantity;
            updatedBagDropdown[index].newPrice = calcPrice;
            return updatedBagDropdown;
        });
    };


    return (
        <>
            <div className='2xl:p-4'>
                back to <strong>Home</strong>
            </div>
            <div className='2xl:text-center'>
                <div className='font-lobster text-4xl'>
                    {data.title}
                </div>
                <div className='2xl:p-4 2xl:text-sm'>
                    <strong className='text-orange-500'>{data.subtitle}</strong> <strong>{data.number}</strong>
                </div>
            </div>
            <div className='2xl:grid 2xl:grid-cols-2 2xl:gap-4 2xl:justify-center 2xl:p-[1em] 2xl:px-[10.5%]'>
                <div className='bg-[#050e28] 2xl:p-2 rounded-lg'>
                    <div className='bg-white 2xl:p-4 rounded-lg'>
                        <p>{data.deTitle}</p>
                        <div>
                            <input type="checkbox" id="checkbox" className='' /><span className='2xl:p-2'>{data.deOp1}</span>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox" className='' /><span className='2xl:p-2'>{data.deOp2}</span>
                        </div>
                    </div>

                </div>

                <div>
                    {/* hola */}

                </div>

                <div className='bg-gray-500 2xl:p-2 rounded-lg'>
                    <div className='bg-white 2xl:p-4 rounded-lg h-full'>
                        <p>{data.deTitle}</p>
                        <form action='' className='2xl:flex 2xl:flex-col 2xl:items-cente'>
                            <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder={data.adPhone} />
                            <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder={data.adStreet} />
                            <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder={data.adHouse} />
                            <div className='flex 2xl:justify-center 2xl:items-center'>
                                <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder={data.adEntrance} /> <input type="checkbox" id="checkbox" /> <span className='text-sm'>{data.adCheck}</span>
                            </div>
                            <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder={data.adComment} />
                            <button className='bg-gray-200 2xl:rounded-xl 2xl:h-[2.5em] 2xl:w-full my-[1em] shadow-md shadow-gray-600'>
                                Save edit
                            </button>
                        </form>
                    </div>
                </div>



                <div className='bg-gray-500 2xl:p-2 rounded-lg'>
                    <div className='bg-white 2xl:p-3  2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center rounded-lg'>
                        {bagDropdown.length > 0 && (
                            <div>
                                {bagDropdown.map((item, index) => (
                                    <div key={index} className='flex flex-row'>
                                        <div className='flex'>
                                            <img src={item.image} alt={item.title} className='w-16 h-16 rounded-full object-cover' />
                                            <span className='w-6 h-6 rounded-[50%] shadow-sm shadow-black border flex items-center justify-center relative left-36'>x</span>
                                        </div>

                                        <div className='flex flex-col'>
                                            <div>
                                                <h4 className='mr-4'>{item.title}</h4>
                                            </div>
                                            <div className='flex mt-3 mb-6'>
                                                {/* Botón para decrementar cantidad */}
                                                <button
                                                    className='2xl:w-6 2xl:h-6 rounded-[50%] bg-gray-300 2xl:text-center 2xl:items-center content-center 2xl:text-xl'
                                                    onClick={() => handleQuantityChange(index, item.quantity, item.price, "-")}
                                                >
                                                    -
                                                </button>

                                                <span className='2xl:mx-2'>{item.quantity > 0 ? item.quantity : 1}</span>

                                                {/* Botón para incrementar cantidad */}
                                                <button
                                                    className='2xl:w-6 2xl:h-6 rounded-[50%] bg-yellow-300 2xl:mr-2 2xl:text-center content-center 2xl:text-xl'
                                                    onClick={() => handleQuantityChange(index, item.quantity, item.price, "+")}
                                                >
                                                    +
                                                </button>
                                                
                                                <span className=''>{item.newPrice.toLocaleString('es-ES', {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}



                        < div className='flex flex-col text-gray-400 justify-around w-full'>
                            <SelectCupon></SelectCupon>
                            <div>
                                <strong>Subtotal:</strong>
                                <strong>
                                    ${subTotalPrice.toLocaleString('es-ES', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}
                                </strong>
                            </div>

                            <div>
                                <strong>Cupon:</strong>
                                <strong className='text-orange-400'>-{descuento}%</strong>
                            </div>

                            <div>
                                <strong>Delivery:</strong>
                                <strong className='text-orange-400'>${delivery.toLocaleString('es-ES', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}</strong>
                            </div>

                            <div>
                                <strong>Total:</strong>
                                <strong className='text-orange-400'>${totalPrice.toLocaleString('es-ES', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}</strong>
                            </div>

                        </div>


                    </div>




                </div>
                <div></div>
                <div className='bg-gray-500 2xl:p-2 rounded-lg '>
                    <div className='bg-white 2xl:p-4 rounded-lg h-full'>
                        <strong>{data.titlePay}</strong>
                        <div className='flex flex-row place-content-around  2xl:items-center'>
                            <div className='bg-gray-500  w-28 h-18 rounded-lg '>
                                <div className='w-8 h-8 bg-green-500'></div>
                                <div>{data.payOp1}</div>

                            </div>
                            <div className='bg-red-500 w-28 h-18 rounded-lg '>
                                <div className='w-8 h-8 bg-green-500'></div>
                                <div>{data.payOp2}</div>

                            </div>
                        </div>

                    </div>
                </div>

            </div >

        </>
    )
}

export { Checkout }
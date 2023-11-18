import React, { useState, useEffect } from 'react';
import './CheckoutRam'
import { Link } from "react-router-dom";

import Select from 'react-select'


// Problema en el select 2 veces click para visualizar

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const Checkout = () => {
    const [textDropdown, setTextDropdown] = useState([]);

    const [descuento, setDescuento] = useState(0)
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const [preCarrito, setPreCarrito] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [data, setData] = useState([]);
    const [bagDropdown, setBagDropdown] = useState([]);

    const [delivery, setDelivery] = useState(20)

    const [dataText, setDataText] = useState([]);

    const [userData, setUserData] = useState([]);


    const [idCanastaProducto, setIdCanastaProducto] = useState({
        _idUnicaProducto: Date.now().toString(),
      });

      const [usuarioId, setUsuarioId] = useState("");

      useEffect(() => {
        
        const fetchData = async() => {
          try {
            const URL = "http://localhost:5172/api/menu/userId"
            const response = await fetch(`${URL}`,{ 
              method: "GET",
              credentials: 'include',
            });
    
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



    const [checkboxSeleccionado, setCheckboxSeleccionado] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const URL = "http://localhost:5172/api/menu/registerUser_getOne/"
                const response = await fetch(`${URL}${usuarioId}`);

                if (!response.ok) {
                    console.error('Error en la respuesta:', response.status, response.statusText);
                    throw new Error('No se pudo obtener la respuesta esperada');
                }

                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error no se pudo obtener:', error);
            }
        };
        fetchData();
    }, [usuarioId])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const URL = "http://localhost:5172/api/menu/obtenerCarrito/"
                const response = await fetch(`${URL}${usuarioId}`);

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
    }, [usuarioId]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const URL = "http://localhost:5172/api/menu/obtenerProductos"
                const response = await fetch(`${URL}`);

                if (!response.ok) {
                    console.error('Error en la respuesta:', response.status, response.statusText);
                    throw new Error('No se pudo obtener la respuesta esperada');
                }

                const data = await response.json();
                setData(data);

            } catch (error) {
                console.error('Error no se pudo obtener:', error);
            }
        };
        fetchData();
    }, [usuarioId]);



    useEffect(() => {
        const obtenerProductosEnCarrito = () => {
            // Filtrar los productos que coinciden con la condición
            const productosEnCarrito = data.map(producto => {
                const carritoItem = bagDropdown.find(item => item.productoId === producto._id);
                return carritoItem ? { ...producto, quantity: carritoItem.quantity, productoId: carritoItem.productoId, usuarioId: carritoItem.usuarioId } : null;
            }).filter(Boolean);

            // Actualizar el estado con la información de los productos en el carrito
            setPreCarrito(productosEnCarrito);

            console.log(productosEnCarrito)

            const updatedData0 = preCarrito.map(item => ({
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

    useEffect(() => {
        const newSubTotalPrice = carrito.reduce((total, item) => total + (item.price * item.quantity), 0);

        const TotalPrice = newSubTotalPrice - (newSubTotalPrice * (descuento / 100)) + (checkboxSeleccionado ? delivery : 0)
        setSubTotalPrice(newSubTotalPrice);
        setTotalPrice(TotalPrice)


    }, [carrito, descuento, checkboxSeleccionado]);

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


    const checkOut = async () => {
        //Borra productos userId de base de dato

        // try {
        //     const URL = "http://localhost:5172/api/menu/eliminarCarritoUser/"; // Reemplaza con la ruta correcta
        //     const response = await fetch(`${URL}${usuarioId}`, { method: "DELETE" });

        //     if (!response.ok) {
        //         console.error('Error en la respuesta:', response.status, response.statusText);
        //         throw new Error('No se pudo agregar al carrito');
        //     }

        //     // Manejar la respuesta del backend si es necesario
        //     const responseData = await response.json();
        //     console.log(responseData);
        // } catch (error) {
        //     console.error('Error al agregar al carrito:', error);
        // }

        //Reorganiza datos
        const Data = carrito.map(item => ({
            productoId: item.productoId,
            usuarioId: item.usuarioId,
            quantity: item.quantity,
        }));


        Data.forEach(async (element) => {
            // Pushea datos finales a carrito userId base de dato
            try {
                const URL = "http://localhost:5172/api/menu/compraFinalizada"; // Reemplaza con la ruta correcta
                const response = await fetch(URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        carritoId:idCanastaProducto,
                        productoId: element.productoId,
                        usuarioId: element.usuarioId,
                        quantity: element.quantity,
                        delivery,
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
        });
    }


    const handleQuantityChange = (index, newQuantity, basePrice, operation) => {
        console.log(index, newQuantity);
        newQuantity = Math.max(1, newQuantity);

        if (operation === "-") {
            newQuantity--;
        } else {
            newQuantity++;
        }

        const newPrice = basePrice * newQuantity

        setCarrito(prevBagDropdown => {
            const updatedBagDropdown = [...prevBagDropdown];
            updatedBagDropdown[index].quantity = newQuantity;
            updatedBagDropdown[index].newPrice = newPrice;
            return updatedBagDropdown;
        });
    };

    const eliminarDeCarrito = (index, id) => {
        const nuevoCarrito = carrito.filter(item => item.id !== id)
        setCarrito(nuevoCarrito)
        console.log('Elemento eliminado del carrito:', id)
    }


    const handleCheckboxChange = () => {
        setCheckboxSeleccionado(!checkboxSeleccionado);
    };

    const enviarFormulario = async () => {
        console.log(userData)
        try {
            const response = await fetch('http://localhost:5172/api/menu/registerUser_add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: userData.phone,
                    street: userData.street,
                    house: userData.house,
                    entrance: userData.entrance,
                    housePrivate: userData.housePrivate,
                    commentOrder: userData.commentOrder,
                    email: userData.email,
                }),
            });
    
            // Manejar la respuesta según sea necesario
            if (response.ok) {
                // Éxito
                console.log('Solicitud enviada con éxito');
            } else {
                // Manejar errores
                console.error('Error al enviar la solicitud:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    // console.log("bagDropdown ", bagDropdown)
    // console.log("preCarrito  ", preCarrito)
    // console.log("carrito  ", carrito)
    // console.log("data ", data)
    // console.log("subTotalPrice ", subTotalPrice)

    useEffect(() => {
        fetch('Json/Data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('no se conecto');
                }
                return response.json();
            })
            .then(data => {
                setDataText(data['checkout'][0]);

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


    return (
        <>
            <div className='2xl:p-4'>
                back to <strong>Home</strong>
            </div>
            <div className='2xl:text-center'>
                <div className='font-lobster text-4xl'>
                    {dataText.title}
                </div>
                <div className='2xl:p-4 2xl:text-sm'>
                    <strong className='text-orange-500'>{dataText.subtitle}</strong> <strong>{dataText.number}</strong>
                </div>
            </div>
            <div className='2xl:grid 2xl:grid-cols-2 2xl:gap-4 2xl:justify-center 2xl:p-[1em] 2xl:px-[10.5%]'>
                <div className='bg-[#050e28] 2xl:p-2 rounded-lg'>
                    <div className='bg-white 2xl:p-4 rounded-lg'>
                        <p>{dataText.deTitle}</p>
                        <div>
                            <input type="checkbox" id="checkbox" checked={checkboxSeleccionado} onChange={handleCheckboxChange} className='' /><span className='2xl:p-2' >{dataText.deOp1}</span>
                        </div>

                        <div>
                            <input type="checkbox" id="checkbox" checked={!checkboxSeleccionado} onChange={handleCheckboxChange} className='' /><span className='2xl:p-2' >{dataText.deOp2}</span>
                        </div>
                    </div>

                </div>

                <div>
                    {/* hola */}
                </div>

                <div className={`bg-gray-500 2xl:p-2 rounded-lg ${checkboxSeleccionado ? 'visible' : 'hidden'}`}>
                    <div className='bg-white 2xl:p-4 rounded-lg h-full'>
                        <p>{dataText.deTitle}</p>
                        <form className='2xl:flex 2xl:flex-col 2xl:items-cente'>
                            <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder={dataText.adPhone} value={userData.phone} name="phone" onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
                            <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder={dataText.adStreet} value={userData.street} name="street" onChange={(e) => setUserData({ ...userData, street: e.target.value })} />
                            <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder={dataText.adHouse} value={userData.house} name="house" onChange={(e) => setUserData({ ...userData, house: e.target.value })} />
                            <div className='flex 2xl:justify-center 2xl:items-center'>
                                <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder={dataText.adEntrance} value={userData.entrance} name="entrance" onChange={(e) => setUserData({ ...userData, entrance: e.target.value })} /> 
                                <input type="checkbox" id="checkbox" name="housePrivate" checked={userData.housePrivate} onChange={(e) => {setUserData({ ...userData, housePrivate: e.target.checked })}} /> <span className='text-sm'>{dataText.adCheck}</span>
                            </div>
                            <input className='2xl:w-full 2xl:mb-4 border-b bg-transparent focus:bg-transparent placeholder:text-gray-600' type='text' placeholder={dataText.adComment} value={userData.commentOrder} name="commentOrder" onChange={(e) => setUserData({ ...userData, commentOrder: e.target.value })} />
                            <button className='bg-gray-200 2xl:rounded-xl 2xl:h-[2.5em] 2xl:w-full my-[1em] shadow-md shadow-gray-600'
                            onClick={()=>enviarFormulario()}
                            >
                                Save edit
                            </button>
                        </form>
                    </div>
                </div>



                <div className='bg-gray-500 2xl:p-2 rounded-lg'>
                    <div className='bg-white 2xl:p-3  2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center rounded-lg'>
                        {carrito.length > 0 && (
                            <div className='z-[3] max-h-[400px] w-full overflow-y-auto '>
                                {carrito.map((item, index) => (
                                    <div key={index} className='flex flex-row'>

                                        <div className='flex'>
                                            <img src={item.image} alt={item.title} className='w-16 h-16 rounded-full object-cover' />
                                            <button className='w-6 h-6 rounded-[50%] shadow-sm shadow-black border flex items-center justify-center relative left-36'
                                                onClick={() => eliminarDeCarrito(index, item.id)}
                                            >
                                                x
                                            </button>
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
                                {console.log(checkboxSeleccionado)}
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
                                <strong className='text-orange-400'>${(checkboxSeleccionado ? delivery : 0).toLocaleString('es-ES', {
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
                        <strong>{dataText.titlePay}</strong>
                        <div className='flex flex-row place-content-around  2xl:items-center'>
                            <Link onClick={() => checkOut()} className='bg-gray-500  w-28 h-18 rounded-lg '>
                                <div className='w-8 h-8 bg-green-500'></div>
                                <div>{dataText.payOp1}</div>

                            </Link>
                            <Link onClick={() => checkOut()} className='bg-red-500 w-28 h-18 rounded-lg '>
                                <div className='w-8 h-8 bg-green-500'></div>
                                <div>{dataText.payOp2}</div>

                            </Link>
                        </div>

                    </div>
                </div>

            </div >

        </>
    )
}

export { Checkout }
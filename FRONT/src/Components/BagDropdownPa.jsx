import React, { useState, useEffect } from 'react';
import {
  Link,
} from "react-router-dom";
import { motion } from "framer-motion"
import { Checkout } from './CheckoutRam';



const BagDropdown = () => {
  const [data, setData] = useState({ owner: '' });
  const [bagDropdown, setBagDropdown] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    fetch('Json/Data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('no se conecto');
        }
        return response.json();
      })
      .then(data => {
        const updatedData0 = data['carritoCompra'].map(item => ({
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          newPrice: item.price,
          stock: item.stock,
          quantity: item.quantity,
        }));
        setBagDropdown(updatedData0)
      })
      .catch(error => console.error('Error no se pudo obtener:', error));
  }, []);

  useEffect(() => {
    const newTotalPrice = bagDropdown.reduce((total, item) => total + item.newPrice, 0);
    setTotalPrice(newTotalPrice);
  }, [bagDropdown]);


  const handleQuantityChange = (index, newQuantity, calcPrice, operation) => {
    console.log(index, newQuantity)
    newQuantity = Math.max(1, newQuantity)
    if (operation === "-") {
      newQuantity--
    } else {
      newQuantity++
    }

    calcPrice = calcPrice * newQuantity

    setBagDropdown(prevBagDropdown => {
      const updatedBagDropdown = [...prevBagDropdown];
      updatedBagDropdown[index].quantity = newQuantity;
      updatedBagDropdown[index].newPrice = calcPrice;
      return updatedBagDropdown;
    });
  };


  return (
    <motion.div className='bg-white z-[3] max-h-[400px] overflow-y-auto w-1/5 border shadow-xl absolute right-40 xll:w-1/3 xll:right-20 xl:right-12 lg:w-1/2 lg:right-6 sm:w-[100%] sm:right-0'
      initial={{ opacity: 0 }} animate={{ opacity: 1, y: 50 }} transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
    >
      <div className='flex items-center justify-center'>
        <div className=' mt-4'>
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
              <div className='flex flex-col justify-center items-center'>
                <Link 
                to={{
                  pathname: '/checkout',
                  state: { data: bagDropdown },
                }}
                className='px-4 py-2 bg-yellow-300 rounded-xl'>
                  Checkout
                </Link>


                <span className='text-center'>Total: ${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
};

export default BagDropdown;

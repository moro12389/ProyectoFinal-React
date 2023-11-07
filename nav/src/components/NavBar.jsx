import React, { useState, useEffect } from 'react';
import Logo from '../../public/img/logo.png';
import chf from '../../public/img/chff1.png';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { Icon } from '@iconify/react';
import {
  Link,
} from "react-router-dom";
import { motion } from 'framer-motion'
import BagDropdown from './bagDropdown';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch('Json/Data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('no se conecto');
        }
        return response.json();
      })
      .then(data => {
        setCarrito(data['carrito']);
      })

      .catch(error => console.error('Error no se pudo obtener:', error));
  }, []);

  const [dropdownClick, setdropdownClick] = useState(false);

  function handleClick() {
    setdropdownClick(!dropdownClick)
  }

  const textDropdown = ["Shawarma", "Street Food", "Pizza", "East", "Drinks"]

  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen)
  }

  const [isBagDropdownVisible, setIsBagDropdownVisible] = useState(false);

  return (
    <>
      <header className="">

        {/* Botón de menú hamburguesa */}

        <div className='hidden pl-4 lg:flex sm:flex xs:pl-1'>
          <div className='flex flex-col relative top-7 xs:top-8'>
            <button className='flex-col justify-center items-center relative z-50 lg:flex' onClick={handleClickMenu}>
              <span className={`bg-black  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-black  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-black  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
          </div>
        </div>

        {isOpen ? <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }} className='w-full h-screen flex flex-col justify-between z-30 items-center
	   fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop backdrop-blur-md py-32'>
          <nav className='flex items-center flex-col justify-center'>
            <div className="pt-2 absolute top-1 mx-auto text-gray-600">
              <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none xs:px-3"
                type="search" name="search" placeholder="Search" />
              <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                  version="1.1" id="Capa_1" x="0px" y="0px"
                  viewBox="0 0 56.966 56.966"
                  width="512px" height="512px">
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
            <div className='flex flex-row items-center mb-6 lg:hidden sm:flex xs:flex'>
              <Icon icon="iconoir:delivery-truck" hFlip={true} color="orange" width="40" />
              <span className='border-b-2 border-gray-300 font-roboto'>+38 (063) 98-75-615</span>
            </div>
            <h3 className='font-lobster text-3xl text-blue-950'>Menu</h3>
            <hr className="my-2 border w-full border-gray-300" />
            <div className='grid grid-cols-2'>
              <div className='flex flex-col m-auto mr-24 list-none'>
                {textDropdown.map((text, index) => (
                  <li className='mb-2 font-roboto' key={index}>{text}</li>
                ))}
              </div>
              <div>
                <img src={chf} alt="" className="" />
              </div>
            </div>
            <div className='mt-6 font-roboto'>
              <a href="" className='px-4 py-2 h-6 rounded-2xl bg-gray-200 mr-16'>About Us</a>
              <a href="" className='px-4 py-2 h-6 rounded-2xl bg-gray-200'>Contacts</a>
            </div>
          </nav>
        </motion.div>
          : null}

        {/* Fin boton menú hamburguesa */}


        {/* Nav */}

        <div className='flex flex-row items-center justify-around sm:justify-around'>
          <div className=''>
            <img src={Logo} alt="" className="lg:ml-16 sm:w-24 sm:ml-12 xs:w-16 xs:ml-9" />
          </div>


          <div className='hidden lg:flex lg:flex-row lg:items-center md:hidden sm:hidden xs:hidden'>
            <Icon icon="iconoir:delivery-truck" hFlip={true} color="orange" width="40" />
            <span>+38 (063) 98-75-615</span>
          </div>


          <ul className='flex flex-row font-roboto'>
            <Menu as="div" className="relative inline-block text-left lg:hidden sm:hidden">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  bg-white px-3 py-2 text-sm font-semibold text-gray-900 " onClick={handleClick}>
                  {dropdownClick ? "New" : "Menu"}
                  {dropdownClick ? (<ChevronUpIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />) : (<ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />)}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white">
                  <div className="py-1 ">
                    {textDropdown.map((text, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm text-right'
                            )}
                          >
                            {text}
                          </a>
                        )}

                      </Menu.Item>
                    ))}
                    <div className="pt-2 relative top-1 mx-auto text-gray-600">
                      <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                          version="1.1" id="Capa_1" x="0px" y="0px"
                          viewBox="0 0 56.966 56.966"
                          width="512px" height="512px">
                          <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <li className='mx-16 py-2 text-sm font-semibold sm:mx-0 sm:mr-4 sm:whitespace-nowrap xl:block lg:hidden sm:hidden'>About Us</li>
            <li className='py-2 text-sm font-semibold xl:block lg:hidden sm:hidden'>Contacts</li>
          </ul>
          <div className='flex flex-row py-2'>
            <Icon icon="devicon:facebook" className='mr-4 xs:mr-1' width="30" />
            <Icon icon="skill-icons:instagram" width="30" />
          </div>

          <div className='flex flex-row items-center py-2 font-roboto'>
            <Link to="/login" className='mr-4 border-2  border-gray-600 px-6 py-1 rounded-2xl sm:px-2 sm:mr-2 sm:ml-3 xs:ml-1 xs:mr-1'>Login</Link>

            <div>
              <div className="relative" onClick={() => setIsBagDropdownVisible(!isBagDropdownVisible)}>
                <Icon icon="uil:shopping-bag" width="40" />
                <div className="absolute top-3 right-2 w-6 h-6 rounded-full flex items-center justify-center text-black text-xs font-bold cursor-pointer">
                  {carrito.length}
                </div>
              </div>

              {isBagDropdownVisible && <BagDropdown />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;

"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { MdDeliveryDining } from "react-icons/md";
import useCartStore from '../../../src/app/store/cartstore';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-[#111827] shadow-md text-white fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="md:text-2xl text-xl font-bold text-[#F14321] cursor-pointer">Coffee House+</div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8 flex-grow justify-center">
            <Link href="/">
              <div className="text-lg hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 rounded-md font-medium cursor-pointer transition duration-300">Home</div>
            </Link>
            <Link href="/menu">
              <div className="text-lg hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 rounded-md font-medium cursor-pointer transition duration-300">Menu</div>
            </Link>
            <Link href="/about">
              <div className="text-lg  hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 rounded-md font-medium cursor-pointer transition duration-300">About</div>
            </Link>
            <Link href="/contact">
              <div className="text-lg hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 rounded-md font-medium cursor-pointer transition duration-300">Contact</div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/menu">
              <button className="text-lg bg-[#F14321] hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 flex justify-center items-center gap-2 rounded-md font-medium transition duration-300"><MdDeliveryDining  size={24}/> 01318906033</button>
            </Link>
            <Link href="/cart">
              <div className="relative text-lg hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-3 py-2 rounded-md font-medium cursor-pointer transition duration-300">
                <FiShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center md:hidden space-x-4">
          <Link href="/menu">
              <button className="text-sm bg-[#F14321] hover:bg-gray-200 hover:text-[#000] hover:shadow-md px-2 py-1 flex justify-center items-center gap-2 rounded-md font-medium transition duration-300"> 01318906033</button>
            </Link>
          
            <Link href="/cart">
              <div className="relative focus:outline-none">
                <FiShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </Link>
            <button onClick={toggleMenu} className="text-[white] focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <div className="text-lg hover:bg-gray-200 hover:text-black hover:shadow-md block px-3 py-2 rounded-md font-medium cursor-pointer transition duration-300">Home</div>
            </Link>
            <Link href="/menu">
              <div className="text-lg hover:bg-gray-200 hover:text-black hover:shadow-md block px-3 py-2 rounded-md font-medium cursor-pointer transition duration-300">Menu</div>
            </Link>
            <Link href="/about">
              <div className="text-lg hover:bg-gray-200 hover:text-black hover:shadow-md block px-3 py-2 rounded-md font-medium cursor-pointer transition duration-300">About</div>
            </Link>
            <Link href="/contact">
              <div className="text-lg hover:bg-gray-200 hover:text-black hover:shadow-md block px-3 py-2 rounded-md font-medium cursor-pointer transition duration-300">Contact</div>
            </Link>
            <Link href="/menu">
              <button className="text-lg hover:bg-gray-200 hover:text-black hover:shadow-md block px-3 py-2 rounded-md flex justify-center items-center gap-2 font-medium transition duration-300"><MdDeliveryDining size={24}/> 01318906033</button>
            </Link>
            <Link href="/cart">
              <div className="relative text-lg hover:bg-gray-200 hover:text-black hover:shadow-md block px-3 py-2 rounded-md font-medium cursor-pointer transition duration-300">
                <FiShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

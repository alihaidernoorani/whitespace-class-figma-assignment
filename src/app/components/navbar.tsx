"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '@/assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-full bg-[#043873] py-4'>
      <div className='container lg:w-[80%] mx-auto px-4 flex justify-between items-center relative'>
        <div>
          <Image src={Logo} alt='Logo' width={191} height={34} />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-8 md:space-x-4'> {/* Hidden on mobile, shown on desktop */}
          <ul className='flex space-x-6 text-white'>
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <div>
            <button className='bg-[#FFE492] px-6 py-3 rounded-lg w-[126px]'>Login</button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none" 
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#043873] z-10 p-4 flex flex-col items-center gap-4"> 
            <ul className='flex flex-col items-center space-y-4 text-white w-full'> 
              <li className="w-full text-center hover:bg-white/20 py-2 rounded">Products</li>
              <li className="w-full text-center hover:bg-white/20 py-2 rounded">Solutions</li>
              <li className="w-full text-center hover:bg-white/20 py-2 rounded">Resources</li>
              <li className="w-full text-center hover:bg-white/20 py-2 rounded">Pricing</li>
            </ul>
            <div className="w-full">
              <button className='bg-[#FFE492] px-6 py-3 rounded-lg w-full'>Login</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
'use client';

import Link from 'next/link';
import { GiShoppingBag } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import React from 'react';
import { Button } from '@nextui-org/react';

const Auth = () => {
  

  return (
    <div className="relative">
      {/* Navbar with Border */}
      <header className="bg-white border-b border-gray-200 shadow-md">
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Navbar Brand */}
          <div className="flex items-center space-x-2">
            <GiShoppingBag className="text-2xl text-red-600 hover:text-red-700" />
            <p className="font-bold text-gray-800">SHOPPER</p>
          </div>

          {/* Navbar Links (centered) */}
          <div className="hidden sm:flex gap-6 justify-center flex-1">
            <Button   as={Link} href="/Shop"className="text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 relative">
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
              Shop
            </Button>
            <Button  as = {Link} href="/Men"className="text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 relative">
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
              Men
            </Button>
            <Button  as={Link} href="Women"className="text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 relative">
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
              Women
            </Button>
            <Button as={Link} href="/Kids" className="text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 relative">
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full group-active:w-full group-focus:w-full"></span>
              Kids
            </Button>
          </div>

          {/* Navbar Content (right-aligned) */}
          <div className="flex items-center space-x-4">
            <Button as={Link} href="/Login" className="text-gray-700 hover:text-blue-600 focus:outline-none">
              Login
            </Button>

            <Button as={Link} href="/Signup" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Sign Up
            </Button>

            {/* Shopping Cart Icon */}
            <div className="relative">
              <FiShoppingCart className="text-gray-700 text-2xl hover:text-blue-600" />
            </div>
          </div>
        </nav>
      </header>

      
 </div>

  );
};

export default Auth;

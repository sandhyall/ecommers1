import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { GiShoppingBag } from 'react-icons/gi';
import Link from 'next/link'; // Import Link for Next.js routing
import { LinkIcon } from '@nextui-org/react';

const Footer = () => {
  return (
    <div className="bg-white text-black py-6">
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        
        {/* Top Section: Brand */}
        <div className="text-3xl font-bold text-center text-gray-800 mb-4">
          <GiShoppingBag className="inline-block text-4xl text-red-600 hover:text-red-700" />
          <p className="inline-block ml-2 text-black">SHOPPER</p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="flex justify-center text-black mb-4">
          <ol className="flex space-x-6">
            <li className="hover:text-gray-600 cursor-pointer">Company</li>
            <li className="hover:text-gray-600 cursor-pointer">Offices</li>
            <li className="hover:text-gray-600 cursor-pointer">Product</li>
            <li className="hover:text-gray-600 cursor-pointer">
              <Link href='/Aboutus'>
              About</Link>
              </li>
            <li className="hover:text-gray-600 cursor-pointer">
  <Link href="/Contactus">
    Contact
  </Link>
</li>

          </ol>
        </div>

        {/* Bottom Section: Social Media Icons */}
        <div className="flex justify-center space-x-6 text-2xl text-black">
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 cursor-pointer text-red-600" />
          </Link>
          <Link href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-green-500 cursor-pointer text-green-500" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <TiSocialTwitterCircular className="hover:text-blue-500 cursor-pointer text-blue-800" />
          </Link>
        </div>
        <hr className="border-t-2 border-black my-6" />
            <legend>
            <p className='text-center '>Copyright @2025-All Right Reserved</p>
            </legend>
    
      </div>
    </div>
  );
};

export default Footer;

'use client'
import React from 'react';
import { Button } from '@nextui-org/react'; 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';
import Auth from '../Component/auth/page';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 ">
        <Auth/>
      {/* Header Section */}
      <section className=" text-black text-center py-8">
        <h1 className="text-4xl font-bold">CONTACT US</h1>
      </section>

      {/* Location Section */}
      <section className="my-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896276.1756357952!2d80.8511902804674!3d28.657358798131046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399877deb6525269%3A0x8b2be37f3048da53!2sSurkhet!5e0!3m2!1sen!2snp!4v1737722987834!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        />
      </section>

      {/* Contact Info Section */}
      <section className="bg-white py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaHome className="text-xl text-blue-500" />
                <div>
                  <h5 className="font-semibold">Surkhet Yarichowk Tatapani</h5>
                  <p className="text-gray-600">Nepal, Surkhet Yarichowk Tatapani</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-xl text-blue-500" />
                <div>
                  <h5 className="font-semibold">9766545136</h5>
                  <p className="text-black">Sunday to Saturday, 1 AM to 6 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-xl text-blue-500" />
                <div>
                  <h5 className="font-semibold">Sandhyadahal864@gmail.com</h5>
                  <p className="text-black">Email Us Your Query</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter Your Subject"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button  className="w-full text-black bg-blue-500">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
      
    </div>
  );
}

export default ContactUs;

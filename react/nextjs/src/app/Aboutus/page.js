import React from 'react';
import Auth from '../Component/auth/page';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Aboutus = () => {
    const backgroundStyle = {
        backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/09/49/54/15/1000_F_949541553_F4LDujVX88TM1L0Ka4eD4SD1v9LeNLv0.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        width: '400px', // You can adjust this as needed
    };

    return (
        <div className="bg-slate-50">
            {/* Authentication Section */}
            <Auth />

            {/* About Us Section with Background Image and Social Icons on the Right */}
            <div className="flex flex-row items-center justify-between px-6">
                {/* Content Section */}
                <div className="text-black max-w-xl">
                    <section className="py-8">
                        <div className="text-left">
                            <h4 className="text-xl font-semibold">ABOUT US</h4>
                            <p className="mt-4 max-w-lg mx-auto">
                                E-commerce clothing platforms offer a wide range of apparel for men, women, and kids,
                                 catering to various styles and needs. For men, you can find everything from casual
                                  t-shirts, jeans, and hoodies to formal suits and activewear. Women's clothing includes dresses, 
                                  skirts, blouses, and accessories, while kids' apparel covers everything from baby onesies to school uniforms and outerwear. These platforms often provide seasonal discounts, flash sales, and special promotions like "Buy One, Get One Free" or percentage-off deals, making it easier for customers to grab great deals. Additionally, many offer clearance sales, loyalty programs, and coupon codes, enhancing the shopping experience. With easy return policies, size guides, and various payment options, shopping for clothes online has never been more convenient, while discounts and offers make it affordable to refresh your wardrobe.
                                 </p>
                                {/* Footer Section */}
                                <p className="mt-6">
                                    Made with <span className="text-red-500">❤️</span> by <span className="font-semibold">SANDHYA DAHAL</span>
                                </p>
                        </div>
                    </section>
                </div>

                {/* Image Section */}
                <div className="flex-1 h-full bg-cover bg-center" style={backgroundStyle}></div>

                {/* Social Media Icons Section (Right Side) */}
                <div className="flex flex-col items-center space-y-4 mt-6 ml-4 text-black ">
                    <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                        <FaFacebook className="text-2xl hover:text-blue-600 transition" />
                    </a>
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                        <FaTwitter className="text-2xl hover:text-blue-400 transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                        <FaInstagram className="text-2xl hover:text-pink-600 transition" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;

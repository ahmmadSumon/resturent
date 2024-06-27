import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4 md:flex md:justify-between">
                <div className="mb-6 md:mb-0 md:w-1/4">
                    <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
                    <p>Welcome to <span className='text-2xl font-bold'>Coffee House+</span>, where we serve the finest [cuisine type] in [Parbatipur]. Our mission is to provide a memorable dining experience with our delicious dishes and exceptional service.</p>
                </div>
                <div className="mb-6 md:mb-0 md:w-1/4">
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                    <ul>
                        <li><a href="/menu" className="hover:text-white">Menu</a></li>
                        <li><a href="/table" className="hover:text-white">Reservations</a></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        <li><a href="/blog" className="hover:text-white">Blog</a></li>
                    </ul>
                </div>
                <div className="mb-6 md:mb-0 md:w-1/4">
                    <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
                    <p>
                        Address: Notun Bazar, [Parbatipur], [Dinajpur] 5250<br />
                        Phone: +8801318906033<br />
                        Email: info@restaurant.com
                    </p>
                </div>
                <div className="md:w-1/4">
                    <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link href="https://www.facebook.com/restaurant" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="w-6 h-6 hover:opacity-75" />
                        </Link>
                        <Link href="https://www.twitter.com/restaurant" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="w-6 h-6 hover:opacity-75" />
                        </Link>
                        <Link href="https://www.instagram.com/restaurant" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-6 h-6 hover:opacity-75" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                <p>&copy; 2024 Coffee House+ . All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
``

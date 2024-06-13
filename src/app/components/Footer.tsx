import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4 md:flex md:justify-between">
                <div className="mb-6 md:mb-0 md:w-1/4">
                    <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
                    <p>Welcome to <span className='text-2xl font-bold'>Coffee House+</span>, where we serve the finest [cuisine type] in [city/town]. Our mission is to provide a memorable dining experience with our delicious dishes and exceptional service.</p>
                </div>
                <div className="mb-6 md:mb-0 md:w-1/4">
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                    <ul>
                        <li><a href="/menu" className="hover:text-white">Menu</a></li>
                        <li><a href="/reservations" className="hover:text-white">Reservations</a></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        <li><a href="/blog" className="hover:text-white">Blog</a></li>
                    </ul>
                </div>
                <div className="mb-6 md:mb-0 md:w-1/4">
                    <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
                    <p>
                        Address: 1234 Foodie Lane, [City], [State] 12345<br />
                        Phone: (123) 456-7890<br />
                        Email: info@restaurant.com
                    </p>
                </div>
                <div className="md:w-1/4">
                    <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/restaurant" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/facebook-icon.svg" alt="Facebook" className="w-6 h-6 hover:opacity-75" />
                        </a>
                        <a href="https://www.twitter.com/restaurant" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/twitter-icon.svg" alt="Twitter" className="w-6 h-6 hover:opacity-75" />
                        </a>
                        <a href="https://www.instagram.com/restaurant" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/instagram-icon.svg" alt="Instagram" className="w-6 h-6 hover:opacity-75" />
                        </a>
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

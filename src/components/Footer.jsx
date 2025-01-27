import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto flex flex-col md:gap-10 lg:flex-row text-nowrap justify-between items-center">
                {/* Top left section for Arc Point Marketing */}
                <div className="flex flex-col gap-5 mb-10 md:mb-0 md:w-1/3">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl self-center">Nivex</h1>
                    <p className="text-sm sm:text-base md:text-lg self-center">Health & Joy, Since 1978</p>
                </div>

                {/* Centered buttons section */}
                <div className="flex flex-col items-center mb-10 md:mb-0 md:w-1/3">
                    <div className="flex space-x-2 text-sm sm:space-x-3 md:space-x-5 text-center">
                        <Link to="/" className="text-white hover:text-gray-200 transition-all">Home</Link>
                        <span>|</span>
                        <Link to="/about" className="text-white hover:text-gray-200 transform transition-all">About Us</Link>
                        <span>|</span>
                        <Link to="/contact" className="text-white hover:text-gray-200 transition-all">Contact Us</Link>
                        <span>|</span>
                        <Link to="/quality" className="text-white hover:text-gray-200 transition-all">Quality</Link>
                        <span>|</span>
                        <Link to="/products">Products</Link>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg self-center">Created and designed by: <a className = "text-gray-400" href="https://www.arixy.tech/">arixy tech</a></p>
                </div>

                {/* Bottom centered social media section */}
                <div className="flex flex-col items-center md:w-1/3">
                    <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-5">
                        <h3 className="text-xs sm:text-sm md:text-base mb-0">Follow us on:</h3>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright section */}
            <div className="mt-10 text-center text-xs sm:text-sm md:text-base">
                © {new Date().getFullYear()} Nivex. All rights reserved.
            </div>
        </footer>
    );
}
export default Footer;
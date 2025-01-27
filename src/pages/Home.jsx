import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import backgroundVideo from '../assets/images/19741527-uhd_3840_2160_30fps.mp4'; // Your background video
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import imageSec2 from '../assets/images/grappes.jpg';
import { Link } from 'react-router-dom'; // Import Link for navigation



gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  const scrollToSection = () => {
    gsap.to(window, { duration: 1, scrollTo: '#section2' });
  };

  return (
    <>
      <div>
        {/* Section with Background Video */}
        <div className="relative h-screen flex flex-col md:p-10 sm:pt-10 sm:pb-10 md:flex-row lg:flex-row justify-center gap-20 md:gap-0 lg:gap-0 items-center">
          {/* Video Background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col">
            <h1 className="text-white text-7xl md:text-7xl lg:text-8xl font-bold self-center">
              NIVEX
            </h1>

            {/* Typing effect that stops after completion */}
            <h1 className="text-3xl rounded-lg p-3 backdrop-blur-lg self-center">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Health & Joy')
                    .pauseFor(1000)
                    .changeDeleteSpeed(1)
                    .deleteAll()
                    .pauseFor(1000);
                  typewriter.typeString('Since 1978')
                    .start();
                }}
              />
            </h1>
          </div>
          {/* Scroll Button */}
          <div className="absolute bottom-10 w-full flex justify-center">
            <button
              onClick={scrollToSection}
              className="bg-white flex justify-center text-black rounded-full w-10 h-10 shadow-lg hover:w-12 hover:h-12 hover:shadow-white-glow transition-all floating-arrow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 self-center"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Section 2 */}
        <div
          id="section2"
          className="bg-white text-white flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageSec2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            minHeight: '100vh', // Ensure it takes up full viewport height
          }}
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-3 w-full gap-10 justify-around m-5 sm:p-5">
            {/* Our Farms Card */}
            <div className="p-4 backdrop-blur-lg bg-black bg-opacity-20 rounded-xl text-center">
              <h1 className="text-2xl font-bold mb-3">Our Farms</h1>
              <p className="text-sm mb-4">
                Learn more about our sustainable farming practices that bring you the best quality produce.
              </p>
              <Link to="/farms">
                <div className="relative inline-block group">
                  <button className="text-white border px-4 py-2 rounded-full transition button1 type1">
                    <span className="btn-txt">
                      See More
                    </span>
                  </button>
                  <span className="absolute top-1/2 transform -translate-y-1/2 right-[-30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>

            {/* Our Products Card */}
            <div className="p-4 backdrop-blur-lg bg-black bg-opacity-20 rounded-xl text-center">
              <h1 className="text-2xl font-bold mb-3">Our Products</h1>
              <p className="text-sm mb-4">
                Discover our wide range of fresh, organic, and high-quality products tailored for you.
              </p>
              <Link to="/products">
                <div className="relative inline-block group">
                  <button className="text-white border px-4 py-2 rounded-full transition button1 type1">
                    <span className="btn-txt">
                      See More
                    </span>
                  </button>
                  <span className="absolute top-1/2 transform -translate-y-1/2 right-[-30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>

            {/* Our Clients Card */}
            <div className="p-4 backdrop-blur-lg bg-black bg-opacity-20 rounded-xl text-center">
              <h1 className="text-2xl font-bold mb-3">Our Clients</h1>
              <p className="text-sm mb-4">
                Meet our trusted partners and satisfied customers who believe in our mission.
              </p>
              <Link to="/about">
                <div className="relative inline-block group">
                  <button className="text-white border px-4 py-2 rounded-full transition button1 type1">
                    <span className="btn-txt">
                      See More
                    </span>
                  </button>
                  <span className="absolute top-1/2 transform -translate-y-1/2 right-[-30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7m0 0l-7 7m7-7H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

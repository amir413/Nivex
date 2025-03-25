import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import backgroundVideo from "../assets/images/19741527-uhd_3840_2160_30fps.mp4";
import imageSec2 from "../assets/images/grappes.jpg";

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  const scrollToSection = () => {
    gsap.to(window, { duration: 1, scrollTo: "#section2", autoKill: true });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="relative z-10">
          <h1 className="text-white text-7xl font-bold">NIVEX</h1>
          <h1 className="text-3xl p-3 backdrop-blur-lg rounded-lg text-white">
            <Typewriter
              options={{
                strings: ["Health & Joy", "Since 1978"],
                autoStart: true,
                loop: false,
              }}
            />
          </h1>
        </div>
        <button
          onClick={scrollToSection}
          className="absolute bottom-10 w-12 h-12 bg-white text-black rounded-full shadow-md hover:scale-110 transition-transform flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Section 2 */}
      <div
        id="section2"
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${imageSec2})` }}
      >
        <div className="grid lg:grid-cols-3 gap-20 p-5 text-center w-full max-w-6xl">
          {/* Cards (unchanged style and size) */}
          <div className="p-10 bg-black bg-opacity-30 backdrop-blur-lg rounded-xl text-white">
            <h1 className="text-2xl font-bold mb-3">Our Farms</h1>
            <p className="text-sm mb-4">Learn about our sustainable farming.</p>
            <Link to="/farms">
              <button className="text-white border px-4 py-2 rounded-full transition-transform hover:scale-105">
                See More →
              </button>
            </Link>
          </div>

          <div className="p-10 bg-black bg-opacity-30 backdrop-blur-lg rounded-xl text-white">
            <h1 className="text-2xl font-bold mb-3">Our Products</h1>
            <p className="text-sm mb-4">Explore our fresh, organic products.</p>
            <Link to="/products">
              <button className="text-white border px-4 py-2 rounded-full transition-transform hover:scale-105">
                See More →
              </button>
            </Link>
          </div>

          <div className="p-10 bg-black bg-opacity-30 backdrop-blur-lg rounded-xl text-white">
            <h1 className="text-2xl font-bold mb-3">Our Clients</h1>
            <p className="text-sm mb-4">Meet our trusted partners.</p>
            <Link to="/about">
              <button className="text-white border px-4 py-2 rounded-full transition-transform hover:scale-105">
                See More →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

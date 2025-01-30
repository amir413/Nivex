import React, { useState, useRef } from 'react';
import { FaArrowDown, FaArrowUp, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// Import images
import farm1 from '../assets/images/2024_12_20_02_59_IMG_2821.PNG.png';
import farm2 from '../assets/images/IMG_8437.jpg';
import farm3 from '../assets/images/IMG_7517.png';
import farm4 from '../assets/images/2024_12_22_13_58_IMG_2843.jpg';
import farm5 from '../assets/images/grapes45.jpg';
import farm6 from '../assets/images/grappes.jpg';
import farm7 from '../assets/images/pexels-robbif-28214194.jpg';
import farm1white from '../assets/images/2024_12_20_02_59_IMG_2821.PNG.png';
import farm2white from '../assets/images/IMG_8437.jpg';
import farm3white from '../assets/images/IMG_7517.png';
import farm4white from '../assets/images/2024_12_22_13_58_IMG_2843.jpg';
import farm5white from '../assets/images/grapes45.jpg';
import farm6white from '../assets/images/grappes.jpg';
import farm7white from '../assets/images/pexels-robbif-28214194.jpg';

const Farms = () => {
  const images = [farm1, farm2, farm3, farm4, farm5, farm6, farm7];
  const whiteImages = [farm1white, farm2white, farm3white, farm4white, farm5white, farm6white, farm7white];
  const description = [
    'Kafr Dawood Farm spans 160 feddans, producing:Grapes (45 feddans): 400 tons annually (May–July).Strawberries (25 feddans): 500 tons annually.Greenhouse crops (35 feddans): 300 tons of beans and peppers.Onions (15 feddans): 500 tons annually.Sugar peas & mangetout (10 feddans): 60 tons annually.',
    'Pharaohs Farm spans 120 feddans, where both grapevines and palm trees flourish alongside a state-of-the-art packing station. Each season, the farm produces 700 tons of premium grapes, underscoring its dedication to high-quality agricultural practices and efficient production processes.',
    'Abu Azaim 1 farm spans 75 feddans, with 15 feddans dedicated to the cultivation of mangoes and the remaining 60 feddans used for grape production. Each season, the farm yields an impressive 400 tons of grapes and 60 tons of mangoes, reflecting the farm’s strong commitment to diversity and excellence in agricultural practices.',
    'We are excited to announce the development of a new farm, designed to bring innovative agricultural practices to life. This project will soon add a new dimension to our growing portfolio, expanding our capabilities and enhancing our production capacity for the future.',
    'Cairo 2000 farm covers 30 feddans, where both grapevines and palm trees thrive. Each season, the farm produces 70 tons of high-quality grapes, demonstrating its dedication to sustainable farming practices and its commitment to delivering premium agricultural products.',
    'El Khatatba farm spans an impressive 120 feddans, dedicated to the cultivation of high-quality grapes. Each season, the farm yields an abundant 800 tons of grapes, showcasing both the scale of production and the farm’s commitment to excellence in agricultural practices.',
    'Rigwa Farm covers 75 feddans, fully dedicated to the cultivation of high-quality onions. With a focus on sustainable farming techniques, the farm produces an abundant harvest each season, ensuring a reliable supply of fresh, premium onions.'
  ];
  const texts = ['Kafr daod', 'Pharaohs', 'Abu AL-Azaim1', 'Abu AL-Azaim 2', 'Cairo 2000', 'Al Khatatba', 'Rigwa'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [textAnimation, setTextAnimation] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(true); // Ensure always visible
  const [imageTransitionInProgress, setImageTransitionInProgress] = useState(false);

  // Reference to the second section
  const nextSectionRef = useRef(null);

  const nextImage = () => {
    setImageTransitionInProgress(true);
    setTextAnimation(true);
    setOpacity(0);
    setRotationDegree((prevDegree) => prevDegree + 360);

    setArrowVisible(false);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setOpacity(1);
      setTextAnimation(false);
      setArrowVisible(true);
      setImageTransitionInProgress(false);
    }, 1500);
  };

  const prevImage = () => {
    setImageTransitionInProgress(true);
    setTextAnimation(true);
    setOpacity(0);
    setRotationDegree((prevDegree) => prevDegree - 360);

    setArrowVisible(false);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setOpacity(1);
      setTextAnimation(false);
      setArrowVisible(true);
      setImageTransitionInProgress(false);
    }, 1500);
  };

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col h-screen relative overflow-hidden bg-black">
        <div className="w-full h-full relative flex justify-center items-center">
          {/* Circle 1 */}
          <div
            className="absolute w-full h-full"
            style={{
              clipPath: 'circle(33% at 50% 50%)',
              transform: `rotate(${rotationDegree}deg) scale(2.13)`,
              opacity: opacity,
              transition: 'transform 1500ms ease-in-out, opacity 500ms ease-in-out',
              boxShadow: '0 0 0 10px white',
              zIndex: 1,
            }}
          >
            <img
              src={images[currentImageIndex]}
              alt={`Farm ${currentImageIndex + 1}`}
              className="object-cover w-full h-full"
              style={{
                objectPosition: 'center 100%',
              }}
            />
          </div>

          {/* Text Animation */}
          <div
            className={`absolute inset-0 flex justify-center items-center text-white text-6xl transition-all duration-500 ease-in-out ${textAnimation ? 'opacity-0 translate-y-[-50px]' : 'opacity-100'}`}
            style={{
              letterSpacing: '14px',
              padding: '0 10px',
              textAlign: 'center',
              zIndex: 2,
              transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
            }}
          >
            <div className="text-container text-3xl md:text-4xl lg:text-6xl" style={{ position: 'relative' }}>
              {texts[currentImageIndex]}
              <div
                className="absolute top-[100%] w-full"
                style={{
                  height: '2px',
                  backgroundColor: 'white',
                  marginTop: '10px',
                }}
              />
            </div>
          </div>

          {/* Circle 2 */}
          <div
            className="absolute w-full h-full"
            style={{
              clipPath: 'circle(20% at 50% 50%)',
              transform: `rotate(${rotationDegree}deg) scale(2)`,
              opacity: opacity,
              transition: 'transform 1500ms ease-in-out, opacity 500ms ease-in-out',
              transitionDelay: '250ms',
              boxShadow: '0 0 0 10px white',
              zIndex: 1,
            }}
          >
            <div
              className="absolute w-full h-full bg-black bg-opacity-50"
              style={{ clipPath: 'circle(20% at 50% 50%)' }}
            />
            <img
              src={images[currentImageIndex]}
              alt={`Farm ${currentImageIndex + 1}`}
              className="object-cover w-full h-full"
              style={{
                objectPosition: 'center 100%',
              }}
            />
          </div>

          {/* Circle 3 */}
          <div
            className="absolute w-full h-full"
            style={{
              clipPath: 'circle(10% at 50% 50%)',
              transform: `rotate(${rotationDegree}deg) scale(1.5)`,
              opacity: opacity,
              transition: 'transform 1500ms ease-in-out, opacity 500ms ease-in-out',
              transitionDelay: '500ms',
              boxShadow: '0 0 0 10px white',
              zIndex: 1,
            }}
          >
            <img
              src={images[currentImageIndex]}
              alt={`Farm ${currentImageIndex + 1}`}
              className="object-cover w-full h-full"
              style={{
                objectPosition: 'center 100%',
              }}
            />
          </div>
        </div>

        {/* Next Image Button */}
        <button
          className="absolute bottom-8 right-8 text-white lg:px-6 lg:py-3 z-[3] text-lg font-semibold rounded hover:bg-opacity-75 transition flex items-center justify-center space-x-2"
          onClick={nextImage}
        >
          <span>Next</span>
          <FaArrowRight />
        </button>

        {/* Previous Image Button */}
        <button
          className="absolute bottom-8 left-8 text-white lg:px-6 lg:py-3 z-[3] text-lg font-semibold rounded hover:bg-opacity-75 transition flex items-center justify-center space-x-2"
          onClick={prevImage}
        >
          <FaArrowLeft />
          <span>Previous</span>
        </button>

        {/* Arrow button to scroll to the next section */}
        <button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white lg:px-6 lg:py-3 z-[3] text-lg font-semibold rounded hover:bg-opacity-75 transition flex items-center justify-center space-x-2 hidden md:flex"
          onClick={scrollToNextSection}
        >
          <span className="w-1/2 lg:w-full">Discover more</span>
          <FaArrowDown />
        </button>
      </div>

      {/* New Section with Text on the Left and Image on the Right (with dark and blurry background) */}
      <div
        ref={nextSectionRef}
        className="flex items-center justify-center h-[100vh] px-12 py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${whiteImages[currentImageIndex]})`,
        }}
      >
        {/* Overlay with blur and darkening */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
          style={{ zIndex: 0 }}
        />
        <div className="w-full lg:w-1/2 text-white text-4xl md:text-5xl lg:text-6xl text-center lg:text-left relative z-10">
          <h2 className="font-[200em] text-[4.25rem]">{texts[currentImageIndex]}</h2>
          <p className="pt-4 font-[200] text-[24px] text-gray-400 md:text-[32px]">{description[currentImageIndex]}</p>
          </div>
      </div>

      {/* Always Visible Back to Top Button */}
      <button
        className="absolute top-[103%] left-1/2 transform -translate-x-1/2 text-white px-6 py-3 z-[3] text-lg font-semibold rounded hover:bg-opacity-75 transition flex items-center justify-center space-x-2 hidden md:flex"
        onClick={scrollToTop}
      >
        <span>Back to top</span>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Farms;

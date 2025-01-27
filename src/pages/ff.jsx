import React, { useState, useRef } from 'react';
import { FaArrowDown, FaArrowUp, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

// Import images
import farm1 from '../assets/images/grapes.jpg';
import farm2 from '../assets/images/C0050T01.jpg';
import farm3 from '../assets/images/2024_12_20_02_59_IMG_2821.PNG.png';
import farm4 from '../assets/images/2024_12_22_13_58_IMG_2843.jpg';
import farm5 from '../assets/images/2024_12_22_13_54_IMG_2863.jpg';
import farm6 from '../assets/images/2024_12_22_13_51_IMG_2867.jpg';
import farm7 from '../assets/images/2024_12_22_13_48_IMG_2877.jpg';
import farm1white from '../assets/images/grapes.jpg';
import farm2white from '../assets/images/C0050T01.jpg';
import farm3white from '../assets/images/2024_12_20_02_59_IMG_2821.PNG.png';
import farm4white from '../assets/images/2024_12_22_13_58_IMG_2843.jpg';
import farm5white from '../assets/images/2024_12_22_13_54_IMG_2863.jpg';
import farm6white from '../assets/images/2024_12_22_13_51_IMG_2867.jpg';
import farm7white from '../assets/images/2024_12_22_13_48_IMG_2877.jpg';

const Farms = () => {
  const images = [farm1, farm2, farm3, farm4, farm5, farm6, farm7];
  const whiteImages = [farm1white, farm2white, farm3white, farm4white, farm5white, farm6white, farm7white];
  const texts = [
    'Kafr daod',
    'Pharaohs',
    'Abu Azaam 1',
    'Abu Azaam 2',
    'Cairo 2000',
    'El Khatatba',
    'Rigwa',
  ];

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
        style={{
          backgroundImage: `url(${whiteImages[currentImageIndex]})`,
        }}
      >
        <div className="bg-black w-[50%] h-[110vh] relative ">
          fgdfgadf
        </div>
        {/* Overlay with blur and darkening */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
          style={{ zIndex: 0 }}
        />
        <div className="w-full lg:w-1/2 text-white text-4xl md:text-5xl lg:text-6xl text-center lg:text-left relative z-10">
          <h2 className="font-bold">{texts[currentImageIndex]}</h2>
        </div>
        <div className="w-full lg:w-1/2"></div>
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

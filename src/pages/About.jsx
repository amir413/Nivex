import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import biosiegel from '../assets/images/biosiegel.png';
import globalGAP from '../assets/images/globalGAP.jpg';
import bros from '../assets/images/bros.png';
import sedex from '../assets/images/Sedex Certification.png';
import aboutImage from '../assets/images/pexels-ale-garcia-386370-3339244.jpg';
import smallImage from '../assets/images/photo_2024-12-16_01-21-36.jpg';

const About = () => {
  const stats = [
    { title: 'Feddans', value: 2400 },
    { title: 'Greenhouses', value: 8000 },
    { title: 'Packhouses', value: 5 },
    { title: 'Satisfied Customers', value: 100, unit: '%' },
    { title: 'Certificates', value: 5 },
  ];

  // State for animations
  const [isVisible, setIsVisible] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [isTextSectionVisible, setIsTextSectionVisible] = useState(false);

  const circleRef = useRef(null);
  const paragraphRef = useRef(null);
  const textSectionRef = useRef(null);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) observer.observe(circleRef.current);
    if (textSectionRef.current) observer.observe(textSectionRef.current);

    return () => {
      if (circleRef.current) observer.unobserve(circleRef.current);
      if (textSectionRef.current) observer.unobserve(textSectionRef.current);
    };
  }, []);

  return (
    <div className="text-gray-800">
      {/* Custom CSS for animations */}
      <style>
        {`
          .circle-stroke {
            animation: ${isVisible ? 'draw-circle 2.5s ease-out forwards' : 'none'};
          }

          @keyframes draw-circle {
            0% {
              stroke-dashoffset: 344;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }

          .animate-slide-in {
            animation: slideIn 2s ease-out forwards;
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div
  className="min-h-screen text-white py-24 lg:py-32 px-6 bg-cover bg-center flex flex-col justify-center items-center"
  style={{ backgroundImage: `url(${aboutImage})` }}
>
<div className="text-center mb-16 backdrop-blur-lg p-8 rounded-lg bg-black bg-opacity-30">
    <h1 className="text-4xl lg:text-6xl font-bold pt-4 leading-tight mb-4">About Nivex</h1>
    <p
      ref={paragraphRef}
      className={`text-xl lg:text-2xl max-w-3xl mx-auto ${
        isParagraphVisible ? 'animate-slide-in' : ''
      }`}
    >
      A Family-Owned Company Specializing in Growing and Exporting Fruits and Vegetables.
    </p>
  </div>

  <div
    ref={textSectionRef}
    className={`flex flex-col md:flex-row justify-between items-center gap-16 w-full max-w-6xl ${
      isTextSectionVisible ? 'animate-slide-in' : ''
    }`}
  >
    <div className="flex-1">
      <img
        src={smallImage}
        alt="Nivex Farms"
        className="rounded-lg shadow-xl w-full h-auto object-cover"
      />
    </div>
    <div className="flex-1 bg-black bg-opacity-30 backdrop-blur-lg py-14 lg:py-20 px-8 rounded-lg shadow-lg">
      <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-white">Serving the Global Market</h2>
      <p className="text-[] lg:text-xl leading-relaxed text-gray-300">

      Mr. Nabil Yacoub embarked on his journey as a student at the Faculty of Agriculture, driven by a deep passion for the agricultural industry. In 1978, he took a bold step and established his own company, laying the foundation for what would become one of Egypt's leading enterprises in the export and import of vegetables and fruits. Through years of dedication, innovation, and expertise, Mr. Yacoub has transformed his business into a major player in the global market. His success story is not just one of personal achievement,  Mr. Yacoub has shared his extensive knowledge with his family, empowering them to join him in growing and advancing the business. Today, his company stands as a symbol of excellence, quality, and sustainability in the agricultural sector, maintaining a pivotal role in Egypt’s trade landscape.      </p>
    </div>
  </div>
</div>



      {/* Stats Section */}
      <div className="py-16 flex justify-center flex-wrap gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center w-60 h-60" ref={circleRef}>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                className="circle-stroke"
                stroke="#22c362"
                strokeWidth="6"
                fill="none"
                strokeDasharray="344"
                strokeDashoffset="344"
              />
            </svg>
            <div className="z-10 text-center">
              <h2 className="text-lg font-bold mb-2">{stat.title}</h2>
              <div className="text-3xl font-extrabold text-green-500">
                <CountUp start={0} end={stat.value} duration={2.5} /> {stat.unit || ''}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Section */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Work in Action</h2>
        <p className="text-lg text-gray-600 mb-8">
          We earn your trust through customer ratings and recognized certifications.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[biosiegel, globalGAP, bros, sedex].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Certification ${index + 1}`}
              className="w-36 h-36 rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About
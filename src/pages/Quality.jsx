import React, { useState, useEffect } from 'react';
import qualityImage from '../assets/images/Picture2.png';
import qualityImage2 from '../assets/images/C0016T01.jpg';
import qualityImage3 from '../assets/images/pixelcut-export.jpeg';
import Loading from '../components/Loading'; // Import your Loading component

const Quality = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [
      qualityImage,
      qualityImage2,
      qualityImage3,
    ];

    let loadedImages = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === images.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  if (loading) {
    return <Loading />; // Display the Loading component while assets are loading
  }

  return (
    <div className="bg-white px-8 py-16">
      {/* Section Header */}
      <div className="text-center pt-[5%] mb-12">
        <h1 className="text-6xl font-bold text-gray-800">Our Quality Standards</h1>
        <p className="mt-4 text-lg text-gray-600">
          At Nivex, we uphold the highest standards to ensure our products meet and exceed customer expectations.
        </p>
      </div>
      {/* Section 2: Image on Left */}
      <div className="flex flex-col md:flex-row items-center mb-16 md:flex-row-reverse">
        {/* Text on Right */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Nivex: A Promise of Fresh, Healthy Produce</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Nivex, we take immense pride in providing fresh, high-quality fruits and vegetables to our customers. Each product is grown with care and delivered with love, ensuring a smile on every face. Our goal is to promote health and well-being by offering nature's finest produce, grown sustainably and managed with the utmost dedication. With Nivex, you're not just receiving food; you're receiving a promise of freshness, quality, and care for a healthier tomorrow.
          </p>
        </div>
        {/* Image on Left */}
        <div className="md:w-1/2">
          <img
            src={qualityImage2}
            alt="Commitment"
            className="h-[400px] md:h-[600px] w-full object-cover rounded-lg shadow-lg" // Responsive height
          />
        </div>
      </div>

      {/* Section 1: Image on Right */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        {/* Text on Left */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Quality Process</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From start to finish, every step in our process is meticulously crafted to ensure the highest quality in all that we do. At Nivex, we don’t just grow produce; we nurture it with care and precision. We begin by selecting only the finest seeds, chosen for their ability to thrive in sustainable conditions. As our produce grows, we use advanced technology and time-tested techniques to monitor every aspect of its development, ensuring that only the best reaches our customers. Our dedicated team works tirelessly to handle, pack, and deliver each item with the utmost care. Every detail is important, from the careful inspection of each product to its final delivery, ensuring it arrives fresh and ready to delight. Customer satisfaction is our ultimate goal, and we stand by the quality of every item we provide, ensuring that you receive only the best nature has to offer. At Nivex, quality isn’t just a promise; it’s a commitment that we honor in every step of our process.
          </p>
        </div>
        {/* Image on Right */}
        <div className="md:w-1/2">
          <img
            src={qualityImage}
            alt="Quality Process"
            className="h-[400px] md:h-[600px] w-full object-cover rounded-lg shadow-lg" // Responsive height
          />
        </div>
      </div>

      {/* Section 3: Image on Right */}
      <div className="flex flex-col md:flex-row items-center mb-16 md:flex-row-reverse">
        {/* Text on Left */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Powering Tomorrow: Nivex’s Green Energy Commitment</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Nivex, we’re committed to a sustainable future by using advanced technology to conserve water at every stage of our process. But that’s just the beginning—we’re working tirelessly to ensure that all of our energy needs are met through renewable sources. Our goal is to power every operation with clean, green energy, reducing our carbon footprint and promoting a healthier planet. By choosing Nivex, you're supporting a brand that’s not only dedicated to freshness, but also to shaping a sustainable tomorrow.
          </p>
        </div>
        {/* Image on Right */}
        <div className="md:w-1/2">
          <img
            src={qualityImage3}
            alt="Quality Process"
            className="h-[400px] md:h-[600px] w-full object-cover rounded-lg shadow-lg" // Responsive height
          />
        </div>
      </div>
    </div>
  );
};

export default Quality;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from '../components/Calendar'; // Import the Calendar component
import FruitsData from '../components/FruitsData';  // Import the FruitsData if it's the default export

const FruitCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to show or hide details for each fruit
  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="transition-all pt-[80px] bg-[#0B6623] overflow-hidden">
      {FruitsData.map((fruit, index) => (
        <div
          key={index}
          className="relative flex flex-col sm:flex-col lg:flex-row xl:flex-row items-center justify-start gap-20 p-5"
          style={{ backgroundColor: `${fruit.color}` }}
        >
          {/* Fruit Image with Parallax */}
          <div
            className="min-w-48 h-48 sm:min-w-64 sm:h-64 md:min-w-80 md:h-80 xl:min-w-96 xl:h-96 rounded-full bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${fruit.image})` }}
          />

          {/* Fruit Details */}
          <motion.div
            className="text-center sm:text-left flex flex-col justify-start min-w-0.5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-white drop-shadow-xl font-bold mb-3">
              {fruit.title}
            </h2>

            {/* Description */}
            <p className="text-white mb-4">{fruit.description[0]}</p>

            <button
              className="mt-4 px-5 py-2 shadow button2 type2"
              onClick={() => toggleDetails(index)}
            >
              {activeIndex === index ? 'Hide Details' : 'Learn More'}
            </button>
          </motion.div>

          {/* Description and Calendar Section */}
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full flex flex-col items-center mt-4"
              >
                {/* Detailed Description */}
                <div className="rounded-lg w-full lg:w-2/3 md:w-2/3 mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold break-words">
                    {fruit.title}
                  </h3>
                  {fruit.description.map((desc, i) => (
                    <p key={i} className="text-white mb-2">
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Calendar */}
                <div className="rounded-lg w-full sm:w-5/6 xl:w-2/3">
                  <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold mb-3">
                    {fruit.title} Calendar
                  </h3>
                  <Calendar availabilityData={fruit.calendarData} fruitImage={fruit.image} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FruitCard;

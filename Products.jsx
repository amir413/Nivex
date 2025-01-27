import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from '../components/Calendar'; // Import the Calendar component
import FruitsData from '../components/FruitsData';
import {FruitsDataComponent} from '../components/FruitsData'; // Import the FruitsData component

const FruitCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  FruitsDataComponent();

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="transition-all overflow-hidden"> {/* Prevents horizontal scroll */}
      {/* <div className='h-36'></div> */}
      {/* Loop Through Fruits */}
      {FruitsData.map((fruit, index) => (
        <div
          key={index}
          className="relative flex md:flex-row items-center justify-start h-screen gap-20 p-5"
          style = {{ backgroundColor: `${fruit.color}`}}
        >
          {/* Fruit Image with Parallax */}
            <div
              className="min-w-48 h-48 sm:min-w-64 sm:h-64 md:min-w-80 md:h-80 rounded-full bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url(${fruit.image})` }}
            />

          {/* Fruit Details */}
          <motion.div
            className="text-center md:text-left flex flex-col justify-start min-w-0.5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-xl font-bold mb-3"
            >
              {fruit.title}
            </h2>
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
                className="w-full md:w-2/3 flex flex-col items-center"
              >
                {/* Description */}
                <div className="rounded-lg w-full lg:w-2/3 md:w-2/3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold break-words">
                    {fruit.title}
                  </h3>
                  {fruit.description.map((desc, i) => (
                    <p key={i} className="text-white mb-2">
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Calendar */}
                <div className="rounded-lg w-5/6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
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

import React from 'react';

const Calendar = ({ availabilityData, fruitImage }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="calendar-container mt-3">
      {/* Scrollable Container */}
      <div className="overflow-x-auto">
        <table className="calendar-table border-collapse border border-gray-300 w-full min-w-[500px] text-center text-[10px]">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1 bg-gray-100">
                Variety
              </th>
              {months.map((month) => (
                <th
                  key={month}
                  className="border border-gray-300 px-2 py-1 bg-gray-100"
                >
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {availabilityData.map((variety, index) => (
              <tr key={index}>
                {/* Display Variety Name */}
                <td className="border border-gray-300 px-2 py-1 font-medium text-gray-700">
                  {variety.name}
                </td>
                {/* Display Images for Available Months */}
                {variety.months.map((available, i) => (
                  <td key={i} className="border border-gray-300 px-2 py-1">
                    {available && (
                      <img
                        src={fruitImage}
                        alt={`${variety.name} availability`}
                        className="w-3 h-3 mx-auto rounded-full"
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;

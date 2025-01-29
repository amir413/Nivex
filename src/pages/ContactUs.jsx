import React from "react";

const ContactUs = () => {
  return (
    <div className="font-sans text-gray-800 bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-grow pb-[2.0%] pt-0 sm:pt-[5%]">
        {/* Header */}
        <div className="text-center  mt-6 mb-6 py-10">
          <h1 className="text-4xl sm:text-3xl mt-14 md:text-4xl font-bold">Get in Touch</h1>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 px-4 md:px-8 mb-10">
          {/* Form Section */}
          <div className="bg-white p-6">
            <h2 className="text-2xl sm:text-xl md:text-2xl font-bold mb-4">
              We’re happy to contact with you!
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border-b bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border-b bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Interested In"
                className="w-full px-4 py-2 border-b bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border-b bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 border-b bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Divider */}
          <hr className="my-6 border-t border-gray-300 md:hidden" />

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl sm:text-lg md:text-xl font-bold mb-2">Call Us</h2>
              <p className="text-gray-600">
  (+20) 01270603520 <br />
  <a href="mailto:info@nivexfarms.com" className="text-blue-600 hover:underline">
    info@nivexfarms.com
  </a>
</p>

            </div>
            <div>
              <h2 className="text-xl sm:text-lg md:text-xl  font-bold mb-2">Visit Us</h2>
              <p className="text-gray-600">
                El Obour city - 2nd industrial zone part 6 - block 20002
              </p>
            </div>

            {/* Map Section */}
            <div>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.5355501066797!2d31.439801075351028!3d30.19325867484894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581079194ebc5b%3A0x66f8109f10682372!2sNivex%20Farms!5e0!3m2!1sen!2seg!4v1732883112617!5m2!1sen!2seg"
                height="300"
                className="border-0 rounded-lg w-full mb-[25%]"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
    </div>
  );
};

export default ContactUs;

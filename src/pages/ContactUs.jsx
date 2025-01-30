import React, { useState } from "react";
import axios from "axios"; // Import axios

const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phoneNumber: "",
    message: "",
    subject: "",
  });

  const [status, setStatus] = useState(""); // Success/Error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://nivex-backend.vercel.app/send-email", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setStatus("Email sent successfully!");
        setFormData({
          from_name: "",
          from_email: "",
          phoneNumber: "",
          message: "",
          subject: "",
        });
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-white flex flex-col">
      <div className="flex-grow pb-4 sm:pt-[5%] pt-0">
        <div className="text-center mt-6 mb-6 py-10">
          <h1 className="text-4xl sm:text-3xl font-bold">Get in Touch</h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 mb-10">
          {/* Contact Form */}
          <div className="bg-white p-6">
            <h2 className="text-2xl sm:text-xl font-bold mb-4">We are happy to hear from you!</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                value={formData.from_name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                value={formData.from_email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>

            {status && (
              <p className={`mt-4 text-center ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </div>

          <hr className="my-6 border-t border-gray-300 md:hidden" />

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-2">Call Us</h2>
              <p className="text-gray-600">
                (+20) 01270603520 <br />
                <a href="mailto:info@nivexfarms.com" className="text-blue-600 hover:underline">
                  info@nivexfarms.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Visit Us</h2>
              <p className="text-gray-600">El Obour city - 2nd industrial zone part 6 - block 20002</p>
            </div>

            <div>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.5355501066797!2d31.439801075351028!3d30.19325867484894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581079194ebc5b%3A0x66f8109f10682372!2sNivex%20Farms!5e0!3m2!1sen!2seg!4v1732883112617!5m2!1sen!2seg"
                height="300"
                className="border-0 rounded-lg w-full mb-10"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, PhoneCall } from "lucide-react";
import phoneImg from "../assets/phone.png";

const slideLeft = {
  hidden: { x: -80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { x: 80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const ContactSection = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-white">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-start gap-8 md:gap-12">
        {/* Left Form */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-md flex-1 p-6 sm:p-8 md:p-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-henju text-black mb-2">
            <span className="text-[#4FA097]">Contact</span> us.
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            Have questions or feedback? We’re here to help.
            <br className="hidden sm:block" />
            Send us a message and we’ll respond within 24 hours.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                className="border rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4FA097] w-full"
              />
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                className="border rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4FA097] w-full"
              />
            </div>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="border rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4FA097] w-full"
            />

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows="4"
              className="border rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4FA097] w-full"
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                className="accent-[#4FA097] w-4 h-4"
              />
              <label htmlFor="privacy" className="text-gray-600">
                I agree to our{" "}
                <span className="text-[#4FA097] underline cursor-pointer">
                  privacy policy
                </span>
              </label>
            </div>

            {/* Button */}
            <button className="mt-2 bg-[#4FA097] text-white w-full py-3 rounded-full flex items-center justify-center gap-2 font-medium hover:bg-[#439285] transition-all">
              Send
              <span className="p-1 rounded-full bg-white text-[#4FA097]">
                <ArrowRight size={18} />
              </span>
            </button>
          </form>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-6 w-full"
        >
          {/* Image */}
          <div className="rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] w-full max-h-[400px]">
            <img
              src={phoneImg}
              alt="Phone"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Contact */}
          <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 flex flex-col gap-4 transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-3 border-b pb-4">
              <Mail className="text-[#71b6ae] w-6 h-6" />
              <div>
                <p className="text-sm sm:text-base text-gray-400">Email</p>
                <p className="text-black">revolved.clinic@info.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneCall className="text-[#71b6ae] w-6 h-6" />
              <div>
                <p className="text-sm sm:text-base text-gray-400">Phone</p>
                <p className="text-black">+61 2 1234-5678</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

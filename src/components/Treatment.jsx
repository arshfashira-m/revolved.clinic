import React from "react";
import { motion } from "framer-motion";

import person2 from "../assets/person2.png";
import yellowTablet from "../assets/yellow-tablet.png";
import { ArrowRight } from "lucide-react";

const Treatment = () => {
  return (
    <section className="w-full">
      {/* Heading */}
      <div className="bg-white text-center px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-14">
        <motion.h2
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-5xl font-henju font-light  leading-snug"
        >
          <span className="text-[#0C7885]">Personalized Treatment</span>{" "}
          <span className="text-black">for You</span>
        </motion.h2>
        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 text-xs sm:text-sm md:text-base font-quinn text-gray-700"
        >
          Offer safe, high-quality, evidence-based treatment and care.
        </motion.p>
      </div>

      {/* Content Section */}
      <div className="bg-[#0C7885] text-white px-4 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 font-quinn flex flex-col items-center">
        <div className="relative w-full max-w-6xl flex flex-col md:flex-row md:justify-center">
          {/* Center Big Image */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full sm:w-4/5 md:w-3/5 mx-auto"
          >
            <img
              src={person2}
              alt="Person"
              className="rounded-2xl w-full object-cover"
            />
          </motion.div>

          {/* Overlay Cards Container */}
          <div className="flex flex-col gap-4 mt-6 md:mt-0 md:absolute md:left-6 lg:left-12 md:top-1/4 md:w-60">
            {/* About Card */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative backdrop-blur-3xl bg-[#013845CC] text-white rounded-2xl p-4 sm:p-6 overflow-hidden group"
            >
              <h4 className="font-henju font-light  text-base sm:text-lg text-[#8DE8C4] mb-2">
                About
              </h4>
              <p className="flex justify-between text-xs sm:text-sm">
                <span>Name</span> <span className="text-[#8DE8C4]">Mike</span>
              </p>
              <p className="flex justify-between text-xs sm:text-sm">
                <span>Age</span> <span className="text-[#8DE8C4]">32</span>
              </p>
              <p className="flex justify-between text-xs sm:text-sm">
                <span>BMI</span> <span className="text-[#8DE8C4]">29.5</span>
              </p>
            </motion.div>

            {/* Goal Card */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative backdrop-blur-3xl bg-[#013845CC] text-xs sm:text-sm text-white rounded-2xl p-4 sm:p-6 overflow-hidden group flex justify-between"
            >
              <h4 className="font-henju font-light ">Goal</h4>
              <p className="text-[#8DE8C4]">Weight Loss</p>
            </motion.div>

            {/* History Card */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative backdrop-blur-3xl bg-[#013845CC] text-white text-xs sm:text-sm rounded-2xl p-4 sm:p-6 overflow-hidden group"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-henju font-light ">History</h4>
                <p className="text-[#8DE8C4]">Ex-smoker</p>
              </div>
              <p className="text-[#8DE8C4] text-right">Pre-diabetic</p>
            </motion.div>
          </div>

          {/* Right Overlay Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 md:mt-0 md:absolute md:right-6 lg:right-12 md:top-1/3 w-full sm:w-56 md:w-64"
          >
            <div className="relative backdrop-blur-3xl bg-[#013845CC] text-white rounded-2xl p-4 flex flex-col overflow-hidden group">
              <h4 className="text-[#8DE8C4] font-henju font-light text-lg mb-2">
                Medication
              </h4>
              <p className="text-[#8DE8C4] font-henju font-light  text-lg mb-3">
                Kit 1
              </p>
              <img
                src={yellowTablet}
                alt="Yellow Tablet"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 sm:mt-16 md:mt-24"
        >
          <button className="group bg-[#013845CC] backdrop-blur-xl px-5 sm:px-7 md:px-8 py-2 sm:py-3 md:py-4 rounded-full flex items-center gap-3 text-white hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-lg">
            Book a consultation
            <span className="bg-white rounded-full p-1 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight size={18} className="text-[#4FA097]" />
            </span>
          </button>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6">
            <div className="w-8 h-2 rounded-full bg-white/50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Treatment;

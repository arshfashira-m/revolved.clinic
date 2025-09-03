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
          className="text-2xl sm:text-4xl md:text-5xl font-normal leading-snug"
        >
          <span className="text-[#0C7885]">Personalized Treatment</span>{" "}
          <span className="text-black">for You</span>
        </motion.h2>
        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 text-xs sm:text-sm md:text-base text-gray-700"
        >
          Offer safe, high-quality, evidence-based treatment and care.
        </motion.p>
      </div>

      {/* Content Section */}
      <div className="bg-[#0C7885] text-white px-4 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 flex flex-col items-center">
        <div className="relative w-full max-w-6xl flex justify-center">
          {/* Center Big Image */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full sm:w-4/5 md:w-3/5"
          >
            <img
              src={person2}
              alt="Person"
              className="rounded-2xl w-full object-cover"
            />
          </motion.div>

          {/* Left Overlay Cards */}
          <div className="hidden md:flex absolute left-6 lg:left-12 top-1/4 flex-col gap-4 w-40 sm:w-52 md:w-60">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="backdrop-blur-3xl bg-[#013845CC] text-white rounded-2xl p-4"
            >
              <h4 className="font-semibold text-lg text-[#8DE8C4] mb-2">
                About
              </h4>
              <p className="flex justify-between text-sm">
                <span>Name</span> <span className="text-[#8DE8C4]">Mike</span>
              </p>
              <p className="flex justify-between text-sm">
                <span>Age</span> <span className="text-[#8DE8C4]">32</span>
              </p>
              <p className="flex justify-between text-sm">
                <span>BMI</span> <span className="text-[#8DE8C4]">29.5</span>
              </p>
            </motion.div>

            {/* Goal Card */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-between backdrop-blur-3xl bg-[#013845CC] text-white rounded-2xl p-4"
            >
              <h4 className="font-semibold mb-2">Goal</h4>
              <p className="text-[#8DE8C4] text-sm">Weight Loss</p>
            </motion.div>

            {/* History Card */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="backdrop-blur-3xl bg-[#013845CC] text-white rounded-2xl p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">History</h4>
                <p className="text-[#8DE8C4] text-sm">Ex-smoker</p>
              </div>
              <p className="text-[#8DE8C4] text-sm text-right">Pre-diabetic</p>
            </motion.div>
          </div>

          {/* Right Overlay Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block absolute right-6 lg:right-12 top-1/3 w-44 sm:w-56 md:w-64"
          >
            <div className="backdrop-blur-3xl bg-[#013845CC] text-white rounded-2xl p-4 flex flex-col">
              <h4 className="text-[#8DE8C4] font-semibold mb-2">Medication</h4>
              <p className="text-[#8DE8C4] font-semibold text-sm mb-3">Kit 1</p>
              <img
                src={yellowTablet}
                alt="Yellow Tablet"
                className="rounded-xl w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Cards  Mobile/Tablet */}
        <div className="mt-6 flex flex-col gap-4 w-full max-w-md md:hidden">
          <div className="backdrop-blur-3xl bg-[#013845CC] text-white rounded-2xl p-4">
            <h4 className="font-semibold text-lg text-[#8DE8C4] mb-2">About</h4>
            <p className="flex justify-between text-sm">
              <span>Name</span> <span className="text-[#8DE8C4]">Mike</span>
            </p>
            <p className="flex justify-between text-sm">
              <span>Age</span> <span className="text-[#8DE8C4]">32</span>
            </p>
            <p className="flex justify-between text-sm">
              <span>BMI</span> <span className="text-[#8DE8C4]">29.5</span>
            </p>
          </div>

          <div className="backdrop-blur-3xl bg-[#013845CC] text-white rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Goal</h4>
              <p className="text-[#8DE8C4] text-sm">Weight Loss</p>
            </div>
          </div>

          <div className="backdrop-blur-3xl bg-[#013845CC] text-white rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">History</h4>
              <p className="text-[#8DE8C4] text-sm">Ex-smoker</p>
            </div>
            <p className="text-[#8DE8C4] text-sm text-right">Pre-diabetic</p>
          </div>

          <div className="backdrop-blur-3xl bg-[#013845CC] text-white rounded-2xl p-4 flex flex-col">
            <h4 className="text-[#8DE8C4] font-semibold mb-2">Medication</h4>
            <p className="text-[#8DE8C4] font-semibold text-sm mb-3">Kit 1</p>
            <img
              src={yellowTablet}
              alt="Yellow Tablet"
              className="rounded-xl w-50 sm:w-50 mx-auto object-cover"
            />
          </div>
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24"
        >
          <button className="group bg-[#013845CC] backdrop-blur-xl px-5 sm:px-7 md:px-8 py-2 sm:py-3 md:py-4 rounded-full flex items-center gap-3 text-white hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-lg">
            Book a consultation
            <span className="bg-white rounded-full p-1 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
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

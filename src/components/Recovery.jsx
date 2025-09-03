import React from "react";
import { motion } from "framer-motion";
import person1 from "../assets/person1.png";
import vector from "../assets/big-vector.png";
import { ArrowRight, CircleCheck } from "lucide-react";

const Recovery = () => {
  return (
    <section className="relative w-full flex flex-col p-4 sm:p-6 md:p-10">
      <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
        {/* Fixed Background Image */}
        <img
          src={person1}
          alt="Repair and Recovery"
          className="w-full h-[400px] sm:h-[500px] md:h-[1200px] object-cover rounded-2xl md:rounded-3xl"
        />

        {/* Top */}
        <div className="absolute top-6 sm:top-10 w-full flex justify-center px-4">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-xs sm:max-w-md md:max-w-lg"
          >
            <p className="text-white text-sm sm:text-base md:text-lg mb-2 sm:mb-3 leading-snug drop-shadow-md">
              Rediscover Your Strength with Targeted Repair and Whole-Body
              Recovery
            </p>
            <button className="px-6 sm:px-8 md:px-10 py-2 bg-white/80 text-gray-800 rounded-full shadow hover:bg-gray-100 text-xs sm:text-sm md:text-base">
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Bottom  */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 w-full px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10
                     bg-gradient-to-t from-gray-300 via-gray-200 to-transparent
                     rounded-b-2xl md:rounded-b-3xl"
        >
          <div className="max-w-lg sm:max-w-2xl relative z-10">
            {/* Title */}
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
              Data-Driven{" "}
              <span className="text-[#4FA097]">Repair and Recovery</span>
            </h2>

            {/* Description */}
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-black leading-relaxed">
              We assess your body’s unique needs to support recovery, restore
              balance, and accelerate healing with a plan that’s made just for
              you.
            </p>

            {/* Bullet Points */}
            <ul className="mt-4 space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm md:text-base">
              <li className="flex items-start gap-2">
                <CircleCheck className="w-4 sm:w-5 md:w-6 text-[#4FA097] flex-shrink-0" />
                <span>
                  No two recovery journeys are the same — your treatment is
                  personalized from the start.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="w-4 sm:w-5 md:w-6 text-[#4FA097] flex-shrink-0" />
                <span>Say goodbye to one-size-fits-all solutions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="w-4 sm:w-5 md:w-6 text-[#4FA097] flex-shrink-0" />
                <span>
                  No more pushing through burnout or ignoring what your body
                  needs.
                </span>
              </li>
            </ul>

            {/* CTA */}
            <button className="mt-4 sm:mt-6 px-4 sm:px-6 md:px-8 py-2 flex items-center gap-2 sm:gap-3 rounded-full bg-[#4FA097] text-white text-xs sm:text-sm md:text-base hover:bg-[#3d7f7a] shadow">
              <span>Select your treatment plan</span>
              <span className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-white flex items-center justify-center">
                <ArrowRight className="w-3 sm:w-4 text-[#4FA097]" />
              </span>
            </button>
          </div>

          {/* Decorative Vector */}
          <img
            src={vector}
            alt="Decorative Vector"
            className="absolute bottom-2 right-4 sm:right-8 md:right-10 w-24 sm:w-36 md:w-72 opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Recovery;

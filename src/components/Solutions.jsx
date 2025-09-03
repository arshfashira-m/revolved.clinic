import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import bluetablet from "../assets/blueTablet.png";
import doctor from "../assets/doctor.png";
import whiteTube from "../assets/whitetube.png";
import microscope from "../assets/microscope.png";
import pinktube from "../assets/pinktube.png";

const Solutions = () => {
  return (
    <section className="w-full flex justify-center py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-7xl px-4 sm:px-8 md:px-10 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-henju font-normal"
          >
            Solutions{" "}
            <span className="text-[#0C7885] font-normal font-henju">
              Just for You
            </span>
          </motion.h2>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 text-xs sm:text-sm md:text-base lg:text-lg text-black max-w-2xl mx-auto"
          >
            Offer safe, high-quality, evidence-based treatment and care.
          </motion.p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
          {/* Card 1 */}
          <motion.div
            className="bg-[#F5FCFF] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col items-center 
                       text-center lg:flex-row lg:text-left lg:items-center lg:justify-between 
                       transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal font-henju mb-4 leading-snug">
                Clinically{" "}
                <span className="text-[#0C7885] font-normal">
                  Tested and <br /> Proven
                </span>{" "}
                Ingredients
              </h3>
              <button className="mx-auto lg:mx-0 bg-[#0C7885] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 text-sm lg:text-base">
                Consult Now
                <span className="bg-white text-[#0C7885] w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center rounded-full">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
            <img
              src={bluetablet}
              alt="Blue Tablet"
              className="mt-6 lg:mt-0 lg:ml-6 w-44 sm:w-52 md:w-64 lg:w-72 xl:w-80 object-contain"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-[#F5FCFF] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col items-center 
                       text-center lg:flex-row lg:text-left lg:items-center lg:justify-between 
                       transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-henju font-normal mb-4 leading-snug">
                Prescribed by <br />
                <span className="text-[#0C7885] font-normal">
                  Licensed Providers
                </span>
              </h3>
              <button className="mx-auto lg:mx-0 bg-[#0C7885] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 text-sm lg:text-base">
                Consult Now
                <span className="bg-white text-[#0C7885] w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center rounded-full">
                  <ArrowRight size={14} />
                </span>
              </button>
            </div>
            <img
              src={doctor}
              alt="Doctor"
              className="mt-6 lg:mt-0 lg:ml-6 w-56 sm:w-64 md:w-80 lg:w-96 object-contain"
            />
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {/* White Tube */}
          <motion.div className="rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={whiteTube}
              alt="White Tube"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Microscope */}
          <motion.div className="rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={microscope}
              alt="Microscope"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Pink Tube */}
          <motion.div className="rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={pinktube}
              alt="Pink Tube"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Pharmacies */}
          <motion.div className="bg-[#F5FCFF] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-20 font-henju font-normal mb-4 leading-snug">
              Safe,{" "}
              <span className="text-[#0C7885] font-normal">
                Regulated <br />
              </span>
              Pharmacies
            </h3>
            <button className="bg-[#0C7885] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 text-sm lg:text-base">
              Consult Now
              <span className="bg-white text-[#0C7885] w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center rounded-full">
                <ArrowRight size={14} />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

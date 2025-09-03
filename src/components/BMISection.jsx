import React, { useState } from "react";
import { motion } from "framer-motion";
import overweight from "../assets/overweight.png";
import { ArrowRight } from "lucide-react";

const slideRight = {
  hidden: { x: 80, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.3 },
  }),
};

const BMISection = () => {
  const [gender, setGender] = useState("female");

  return (
    <section className="w-full bg-white flex justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20">
      <div className="relative max-w-[1400px] w-full flex flex-col gap-12">
        {/* Heading + Subheading */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center px-2"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-henju font-normal text-black leading-snug">
            Check your <span className="text-[#F2A472]">BMI</span> to Get
            Started
          </h2>
          <p className="mt-4 text-black text-sm sm:text-base md:text-lg font-normal max-w-2xl">
            BMI stands for Body Mass Index. It’s a measurement that uses your
            height and weight to estimate if your weight is in a healthy range
            for your height.
          </p>
        </motion.div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
          {/* Left Image */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="flex justify-center lg:block mb-10 lg:mb-0"
          >
            <img
              src={overweight}
              alt="Overweight"
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[480px] object-contain"
            />
          </motion.div>

          {/* Right Side (Cards) */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:gap-6 items-center justify-center">
              {/* Calculate Your BMI Card */}
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideRight}
                className="bg-[#FFF8F4] shadow-md rounded-3xl w-full sm:w-[360px] md:w-[340px] lg:w-[380px] h-auto p-6 py-10
             flex flex-col gap-6 transform transition-transform duration-300 ease-in-out
             hover:scale-105 hover:shadow-lg"
              >
                {/* Gender Switch */}
                <div className="flex justify-between items-center bg-[#FFF8F4] p-2 rounded-xl">
                  <button
                    onClick={() => setGender("male")}
                    className={`flex-1 py-2 rounded-xl font-medium ${
                      gender === "male"
                        ? "bg-[#F2A472] text-white"
                        : "text-gray-400 hover:text-[#F2A472]"
                    }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setGender("female")}
                    className={`flex-1 py-2 rounded-xl font-medium ${
                      gender === "female"
                        ? "bg-[#F2A472] text-white"
                        : "text-gray-400 hover:text-[#F2A472]"
                    }`}
                  >
                    Female
                  </button>
                </div>

                {/* Height */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                  <p className="text-gray-700 font-medium mb-4">Height (cm)</p>
                  <div className="flex items-center justify-between mt-3 text-black font-bold text-lg">
                    <button className="px-3 sm:px-4 py-2 rounded-full bg-[#FFF8F4]">
                      -
                    </button>
                    <span>120 cm</span>
                    <button className="px-3 sm:px-4 py-2 rounded-full bg-[#FFF8F4]">
                      +
                    </button>
                  </div>
                </div>

                {/* Weight */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                  <p className="text-gray-700 font-medium mb-4">Weight (kg)</p>
                  <div className="flex items-center justify-between mt-3 text-black font-bold text-lg">
                    <button className="px-3 sm:px-4 py-2 rounded-full bg-[#FFF8F4]">
                      -
                    </button>
                    <span>86 kg</span>
                    <button className="px-3 sm:px-4 py-2 rounded-full bg-[#FFF8F4]">
                      +
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-2 bg-[#F2A472] text-white w-full py-3 rounded-full flex items-center hover:bg-[#ef945c] justify-center gap-2 font-medium">
                  Calculate your BMI
                  <span className="p-1 rounded-full bg-white text-[#F2A472]">
                    <ArrowRight size={18} />
                  </span>
                </button>
              </motion.div>

              {/* Right Column */}
              <div className="flex flex-col gap-6 mt-8 md:mt-0">
                {/* BMI Card */}
                <motion.div
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideRight}
                  className="bg-[#FFF8F4] rounded-2xl shadow-md flex flex-col items-center w-full sm:w-[380px] md:w-[340px] lg:w-[420px] h-[260px] mx-auto
             transform transition-transform duration-300 ease-in-out
             hover:scale-105 hover:shadow-lg"
                >
                  {/* Ellipse Gauge */}
                  <div className="relative w-44 sm:w-52 h-24 sm:h-28 mt-6">
                    <svg viewBox="0 0 200 100" className="w-full h-full">
                      {/* Background arc */}
                      <path
                        d="M20 100 A80 80 0 0 1 180 100"
                        fill="none"
                        stroke="#FEECE6"
                        strokeWidth="14"
                        strokeLinecap="round"
                      />
                      {/* Highlight arc (25 → 30) */}
                      <path
                        d="M128 28 A80 80 0 0 1 160 50"
                        fill="none"
                        stroke="#F2A472"
                        strokeWidth="14"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Labels */}
                    <div className="absolute left-0 bottom-0 text-[10px] sm:text-xs text-gray-600">
                      16
                    </div>
                    <div className="absolute left-6 top-2 text-[10px] sm:text-xs text-gray-600">
                      18.5
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 text-[10px] sm:text-xs text-gray-600">
                      25
                    </div>
                    <div className="absolute right-6 top-2 text-[10px] sm:text-xs text-gray-600">
                      30
                    </div>
                    <div className="absolute right-0 bottom-0 text-[10px] sm:text-xs text-gray-600">
                      40
                    </div>
                  </div>

                  {/* BMI Value */}
                  <h3 className="font-normal text-sm sm:text-lg text-[#B69A82] mt-2">
                    Your BMI
                  </h3>
                  <p className="mt-1 text-3xl sm:text-4xl font-bold text-black">
                    29.4
                  </p>
                </motion.div>

                {/* Overweight Info Card */}
                <motion.div
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideRight}
                  className="bg-[#FFF8F4] rounded-2xl shadow-md w-full sm:w-[380px] md:w-[340px] lg:w-[420px] h-auto mx-auto
             transform transition-transform duration-300 ease-in-out
             hover:scale-105 hover:shadow-lg"
                >
                  <div className="p-6">
                    <p className="text-[#F2A472] border border-[#F2A472] inline-block px-2 py-1 rounded-full font-semibold mb-3">
                      • Overweight
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-bold">
                        Obesity Class I (BMI 30 to 34.9)
                      </span>{" "}
                      This BMI range suggests that you are in the early stage of
                      obesity. Being in this category may increase your risk for
                      health complications, and it might be a good idea to
                      discuss lifestyle changes with our healthcare provider to
                      improve your overall health.
                    </p>
                    <button className="mt-4 bg-[#F2A472] text-white px-6 py-3 hover:bg-[#ef945c] rounded-full flex items-center justify-center gap-2 font-medium mx-auto">
                      Book a Consultation
                      <span className="p-1 rounded-full bg-white text-[#F2A472]">
                        <ArrowRight size={18} />
                      </span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMISection;

import React from "react";
import { motion } from "framer-motion";

import checkList from "../assets/check-list.png";
import jobInterview from "../assets/job-interview.png";
import box from "../assets/box.png";

const steps = [
  {
    id: "01",
    title: "Online",
    highlight: "Assessment",
    desc: "Fill out a brief health questionnaire to get started.",
    img: checkList,
    color: "text-[#F2A472]",
    highlightColor: "text-[#F2A472]",
    borderColor: "border-[#F2A472]",
  },
  {
    id: "02",
    title: "Prescriber",
    highlight: "Consultation",
    desc: "A licensed provider reviews your info and issues a prescription if appropriate.",
    img: jobInterview,
    color: "text-[#85B5A5]",
    highlightColor: "text-[#85B5A5]",
    borderColor: "border-[#85B5A5]",
  },
  {
    id: "03",
    title: "Discreet",
    highlight: "Delivery",
    desc: "Your treatment is delivered in plain, secure packaging to protect your privacy.",
    img: box,
    color: "text-[#0C7885]",
    highlightColor: "text-[#0C7885]",
    borderColor: "border-[#0C7885]",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full px-6 sm:px-10 py-16 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-henju font-light  text-gray-900">
          How it <span className="text-[#85B5A5]">Works?</span>
        </h2>
        <p className="mt-2 text-black font-quinn text-sm sm:text-sm">
          We’ll be with you every step of the way on your journey to a better
          you. <br />
          Assessment. Consultation. Delivery
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
            className={`relative bg-[#FAFAFA] rounded-3xl p-8 font-quinn flex flex-col items-center text-center  
    border-2  transition duration-300 hover:shadow-xl hover:${step.borderColor}`}
          >
            {/* Step number*/}
            <span
              className={`${step.color} absolute top-4 right-6 font-henju font-light text-3xl`}
            >
              {step.id}
            </span>

            {/* Icon with shake effect */}
            <motion.img
              src={step.img}
              alt={step.title}
              className="w-14 h-20 mb-6 object-contain"
              whileHover={{
                rotate: [0, -10, 10, -10, 10, 0], // shake animation
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Title */}
            <h3 className="text-2xl font-henju font-light  text-gray-900 leading-snug">
              {step.title}
            </h3>
            <h3
              className={`text-2xl  font-henju font-light leading-snug ${step.highlightColor}`}
            >
              {step.highlight}
            </h3>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

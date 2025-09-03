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
  },
  {
    id: "02",
    title: "Prescriber",
    highlight: "Consultation",
    desc: "A licensed provider reviews your info and issues a prescription if appropriate.",
    img: jobInterview,
    color: "text-[#4FA097]",
    highlightColor: "text-[#4FA097]",
  },
  {
    id: "03",
    title: "Discreet",
    highlight: "Delivery",
    desc: "Your treatment is delivered in plain, secure packaging to protect your privacy.",
    img: box,
    color: "text-[#0C7885]",
    highlightColor: "text-[#0C7885]",
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
        <h2 className="text-4xl sm:text-5xl font-henju font-normal text-gray-900">
          How it <span className="text-[#4FA097]">Works?</span>
        </h2>
        <p className="mt-2 text-black text-sm sm:text-base">
          We’ll be with you every step of the way on your journey to a better you. <br />
          Assessment. Consultation. Delivery
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="relative bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Step number*/}
            <span
              className={`${step.color} absolute top-4 right-6 font-medium text-3xl`}
            >
              {step.id}
            </span>

            {/* Icon */}
            <img
              src={step.img}
              alt={step.title}
              className="w-14 h-20 mb-6 object-contain"
            />

            {/* Title */}
            <h3 className="text-2xl font-normal font-henju text-gray-900 leading-snug">
              {step.title}
            </h3>
            <h3
              className={`text-2xl font-normal font-henju leading-snug ${step.highlightColor}`}
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

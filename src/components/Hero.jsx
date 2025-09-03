import React from "react";
import { motion } from "framer-motion";
import face from "../assets/face.png";
import weight from "../assets/weight.png";
import antiaging from "../assets/antiaging.png";
import recovery from "../assets/recovery.png";
import {
  PackageCheck,
  Stethoscope,
  ThumbsUp,
  Truck,
  User,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const cardData = [
  {
    img: weight,
    title: "Weight Loss",
    desc: "Sustainable support to help you feel lighter, stronger, and more in control.",
  },
  {
    img: antiaging,
    title: "Anti-Aging & Vitality",
    desc: "Gentle care designed to cleanse, hydrate, and restore your skin—leaving you fresh, glowing, and renewed.",
  },
  {
    img: recovery,
    title: "Repair & Recovery",
    desc: "Restful nights made easier with care that helps you unwind, relax, and recharge.",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#E0F7F6] via-[#F8FFFF] to-[#E0F7F6] opacity-70"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-syne font-bold leading-tight text-gray-900 mt-10 sm:mt-10">
            <span className="text-[#4FA097]">Anti-aging </span> that <br />
            Works for you.
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md">
            We believe everyone deserves to glow. Let us help you with our top
            quality technology and facilities.
          </p>
          <button className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#4FA097] text-white hover:bg-teal-800 transition w-fit shadow-md text-sm sm:text-base">
            Get Started
            <span className="bg-white rounded-full p-1 flex items-center justify-center">
              <ArrowRight size={16} className="text-[#4FA097]" />
            </span>
          </button>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 sm:mt-10">
            {cardData.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[20px] shadow-md p-3 sm:p-4 flex flex-col justify-between hover:shadow-xl transition w-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px]"
              >
                <div className="flex flex-col gap-3">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-12 sm:w-14 h-12 sm:h-14 object-contain"
                  />
                  <h3 className="text-base sm:text-lg font-medium font-henju">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">{card.desc}</p>
                </div>
                <div className="flex justify-end mt-3">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-2 rounded-full hover:text-teal-800 transition"
                  >
                    <ArrowRight size={16} className="text-[#4FA097]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src={face}
            alt="Face"
            className="w-full max-w-[600px] h-auto sm:h-[300px] md:h-[400px] lg:h-[700px] mt-6 object-cover shadow-lg rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
          />
        </motion.div>
      </div>

      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white p-2 sm:p-3 rounded-full shadow-xl transition z-50"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MessageSquare size={30} className="fill-[#4FA097] text-[#4FA097]" />
      </motion.button>

      {/* Bottom Ticker */}
      <div className="mt-10 sm:mt-12 md:mt-16 bg-[#0C7885] py-2 sm:py-3 md:py-4 overflow-hidden relative">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="whitespace-nowrap text-white text-xs sm:text-sm md:text-base flex gap-10 sm:gap-16 md:gap-24 px-4 sm:px-6"
        >
          <span className="flex items-center gap-2">
            <Truck /> Free Express Delivery
          </span>
          <span className="flex items-center gap-2">
            <PackageCheck /> Discreet Packaging
          </span>
          <span className="flex items-center gap-2">
            <User /> Personalized Treatment Plans
          </span>
          <span className="flex items-center gap-2">
            <ThumbsUp /> 100% Online - No Appointments
          </span>
          <span className="flex items-center gap-2">
            <Stethoscope /> Speak to Experts Anytime
          </span>
          <span className="flex items-center gap-2">
            <Truck /> Free Express Delivery
          </span>
          <span className="flex items-center gap-2">
            <PackageCheck /> Discreet Packaging
          </span>
          <span className="flex items-center gap-2">
            <User /> Personalized Treatment Plans
          </span>
          <span className="flex items-center gap-2">
            <ThumbsUp /> 100% Online - No Appointments
          </span>
          <span className="flex items-center gap-2">
            <Stethoscope /> Speak to Experts Anytime
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

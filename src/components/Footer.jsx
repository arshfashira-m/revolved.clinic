import React from "react";
import { motion } from "framer-motion";
import vector from "../assets/big-vector.png";
import pay from "../assets/pay.png";
import visa from "../assets/visa.png";
import amex from "../assets/amex.png";
import mastercard from "../assets/mastercard.png";
import Logo from "../assets/Logo.svg";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <footer className="relative bg-[#0C7885] text-white">
      {/* Background Vector */}
      <img
        src={vector}
        alt="Vector"
        className="absolute bottom-0 right-0 opacity-20 pointer-events-none select-none w-[300px] md:w-[500px]"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  font-henju font-light ">
        {[
          // Column 1
          <div className="flex flex-col gap-6" key="col-1">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="w-64 h-auto brightness-0 invert"
              />
            </div>

            {/* Social Icons with shake */}
            <div className="flex gap-3 text-lg mt-4">
              {[Instagram, Linkedin, Facebook, Twitter, Youtube].map(
                (Icon, i) => (
                  <motion.div
                    key={i}
                    className="bg-white p-2 rounded-full  text-[#0C7885] hover:bg-[#8DE8C4] hover:text-white cursor-pointer"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 10, 0], // wiggle effect
                      transition: { duration: 0.6 },
                    }}
                  >
                    <Icon size={18} />
                  </motion.div>
                )
              )}
            </div>
          </div>,

          // Column 2
          <div key="col-2">
            <h3 className="text-[#8DE8C4] text-xl  mb-6">
              Treatments
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                "Anti-Aging & Vitality",
                "Weight Loss",
                "Repair & Recovery",
                "Immunity",
                "Muscle Support",
                "Libido Enhancement",
                "Cognitive Enhancement",
                "Sleep",
                "Hair Loss",
                "Skincare",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:pl-2 hover:text-[#7bd4b3] transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-white my-4"></div>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                "Acne",
                "Wrinkles & Aging",
                "Pigmentation",
                "Excessive Sweating",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-[#7bd4b3] transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>,

          // Column 3
          <div className="flex flex-col gap-10" key="col-3">
            <div>
              <h3 className="text-[#8DE8C4] text-xl   mb-6">
                About
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {[
                  "Our Approach",
                  "How It Works",
                  "Everyday Essentials",
                  "Wellness Academy",
                  "Careers",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:pl-2 hover:text-[#7bd4b3] transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#8DE8C4] text-xl   mb-6">
                Toolkit
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {[
                  "Biological Age Calculator",
                  "BMI Calculator",
                  "Energy Expenditure (TDEE) Calculator",
                  "Calorie Deficit Calculator",
                  "Protein Calculator",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="cursor-pointer hover:pl-2 hover:text-[#7bd4b3] transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>,

          // Column 4
          <div key="col-4">
            <h3 className="text-[#8DE8C4] text-xl   mb-6">
              Help Center
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {["Pricing", "Support", "FAQs"].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:pl-2 hover:text-[#7bd4b3] transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>,
        ].map((col, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {col}
          </motion.div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 font-henju font-light  bg-[#0D5159] text-sm py-2 px-6 md:px-12 lg:px-20 
             flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center flex-1">
          Privacy Policy · Terms & Conditions · Fulfilment, Shipping & Returns
          Policy
        </p>
        <div className="flex items-center gap-4">
          <img src={pay} alt="Pay" className="h-6 object-contain" />
          <img src={visa} alt="Visa" className="h-6 object-contain" />
          <img src={amex} alt="Amex" className="h-6 object-contain" />
          <img src={mastercard} alt="Mastercard" className="h-6 object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

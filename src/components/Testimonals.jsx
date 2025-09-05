import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import patient1 from "../assets/patient1.png";
import patient1b from "../assets/patient-1.png";
import patient2 from "../assets/patient2.png";
import patient2b from "../assets/patient-2.png";
import patient3 from "../assets/patient3.png";
import patient3b from "../assets/patient-3.png";
import patient4 from "../assets/patient4.png";
import patient4b from "../assets/patient-4.png";

const Testimonials = () => {
  const fadeUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const slideRight = {
    hidden: { x: 80, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: i * 0.3 },
    }),
  };

  const testimonials = [
    {
      img: [patient1, patient1b],
      text: "I had severe hair loss and bald patches, but after this treatment, my hair started growing back stronger and fuller. Amazing results! I never imagined I’d see real growth again. This gave me back my confidence.",
      name: "Maikel, 52",
      tag: "Hair Loss",
    },
    {
      img: [patient2, patient2b],
      text: "My skin was full of breakouts and acne scars. After the treatment, it’s much clearer, smoother, and I feel more confident. Even the dark spots faded with time. It really transformed my skin.",
      name: "Linda, 52",
      tag: "Skincare",
    },
    {
      img: [patient3, patient3b],
      text: "My skin was always red and sensitive. Even simple products made it worse. After using this treatment, the irritation is gone, and my skin feels calm and smooth.",
      name: "Taylah, 28",
      tag: "Skincare",
    },
    {
      img: [patient4, patient4b],
      text: "My face looked dull and tired with uneven tone. I tried many things with no luck. This treatment brightened my skin and gave it a healthy, even glow. Highly recommend!",
      name: "Kelly, 30",
      tag: "Skincare",
    },
  ];

  return (
    <section className="w-full flex justify-center bg-[#0C7885] py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10 transform scale-90 sm:scale-95 md:scale-100 origin-top">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-2xl sm:text-4xl md:text-5xl font-henju font-light  text-white"
          >
            Why we love <span className="text-[#6DD3C1]">Revolved</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-3 text-sm sm:text-sm md:text-base font-quinn text-gray-200"
          >
            Real stories from real patients—see how personalized treatment made
            a difference in their lives.
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-quinn">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              className="relative group bg-[#0D5159] rounded-xl px-6 py-6 flex flex-col items-center text-center text-white 
             transition-transform duration-300 hover:scale-105 hover:shadow-2xl
             w-full h-auto min-h-[350px] overflow-hidden"
            >
              {/* Shine Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                  opacity-0 group-hover:opacity-100 -translate-x-full 
                  group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none"
              ></div>

              {/* Patient Images */}
              <div
                className={`grid ${
                  t.img.length > 1 ? "grid-cols-2 gap-2" : "grid-cols-1"
                } w-full mb-4`}
              >
                {t.img.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={t.name}
                    className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-xl"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xs sm:text-sm md:text-sm leading-relaxed mb-3 line-clamp-6">
                “{t.text}”
              </p>

              {/* Stars */}
              <div className="flex justify-center mb-2 gap-2 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 mt-2">
                <p className="text-xs sm:text-sm md:text-base font-medium">
                  {t.name}
                </p>
                <span className="text-[10px] sm:text-xs md:text-xs border border-[#E7C7A7] text-[#E88A2C] px-2 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";

const fadeUp = {
  hidden: { y: 60, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.3 },
  }),
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I start my journey?",
      answer:
        "We know that starting something new can come with a lot of questions—and that’s completely normal. Whether you’re curious about how our treatments work, what to expect from your first session, or how to choose the right plan for you, you’re in the right place. This section covers the most common questions from our community, so you can feel more confident, informed, and ready to begin.",
    },
    {
      question: "Are your treatments safe?",
      answer:
        "Yes, all our treatments are designed with safety as a top priority. Our professional team ensures the best practices and uses only proven methods to provide effective and safe results.",
    },
    {
      question: "Can I customize my treatment plan?",
      answer:
        "Absolutely! We understand that everyone has unique needs, so we provide personalized treatment plans tailored to your goals and lifestyle.",
    },
    {
      question: "How do I book a consultation?",
      answer:
        "Booking a consultation is simple. You can schedule online through our platform or reach out to our support team who will be happy to assist you.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center px-6 md:px-12 lg:px-20 py-16 bg-white">
      <div className="relative max-w-[1000px] w-full flex flex-col gap-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-henju font-light l text-[#589089]">
            FAQ
          </h2>
          <p className="mt-3 text-black text-base md:text-lg font-quinn font-normal">
            Still Have Questions? Read Your <br /> FAQs
          </p>

          {/* Button */}
          <button className="group mt-6 bg-[#4FA097] text-white px-6 py-3 font-quinn rounded-full hover:bg-[#3f8a81] flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            View all FAQ
            <span className="p-1 rounded-full bg-white text-[#4FA097] transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight size={18} />
            </span>
          </button>
        </motion.div>

        {/* FAQ Cards */}
        <div className="flex flex-col gap-6 font-quinn">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              onClick={() => toggleFAQ(i)}
              className={`bg-[#4FA0971A] rounded-2xl p-8 cursor-pointer shadow-md hover:scale-105 transition-transform duration-300 ${
                openIndex === i ? "pb-8" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-medium text-black">
                  {faq.question}
                </h3>
                {openIndex === i ? (
                  <Minus className="text-[#4FA097] w-6 h-6" />
                ) : (
                  <Plus className="text-[#4FA097] w-6 h-6" />
                )}
              </div>

              {openIndex === i && (
                <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

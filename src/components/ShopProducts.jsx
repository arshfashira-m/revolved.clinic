import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Handbag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import glowBooster from "../assets/glowbooster.png";
import glowCream from "../assets/glowcream.png";
import antiAging from "../assets/anti.png";
import immunity from "../assets/immunity.jpg";
import hairloss1 from "../assets/hairloss1.png";
import hairloss2 from "../assets/hairloss2.png";
import weightloss from "../assets/weightloss.png";

// Categories
const categories = [
  "All",
  "Skincare",
  "Anti-Aging",
  "Weight Loss",
  "Hair Loss",
  "Immunity",
];

// Products
const products = [
  {
    id: 1,
    tag: "Skincare",
    title: "Glow Booster",
    desc: "Clinically-backed formulas for radiant skin.",
    buttons: true,
    badge: "Prescription",
    image: glowBooster,
  },
  {
    id: 2,
    tag: "Skincare",
    title: "Glow Cream",
    desc: "Clinically-backed formulas for radiant skin.",
    price: "$83.80",
    cart: true,
    image: glowCream,
  },
  {
    id: 3,
    tag: "Anti-Aging",
    title: "Anti-Aging Glow",
    desc: "Reduces fine lines & boosts elasticity.",
    price: "$50.80",
    oldPrice: "$83.80",
    cart: true,
    discount: "30% OFF",
    image: antiAging,
  },
  {
    id: 4,
    tag: "Immunity",
    title: "Immunity Shield",
    desc: "Boosts natural defense with vitamins.",
    price: "$39.99",
    cart: true,
    image: immunity,
  },
  {
    id: 5,
    tag: "Hair Loss",
    title: "Hair Growth Serum",
    desc: "Revitalizes scalp and promotes growth.",
    price: "$50.80",
    oldPrice: "$83.80",
    cart: true,
    discount: "40% OFF",
    image: hairloss1,
  },
  {
    id: 6,
    tag: "Hair Loss",
    title: "Hair Tonic Advanced",
    desc: "Strengthens roots for healthy hair.",
    price: "$59.99",
    cart: true,
    image: hairloss2,
  },
  {
    id: 7,
    tag: "Weight Loss",
    title: "Fat Burner Pro",
    desc: "Supports metabolism and energy.",
    price: "$50.80",
    oldPrice: "$83.80",
    cart: true,
    discount: "30% OFF",
    image: weightloss,
  },
];

const ShopProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(0);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.tag === activeCategory);

  const itemsPerPage = window.innerWidth >= 1024 ? 3 : 2;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-20 bg-white text-center">
      {/* Heading */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-henju"
      >
        Shop <span className="text-orange-300">Products</span>
      </motion.h2>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-2 text-gray-800 max-w-xl mx-auto text-sm md:text-base"
      >
        Discover science-backed beauty essentials—curated to enhance your skin,
        hair, and overall glow.
      </motion.p>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => {
              setActiveCategory(cat);
              setPage(0);
            }}
            className={`px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full text-xs sm:text-sm transition 
              ${
                activeCategory === cat
                  ? "bg-orange-300 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative mt-16 px-2 sm:px-4 md:px-6">
        {/* Left Arrow */}
        {page > 0 && (
          <button
            onClick={handlePrev}
            className="hidden md:flex p-3 rounded-full border shadow hover:bg-gray-100 absolute -left-3 top-1/2 -translate-y-1/2 z-10"
          >
            <ArrowLeft />
          </button>
        )}

        {/* Product Cards */}
        <motion.div
          key={page + activeCategory}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {paginatedProducts.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white rounded-3xl shadow-md hover:shadow-lg hover:border-orange-200 border-2 border-gray-100 p-4 sm:p-6 text-left"
              >
                {/* Discount Ribbon */}
                {p.discount && (
                  <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-[8px] -left-[35px] w-[120px] bg-orange-300 text-white text-[10px] font-bold rotate-[-45deg] text-center py-1 shadow-md">
                      {p.discount}
                    </div>
                  </div>
                )}
                {/* Badge */}
                {p.badge && (
                  <span className="absolute top-4 right-4 text-[10px] border border-orange-400 text-orange-400 px-2 py-0.5 rounded-full bg-white">
                    {p.badge}
                  </span>
                )}
                {/* Image */}
                <div className="flex justify-center mb-4 h-36 sm:h-40">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full object-contain"
                  />
                </div>
                {/* Info */}
                <span className="text-[11px] text-orange-400 border border-orange-400 rounded-full px-2 py-0.5">
                  {p.tag}
                </span>
                <h3 className="text-lg font-semibold mt-3">{p.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{p.desc}</p>
                {/* Price & Buttons */}
                {p.price && (
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      {p.oldPrice && (
                        <p className="text-xs text-gray-400 line-through">
                          {p.oldPrice}
                        </p>
                      )}
                      <p className="text-lg font-semibold">{p.price}</p>
                    </div>
                    {p.cart && (
                      <button className="p-2 bg-orange-100 rounded-full text-orange-500 hover:bg-orange-200">
                        <Handbag size={16} />
                      </button>
                    )}
                  </div>
                )}
                {/* Learn More + Get Started */}
                {p.buttons && (
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
                    <button className="px-4 py-2 rounded-full border border-orange-400 text-orange-400 text-sm hover:bg-orange-50">
                      Learn More
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-400 text-white text-sm hover:bg-orange-500">
                      Get Started <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className={`hidden md:flex p-3 rounded-full border shadow absolute -right-3 top-1/2 -translate-y-1/2 z-10 
            ${
              page === totalPages - 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
        >
          <ArrowRight />
        </button>
      </div>

      {/* View All */}
      <div className="mt-10">
        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-orange-300 text-orange-500 text-sm hover:bg-orange-50 mx-auto">
          View all <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};

export default ShopProducts;

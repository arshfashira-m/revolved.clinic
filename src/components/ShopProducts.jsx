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

const categories = [
  "All",
  "Skincare",
  "Anti-Aging",
  "Weight Loss",
  "Hair Loss",
  "Immunity",
];

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
    title: "Glow Booster",
    desc: "Clinically-backed formulas for radiant skin.",
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
    desc: "Boosts natural defense with vitamins and minerals.",
    price: "$39.99",
    cart: true,
    image: immunity,
  },
  {
    id: 5,
    tag: "Hair Loss",
    title: "Hair Growth Serum",
    desc: "Revitalizes scalp and promotes growth hair.",
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
    desc: "Strengthens roots for the healthy hair.",
    price: "$59.99",
    cart: true,
    image: hairloss2,
  },
  {
    id: 7,
    tag: "Weight Loss",
    title: "Fat Burner Pro",
    desc: "Supports metabolism and energy for weight loss.",
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
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className="relative py-12 px-6 sm:px-12 lg:px-20 bg-white text-center">
      {/* Heading */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-henju font-light"
      >
        Shop <span className="text-orange-400">Products</span>
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-2 text-gray-800 max-w-xl mx-auto text-sm md:text-base font-quinn"
      >
        Discover science-backed beauty essentials—curated to enhance your skin,
        hair, and overall glow.
      </motion.p>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setPage(0);
            }}
            className={`px-6 md:px-10 py-3 rounded-full text-sm font-quinn transition-all
              ${
                activeCategory === cat
                  ? "bg-[#FFD0B3] text-orange-800 shadow-inner"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="mt-14">
        <motion.div
          key={page + activeCategory}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 font-quinn justify-items-center"
        >
          <AnimatePresence>
            {paginatedProducts.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.02 }}
                className="relative bg-gray-100 rounded-[2rem] shadow-lg hover:shadow-xl border hover:border-orange-400 hover:bg-orange-100 border-gray-100 p-6 text-left max-w-[320px] w-full"
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
                  <span className="absolute top-4 right-4 text-[11px] border border-orange-300 text-orange-400 px-2 py-0.5 rounded-full bg-white">
                    {p.badge}
                  </span>
                )}

                {/* Image */}
                <div className="flex justify-center mb-4 h-40">
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

                {/* Price & Cart */}
                {p.price && (
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      {p.oldPrice && (
                        <p className="text-xs text-orange-400 line-through">
                          {p.oldPrice}
                        </p>
                      )}
                      <p className="text-lg font-semibold">{p.price}</p>
                    </div>
                    {p.cart && (
                      <button className="p-2 bg-white rounded-full text-orange-300 hover:bg-orange-300 hover:text-white ">
                        <Handbag size={16} />
                      </button>
                    )}
                  </div>
                )}

                {/* Learn More + Get Started */}
                {p.buttons && (
                  <div className="flex gap-3 font-quinn  justify-center mt-5">
                    <button className="px-4 py-2 rounded-full border border-[#F2A472] text-[#F2A472] text-sm hover:bg-orange-50 transition-all duration-300">
                      Learn More
                    </button>

                    <button className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2A472] text-white text-xs hover:bg-orange-400 transition-all duration-300">
                      Get Started
                      <span className="bg-white rounded-full p-1 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2">
                        <ArrowRight size={14} className="text-[#F2A472]" />
                      </span>
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Arrows OUTSIDE the card container */}
        {page > 0 && (
          <button
            onClick={() => setPage(page - 1)}
            className="hidden md:flex p-3 mt-20 rounded-full border shadow-md hover:bg-gray-100 absolute left-4 top-1/2 -translate-y-1/2"
          >
            <ArrowLeft />
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            onClick={() => setPage(page + 1)}
            className="hidden md:flex p-3 mt-20 rounded-full border shadow-md hover:bg-gray-100 absolute right-4 top-1/2 -translate-y-1/2"
          >
            <ArrowRight />
          </button>
        )}
      </div>

      {/* View All */}
      <div className="mt-10">
        <button className="group flex items-center gap-2 px-6 py-2 rounded-full border border-orange-300 text-orange-500 text-sm hover:bg-orange-50 transition-all duration-300 mx-auto">
          View all
          <span className="border border-orange-400 rounded-full p-1 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight size={14} className="text-orange-400" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ShopProducts;

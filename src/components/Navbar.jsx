import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Heart,
  Activity,
  Stethoscope,
  Shield,
  Dumbbell,
  Flame,
  Brain,
  Moon,
  Scissors,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Handbag,
  UserRound,
  Menu,
  X,
} from "lucide-react";
import Logo from "../assets/logo.svg";

const treatments = [
  { label: "Anti-Aging & Vitality", icon: Heart },
  { label: "Weight Loss", icon: Activity },
  { label: "Repair & Recovery", icon: Stethoscope },
  { label: "Immunity", icon: Shield },
  { label: "Muscle Support", icon: Dumbbell },
  { label: "Libido Enhancement", icon: Flame },
  { label: "Cognitive Enhancement", icon: Brain },
  { label: "Sleep", icon: Moon },
  { label: "Hair Loss", icon: Scissors },
  { label: "Skin", icon: Sparkles },
  { label: "Acne" },
  { label: "Wrinkles & Aging" },
  { label: "Pigmentation" },
  { label: "Excessive Sweating" },
];

const shake = {
  hover: {
    rotate: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.6 },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileTreatments, setMobileTreatments] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenu(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 font-quinn ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-3 sm:px-5 lg:px-6 py-3 sm:py-4"
      >
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleScrollTo("home")}
        >
          <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-4 xl:gap-6 text-[15px] font-medium relative">
          {[
            "Home",
            "Treatments",
            "About",
            "How it works",
            "Everyday Essentials",
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group flex items-center gap-1"
              onMouseEnter={() => item === "Treatments" && setOpen(true)}
              onMouseLeave={() => item === "Treatments" && setOpen(false)}
            >
              <button
                onClick={() =>
                  item !== "Treatments" &&
                  handleScrollTo(item.toLowerCase().replace(/\s+/g, ""))
                }
                className="transition-colors duration-200 flex items-center gap-1 group-hover:text-[#4FA097]"
              >
                {item}
                {item === "Treatments" && (
                  <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#4FA097]" />
                )}
              </button>

              {/* Dropdown */}
              {item === "Treatments" && (
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 top-full mt-2 w-[240px] bg-white border font-henju font-light text-sm border-gray-200 rounded-lg shadow-lg p-3 flex flex-col gap-1 z-[9999]"
                    >
                      {treatments.map(({ label, icon: Icon }, i) => (
                        <React.Fragment key={i}>
                          {label === "Acne" && (
                            <div className="border-t border-gray-200 my-2"></div>
                          )}
                          <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#EAF6F2] cursor-pointer">
                            {Icon && (
                              <Icon className="w-5 h-5 text-[#4FA097]" />
                            )}
                            <span className="text-gray-700  text-sm">
                              {label}
                            </span>
                          </div>
                        </React.Fragment>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 xl:gap-4">
          <button className="group font-quinn bg-[#4FA097] text-white px-3 py-2 rounded-full hidden lg:flex items-center gap-2 hover:bg-[#3d7f7a] transition">
            <span>Consult Now</span>
            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight className="w-4 h-4 text-[#4FA097]" />
            </span>
          </button>
          {/* Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="cursor-pointer hover:text-[#4FA097] text-lg">
              My Treatments
            </span>

            <motion.div whileHover="hover" variants={shake}>
              <Handbag className="w-5 h-5 cursor-pointer text-gray-700 hover:text-[#4FA097]" />
            </motion.div>

            <motion.div whileHover="hover" variants={shake}>
              <Bell className="w-5 h-5 cursor-pointer text-gray-700 hover:text-[#4FA097]" />
            </motion.div>

            <motion.div whileHover="hover" variants={shake}>
              <UserRound className="w-5 h-5 cursor-pointer text-gray-700 hover:text-[#4FA097]" />
            </motion.div>
          </div>
          {/* Burger Menu */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenu(true)}>
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileMenu(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-[80%] max-w-[360px] h-full bg-[#ccdddc] shadow-lg flex flex-col z-50 overflow-y-auto"
            >
              <div className="flex justify-end p-4">
                <button onClick={() => setMobileMenu(false)}>
                  <X className="w-8 h-8 text-gray-700" />
                </button>
              </div>

              <div className="flex flex-col gap-4 px-6 text-lg">
                {[
                  "Home",
                  "Treatments",
                  "About",
                  "How it works",
                  "Everyday Essentials",
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    {item === "Treatments" ? (
                      <>
                        <button
                          onClick={() => setMobileTreatments(!mobileTreatments)}
                          className="flex items-center justify-between py-2 text-left"
                        >
                          {item}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              mobileTreatments ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileTreatments && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-4 flex flex-col gap-2"
                            >
                              {treatments.map(({ label, icon: Icon }, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 py-1"
                                >
                                  {Icon && (
                                    <Icon className="w-5 h-5 text-[#4FA097]" />
                                  )}
                                  <span className="text-gray-700 text-sm">
                                    {label}
                                  </span>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <button
                        onClick={() =>
                          handleScrollTo(item.toLowerCase().replace(/\s+/g, ""))
                        }
                        className="py-2 text-left"
                      >
                        {item}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="px-6 py-6 mt-auto">
                <button className="group font-quinn bg-[#4FA097] text-white px-3 py-2 rounded-full hidden lg:flex items-center gap-2 hover:bg-[#3d7f7a] transition">
                  <span>Consult Now</span>
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2">
                    <ArrowRight className="w-4 h-4 text-[#4FA097]" />
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

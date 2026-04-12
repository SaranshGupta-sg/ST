import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  const heroRef = useRef(null);
  const navbarVariant = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 14 },
    },
  };

  return (
    <div className="hero" ref={heroRef}>
      <motion.div variants={navbarVariant} initial="hidden" animate="visible">
        <Navbar />
      </motion.div>
    </div>
  );
};

export default Hero;

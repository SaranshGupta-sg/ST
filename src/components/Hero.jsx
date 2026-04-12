import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero" ref={heroRef}>
      <motion.div>
        <Navbar />
      </motion.div>
    </div>
  );
};

export default Hero;

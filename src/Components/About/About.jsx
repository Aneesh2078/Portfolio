import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/7358653-removebg-preview.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-opacity-30 shadow-xl mx-0 md:mx-20 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap md:flex-row items-center md:space-x-10">  
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="shadow-2xl rounded-lg" // Added shadow effect
          >
            <img 
              className="md:h-80 rounded-lg shadow-[0_10px_30px_rgba(255,255,255,0.3)]" 
              src={AboutImg} 
              alt="About img" 
            />
          </motion.div>

          <div className="w-96 py-4">
            <h1 className="text-xl md:text-2xl font-semibold leading-normal">
              I am looking forward to my first work experience.
            </h1>
            <p className="text-sm md:text-md leading-tight">
              Innovative Android Developer with a background in designing and building applications focused on user experience. Strong understanding of the full mobile development life cycle from concept to delivery. Skills include coding, debugging, and improving performance of Android applications, leveraging knowledge of Java and Kotlin languages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

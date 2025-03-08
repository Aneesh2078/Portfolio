import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, main, img, githubLink, demoVideo }) => {
  return (
    <motion.div
      className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl cursor-pointer"
      whileHover={{ scale: 1.05, y: -5 }} // Scale up slightly and move up on hover
      whileTap={{ scale: 0.95 }} // Scale down slightly on tap/click
      transition={{ type: "spring", stiffness: 300 }} // Smooth spring transition
    >
      <motion.img
        className="p-4"
        src={img}
        alt={title}
        whileHover={{ scale: 1.1 }} // Image scales up slightly more on hover
        transition={{ type: "spring", stiffness: 300 }} // Smooth spring transition
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      {/* Centering the button */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => window.open(githubLink, "_blank")}
        >
          Source Code
        </button>
        {demoVideo && (
          <button
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            onClick={() => window.open(demoVideo, "_blank")}
          >
            Demo video
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

import React, { useState } from "react";
import { motion } from "framer-motion";
import avatarImg from "../../assets/7358602-removebg-preview.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Innovative Android Developer with a background in designing and building applications focused on user experience.
        </p>
        <button
          className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => setShowForm(true)}
        >
          Contact Me
        </button>
      </div>

 
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="shadow-2xl rounded-lg"
      >
        <img 
          className="w-64 md:w-80 rounded-lg shadow-[0_10px_30px_rgba(255,255,255,0.3)]" 
          src={avatarImg} 
          alt="Avatar" 
        />
      </motion.div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <form>
              <div className="mb-3">
                <label className="block text-sm font-medium">Name</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="w-full p-2 border rounded-md" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium">Phone Number</label>
                <input type="tel" className="w-full p-2 border rounded-md" placeholder="Your Phone Number" />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium">Message</label>
                <textarea className="w-full p-2 border rounded-md" placeholder="Your Message"></textarea>
              </div>
              <div className="flex justify-between">
                <button type="submit" className="bg-[#465697] text-white px-4 py-2 rounded-md">Send</button>
                <button type="button" className="text-gray-600" onClick={() => setShowForm(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

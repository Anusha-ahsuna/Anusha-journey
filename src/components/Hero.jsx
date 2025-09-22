import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <section id="hero" className="w-full min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden flex items-center justify-center px-4 py-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-red-400 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full text-sm mb-4">
              ✨ Electronics Engineer → Web Developer ✨
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Anusha
            </span>
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block ml-2"
            >
              👋
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            From <span className="text-blue-400 font-semibold">circuits to code</span>, 
            I transform ideas into digital reality. Currently empowering the next generation 
            as a <span className="text-yellow-400 font-semibold">Technical Trainer</span> at JClick Solutions.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="px-4 py-2 bg-blue-600/20 border border-blue-400 text-blue-300 rounded-lg backdrop-blur-sm">
              🔧 Arduino & IoT
            </span>
            <span className="px-4 py-2 bg-green-600/20 border border-green-400 text-green-300 rounded-lg backdrop-blur-sm">
              💻 React & Frontend
            </span>
            <span className="px-4 py-2 bg-purple-600/20 border border-purple-400 text-purple-300 rounded-lg backdrop-blur-sm">
              👨‍🏫 Technical Training
            </span>
          </motion.div>
          
          <motion.div
            className="space-y-2 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="flex items-center justify-center md:justify-start">
              🎓 <span className="ml-2"><strong>Rohini College of Engineering</strong> (B.E. – ECE)</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              📍 <span className="ml-2">Rooted in <strong>Kanyakumari</strong>, Reaching Beyond</span>
            </p>
          </motion.div>
          
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const el = document.getElementById('journey');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              🚀 View My Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              onClick={() => setIsContactOpen(true)}
            >
              📬 Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="relative">
            {/* Main Circle with Gradient */}
            <motion.div
              className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    💻
                  </motion.div>
                  <div className="text-2xl font-bold mb-2">Code</div>
                  <div className="text-lg text-gray-300">Create</div>
                  <div className="text-lg text-gray-300">Inspire</div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Icons */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              ⚛️
            </motion.div>
            <motion.div
              className="absolute top-1/2 -left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            >
              🔧
            </motion.div>
            <motion.div
              className="absolute -bottom-6 left-1/3 w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
            >
              📱
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white text-center">
          <div className="text-sm mb-2">Scroll to explore</div>
          <div className="text-2xl">⬇️</div>
        </div>
      </motion.div>
      {/* Contact Modal */}
      {isContactOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsContactOpen(false)}
          />
          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-10 w-11/12 max-w-md rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 border border-white/10 p-6 text-white shadow-2xl"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-3 right-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors p-2"
              aria-label="Close"
            >
              ✖
            </button>
            <div className="text-center mb-4">
              <div className="text-2xl font-extrabold">Get in touch</div>
              <div className="text-gray-300 mt-1">Connect with me on your favorite platform</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.instagram.com/learn.with.shas/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-pink-400/40 bg-pink-500/10 px-4 py-3 hover:bg-pink-500/20 transition-colors"
              >
                <span className="text-2xl">📸</span>
                <span className="font-semibold">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anusha2105"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-green-400/40 bg-green-500/10 px-4 py-3 hover:bg-green-500/20 transition-colors"
              >
                <span className="text-2xl">💬</span>
                <span className="font-semibold">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com/@learnwithshas?si=mfghGMsOQ_XgyvZx"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 hover:bg-red-500/20 transition-colors"
              >
                <span className="text-2xl">▶️</span>
                <span className="font-semibold">YouTube</span>
              </a>
              <a
                href="https://github.com/Anusha-ahsuna"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-slate-400/40 bg-slate-500/10 px-4 py-3 hover:bg-slate-500/20 transition-colors"
              >
                <span className="text-2xl">🐙</span>
                <span className="font-semibold">GitHub</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;

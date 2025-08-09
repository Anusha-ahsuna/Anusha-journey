import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaHeart, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Anusha-ahsuna",
      label: "GitHub",
      color: "hover:text-purple-400",
      bg: "hover:bg-purple-500/20"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/anusha2105",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-500/20"
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@LearnWithShas",
      label: "YouTube",
      color: "hover:text-red-400",
      bg: "hover:bg-red-500/20"
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/+919443355329",
      label: "WhatsApp",
      color: "hover:text-green-400",
      bg: "hover:bg-green-500/20"
    },
    {
      icon: FaEnvelope,
      href: "mailto:anushaselvan123@gmail.com",
      label: "Email",
      color: "hover:text-yellow-400",
      bg: "hover:bg-yellow-500/20"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/lens_andverse?igsh=eG16cTZ4eWdma3dn",
      label: "Instagram",
      color: "hover:text-red-400",
      bg: "hover:bg-red-500/20"
    }
  ];

  const quickLinks = [
    { name: "About Journey", href: "#hero" },
    { name: "Pandemic Era", href: "#pandemic" },
    { name: "Code Awakening", href: "#code-awakening" },
    { name: "Mentoring", href: "#mentor" },
    { name: "Future Plans", href: "#epilogue" }
  ];

  const skills = [
    "React.js", "JavaScript", "Frontend Development", 
    "Technical Training", "Arduino", "IoT", "Teaching"
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/5 rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          💻
        </motion.div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            
            {/* About Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <motion.h3
                  className="text-2xl font-bold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Anusha's Portfolio
                  </span>
                </motion.h3>
                <p className="text-gray-400 leading-relaxed">
                  From circuits to code, from Kanyakumari to the world. 
                  Empowering the next generation through technology and education.
                </p>
              </div>
              
              <motion.div
                className="flex items-center space-x-2 text-gray-400"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaMapMarkerAlt className="text-yellow-400" />
                <span>Kanyakumari, Tamil Nadu, India</span>
              </motion.div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-green-400">🟢</span>
                <span>Currently: Technical Trainer at JClick Solutions</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold text-blue-400 mb-4">📍 Journey Highlights</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></span>
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Skills & Tech */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-green-400 mb-4">🛠️ Skills & Tech</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-gray-800/50 border border-gray-700/30 rounded-full text-sm text-gray-300 hover:bg-gray-700/50 transition-colors duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-400/20">
                <p className="text-purple-200 text-sm italic">
                  "Teaching is my passion, coding is my craft, and inspiring others is my mission."
                </p>
              </div>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold text-pink-400 mb-4">🌐 Let's Connect</h4>
              <p className="text-gray-400 text-sm mb-4">
                Open to collaboration, mentoring opportunities, and meaningful conversations about tech and education.
              </p>
              
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center w-12 h-12 bg-gray-800/50 rounded-xl border border-gray-700/30 ${social.color} ${social.bg} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-400/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-yellow-200 text-sm font-medium">
                  💡 Always excited to discuss new opportunities and share knowledge!
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="pt-8 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Anusha's Portfolio. Crafted with{" "}
                  <motion.span
                    className="inline-block text-red-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaHeart className="inline" />
                  </motion.span>{" "}
                  and React.js
                </p>
              </div>

              {/* Journey Stats */}
              <div className="flex flex-wrap gap-6 text-center">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl font-bold text-yellow-400">100+</div>
                  <div className="text-xs text-gray-500">Students Trained</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl font-bold text-blue-400">15+</div>
                  <div className="text-xs text-gray-500">Colleges Visited</div>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl font-bold text-green-400">4+</div>
                  <div className="text-xs text-gray-500">Major Projects</div>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div
                className="text-center md:text-right"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#hero"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
                >
                  <span>🚀 Back to Top</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Easter Egg */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.p
              className="text-xs text-gray-600 font-mono"
              whileHover={{ color: "#fbbf24" }}
            >
              git log --oneline | grep "life" | wc -l → ∞
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

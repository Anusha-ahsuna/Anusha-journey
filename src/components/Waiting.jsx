import React, { useState } from "react";
import { motion } from "framer-motion";

const Epilogue = () => {
  const [currentGoal, setCurrentGoal] = useState(0);
  
  const futureGoals = [
    {
      icon: "🚀",
      title: "Advanced Full-Stack Mastery",
      description: "Diving deeper into backend technologies, cloud platforms, and DevOps practices",
      timeline: "Next 6 months",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🌍",
      title: "Global Remote Opportunities",
      description: "Contributing to international projects and collaborating with diverse teams",
      timeline: "2024-2025",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📚",
      title: "Educational Platform",
      description: "Building my own training platform to reach thousands of aspiring developers",
      timeline: "Long-term vision",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "💡",
      title: "Innovation & Startups",
      description: "Creating solutions that bridge rural talent with global opportunities",
      timeline: "Future dream",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const skills = [
    { name: "Frontend", level: 90, icon: "⚛️" },
    { name: "Backend", level: 75, icon: "🔧" },
    { name: "Teaching", level: 95, icon: "👨‍🏫" },
    { name: "Leadership", level: 85, icon: "👑" },
    { name: "Innovation", level: 80, icon: "💡" }
  ];

  const nextChapter = [
    { phase: "Learning", icon: "📖", desc: "Continuous skill upgrade" },
    { phase: "Building", icon: "🔨", desc: "Creating impactful solutions" },
    { phase: "Teaching", icon: "🎓", desc: "Sharing knowledge globally" },
    { phase: "Leading", icon: "🌟", desc: "Inspiring next generation" }
  ];

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated background particles */}
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full opacity-60"
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-pink-400 rounded-full opacity-50"
          animate={{
            y: [0, -80, 0],
            x: [0, -40, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-2 h-2 bg-blue-400 rounded-full opacity-70"
          animate={{
            y: [0, -60, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        
        {/* Code symbols floating */}
        <motion.div
          className="absolute top-16 right-16 text-4xl opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ⚛️
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-16 text-3xl opacity-15"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          💻
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-6xl md:text-7xl font-extrabold mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Epilogue: Still Loading...
            </span>
          </motion.h2>
          
          {/* Loading Animation */}
          <motion.div
            className="flex justify-center items-center space-x-2 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gray-700 rounded-full h-2 w-32 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 2, delay: 0.8 }}
              />
            </div>
            <span className="text-yellow-400 font-mono">85%</span>
          </motion.div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The story continues to unfold, each chapter more exciting than the last...
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Current State */}
              <div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">📍 Where I Am Now</h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I'm still <span className="text-yellow-400 font-semibold">learning</span>, 
                    still <span className="text-pink-400 font-semibold">evolving</span>. 
                    Rooted in <span className="text-yellow-500 font-bold">Kanyakumari</span>, 
                    yet my vision stretches far beyond horizons.
                  </p>
                  
                  <motion.div
                    className="bg-purple-500/10 border border-purple-400/30 rounded-xl p-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-purple-200 font-medium italic">
                      💫 "My journey isn't ending — it's simply paused between commits, 
                      awaiting the next big push."
                    </p>
                  </motion.div>
                  
                  <p>
                    Every challenge is a new line of code, and every milestone 
                    a merge that shapes who I'm becoming.
                  </p>
                </div>
              </div>

              {/* Right: Skills Progress */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">🎯 Current Skill Level</h4>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-yellow-400 to-pink-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Goals Interactive Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-yellow-400">
            🚀 What's Next in My Journey
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${goal.color}/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 cursor-pointer`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentGoal(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="text-4xl mb-4 text-center"
                  animate={currentGoal === index ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {goal.icon}
                </motion.div>
                <h4 className="font-bold text-white mb-2 text-center">{goal.title}</h4>
                <p className="text-gray-300 text-sm text-center mb-3">{goal.description}</p>
                <div className="text-center">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs text-gray-200">
                    {goal.timeline}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Next Chapter Preview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-pink-400">
            🔮 The Next Chapter: A Preview
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {nextChapter.map((phase, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mb-3 mx-auto shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {phase.icon}
                </motion.div>
                <h4 className="font-bold text-white mb-1">{phase.phase}</h4>
                <p className="text-gray-400 text-sm">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Visual Elements */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20 max-w-4xl mx-auto">
            <motion.div
              className="flex justify-center space-x-8 mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="text-6xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                💻
              </motion.div>
              <motion.div
                className="text-6xl"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                🌊
              </motion.div>
              <motion.div
                className="text-6xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
              >
                🚀
              </motion.div>
            </motion.div>
            
            <h4 className="text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text mb-4">
              From Kanyakumari to the World
            </h4>
            <p className="text-xl text-gray-300 leading-relaxed">
              The adventure continues, and the best is yet to come. 
              Stay tuned for the next commit in this incredible journey! 🌟
            </p>
            
            <motion.div
              className="mt-6 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-gradient-to-r from-yellow-500 to-pink-500 text-black px-8 py-3 rounded-full font-bold shadow-lg">
                git commit -m "Chapter loading... ⏳"
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Epilogue;

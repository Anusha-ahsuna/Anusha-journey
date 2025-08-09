import { motion } from "framer-motion";

const PassportPause = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Stars */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-yellow-300 rounded-full"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-blue-300 rounded-full"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-16 right-16 text-6xl opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ✈️
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-16 text-5xl opacity-30"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        >
          🌍
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-8 text-4xl opacity-25"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        >
          📘
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-red-400 via-yellow-500 to-blue-400 bg-clip-text text-transparent">
              The Passport Pause
            </span>
          </motion.h2>
          <p className="text-xl text-blue-200 font-medium">
            When dreams meet destiny's different plans
          </p>
        </motion.div>

        {/* Main Story Card */}
        <motion.div
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Visual Story */}
              <div className="space-y-8">
                <motion.div
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {/* Dream vs Reality Visual */}
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-300/30">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-center">
                        <motion.div
                          className="text-4xl mb-2"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          💭
                        </motion.div>
                        <p className="text-blue-200 font-semibold">The Dream</p>
                      </div>
                      <motion.div
                        className="text-3xl text-red-400"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ❌
                      </motion.div>
                      <div className="text-center">
                        <motion.div
                          className="text-4xl mb-2"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          🏠
                        </motion.div>
                        <p className="text-green-200 font-semibold">The Reality</p>
                      </div>
                    </div>
                    <div className="text-center text-white/80 text-sm">
                      From international dreams to local roots
                    </div>
                  </div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full flex-shrink-0"></div>
                    <p className="text-yellow-200">Applied for overseas opportunities</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-red-400 rounded-full flex-shrink-0"></div>
                    <p className="text-red-200">Application rejected</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full flex-shrink-0"></div>
                    <p className="text-green-200">Stayed rooted in Kanyakumari</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <p className="text-blue-200">Discovered new purpose</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Story Content */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-6">
                    When Doors Close, Windows Open
                  </h3>
                  
                  <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p>
                      I had my sights set on international horizons — new cultures, 
                      global opportunities, and adventures beyond the familiar shores of Kanyakumari.
                    </p>
                    
                    <motion.div
                      className="bg-red-500/20 border border-red-400/30 rounded-xl p-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-red-200 font-medium">
                        💔 The rejection felt like a roadblock, a dream deferred.
                      </p>
                    </motion.div>
                    
                    <p>
                      But sometimes what feels like rejection is really redirection. 
                      Maybe this soil, this place that shaped me, wasn't done with me yet.
                    </p>
                    
                    <motion.div
                      className="bg-green-500/20 border border-green-400/30 rounded-xl p-4"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-green-200 font-medium">
                        🌱 Perhaps I was being rooted for something greater — 
                        to bloom where I was planted and inspire others to do the same.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reflection Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🧭
            </motion.div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 italic">
              "Not all who wander are lost, and not all who stay are stuck."
            </blockquote>
            <p className="text-purple-200 text-lg">
              Sometimes the journey leads you exactly where you need to be, 
              even when it's not where you planned to go.
            </p>
          </motion.div>
        </motion.div>

        {/* Kanyakumari Love */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-8 py-4 border border-orange-300/20">
            <span className="text-orange-200 font-semibold text-lg">
              🏛️ Rooted in Kanyakumari, Growing Beyond Boundaries 🌊
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PassportPause;

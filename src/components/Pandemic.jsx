import { motion } from "framer-motion";

const PandemicChapter = () => {
  const achievements = [
    { icon: "📚", title: "Electronics Teaching", desc: "Taught complex electronic concepts to Masters students" },
    { icon: "🌍", title: "UPSC EVS Training", desc: "Environmental Science coaching for UPSC aspirants" },
    { icon: "🗣️", title: "Spoken English", desc: "Enhanced communication skills of students" },
    { icon: "🎭", title: "Cultural Events", desc: "Led department organizing morale-boosting activities" }
  ];

  return (
    <section id="journey" className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 transform rotate-12 scale-150"></div>
      </div>
      
      {/* Virus Animation Elements */}
      <motion.div
        className="absolute top-10 right-10 w-16 h-16 bg-red-200 rounded-full opacity-30"
        animate={{ 
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-12 h-12 bg-red-300 rounded-full opacity-20"
        animate={{ 
          x: [0, -25, 35, 0],
          y: [0, 25, -15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              The Unseen Wave
            </span>
          </motion.h2>
          <p className="text-xl text-gray-600 font-medium">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pandemic Era: When the World Paused, I Evolved
            </span>
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="text-6xl mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🦠➡️📚
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                From Internship Interruption to Academic Innovation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                When COVID-19 brought my Coimbatore internship to an unexpected halt, 
                I didn't just return home — I transformed challenge into opportunity.
              </p>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-800 font-medium italic">
                  "Sometimes the greatest detours lead to the most meaningful destinations."
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <motion.div
                className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold text-red-800 mb-2">🔄 The Pivot</h4>
                <p className="text-red-700">Internship cut short → Returned to Kanyakumari</p>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold text-blue-800 mb-2">👥 Dual Role</h4>
                <p className="text-blue-700">Masters student + Teaching staff member</p>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-semibold text-green-800 mb-2">🌱 Growth</h4>
                <p className="text-green-700">Discovered passion for teaching and leadership</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What I Accomplished During the Pandemic
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.icon}
                </motion.div>
                <h4 className="font-bold text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Learnings */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-200">
            <motion.h4
              className="text-2xl font-bold text-purple-800 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              💪 Lessons from the Storm
            </motion.h4>
            <div className="flex flex-wrap justify-center gap-4 text-purple-700">
              <span className="bg-white/60 px-4 py-2 rounded-full font-medium">🔄 Adaptability</span>
              <span className="bg-white/60 px-4 py-2 rounded-full font-medium">💪 Resilience</span>
              <span className="bg-white/60 px-4 py-2 rounded-full font-medium">👑 Leadership</span>
              <span className="bg-white/60 px-4 py-2 rounded-full font-medium">❤️ Empathy</span>
              <span className="bg-white/60 px-4 py-2 rounded-full font-medium">🎯 Multi-tasking</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PandemicChapter;

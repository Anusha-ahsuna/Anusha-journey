import { motion } from "framer-motion";

const projects = [
  {
    title: "Billing Software",
    organization: "Spangles Infotech",
    client: "Surya Car Spare Parts",
    role: "Software Developer",
    icon: "💰",
    tech: ["JavaScript", "HTML", "CSS", "Database"],
    impact: "Streamlined billing processes",
    responsibilities: [
      "Developed dynamic website features",
      "Implemented user-friendly billing interface",
      "Integrated database functionality"
    ],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Advanced Billing Software",
    organization: "Supermarket ",
    role: "Software Developer",
    icon: "🛒",
    tech: ["React.js", "Node.js", "Database", "UI/UX"],
    impact: "Enhanced retail management",
    responsibilities: [
      "Designed comprehensive project flow architecture",
      "Built responsive UIs in React.js environment",
      "Optimized for high-volume transactions"
    ],
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Blood Bank (Uyir Thuligal)",
    organization: "SPANGLES INFOTECH",
    role: "React JS Developer",
    icon: "🩸",
    tech: ["React.js", "Frontend", "Testing", "UI/UX"],
    impact: "Life-saving donation platform",
    responsibilities: [
      "Architected complete project workflow",
      "Developed intuitive React.js user interfaces",
      "Conducted thorough manual testing",
      "Ensured accessibility for all users"
    ],
    color: "from-red-500 to-pink-600"
  },
  {
    title: "Salon & Parlour Booking App",
    organization: "Beauty Industry ",
    role: "React JS Developer",
    icon: "💇‍♀️",
    tech: ["React.js", "Booking System", "UI/UX", "Frontend"],
    impact: "Digitized beauty services",
    responsibilities: [
      "Created seamless booking flow",
      "Built modern React.js interfaces",
      "Integrated appointment management",
      "Designed mobile-responsive layouts"
    ],
    color: "from-purple-500 to-indigo-600"
  },
];

const skills = [
  { name: "Node.js", icon: "🟢", level: 85 },
  { name: "Python & Django", icon: "🐍", level: 80 },
  { name: "MongoDB", icon: "🍃", level: 80 },
  { name: "SQL", icon: "💾", level: 75 },
  { name: "React.js", icon: "⚛️", level: 90 },
   { name: "Tailwind CSS", icon: "🎨", level: 80 },
 ];

export default function CodeAwakening() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-yellow-500/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 bg-blue-500/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 text-4xl opacity-5"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              The Code Awakening
            </span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-yellow-400 font-semibold">Spangles Infotech</span> became my launchpad — 
            where I transformed from electronics enthusiast to full-stack developer, 
            mastering <span className="text-blue-400">frontend development</span>, 
            <span className="text-green-400"> databases</span>, and 
            <span className="text-purple-400"> deployment technologies</span>.
          </p>
        </motion.div>

        {/* Stats/Journey Overview */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: "🚀", title: "4 Major Projects", desc: "Diverse industry solutions" },
            { icon: "💡", title: "Full-Stack Learning", desc: "Frontend to deployment" },
            { icon: "🎯", title: "Real Client Impact", desc: "Solving actual problems" },
            { icon: "📢", title: "College Speaking", desc: "Sharing knowledge" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <h3 className="font-bold text-yellow-400 mb-2">{stat.title}</h3>
              <p className="text-gray-400 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Gained */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-yellow-400">
            🛠️ Skills Mastered
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <span className="font-semibold text-white">{skill.name}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <p className="text-right text-sm text-gray-400 mt-1">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-yellow-400">
            🎯 Projects That Defined My Journey
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl shadow-lg`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                        <p className="text-gray-400 text-sm">{project.organization}</p>
                      </div>
                    </div>
                    <motion.div
                      className="bg-yellow-500/20 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-yellow-300 text-xs font-semibold">{project.role}</span>
                    </motion.div>
                  </div>

                  {/* Client Info */}
                  {project.client && (
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-4">
                      <p className="text-blue-300 text-sm">
                        <span className="font-semibold">Client:</span> {project.client}
                      </p>
                    </div>
                  )}

                  {/* Impact */}
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-6">
                    <p className="text-green-300 text-sm font-medium">
                      🎯 {project.impact}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <p className="text-gray-400 text-sm mb-3">Key Contributions:</p>
                    <ul className="space-y-2">
                      {project.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start space-x-3 text-gray-300 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="text-yellow-400 mt-1">▶</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Learning */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20 max-w-4xl mx-auto">
            <motion.div
              className="text-5xl mb-4"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🔥
            </motion.div>
            <h4 className="text-3xl font-bold text-yellow-400 mb-4">
              The Transformation
            </h4>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              From tinkering with Arduino sensors to architecting full-stack web applications — 
              Spangles Infotech didn't just give me a job, it gave me a new identity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-blue-300 font-medium">Real-world Experience</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-green-300 font-medium">Client Interaction</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-purple-300 font-medium">Speaking Opportunities</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-yellow-300 font-medium">Technical Growth</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

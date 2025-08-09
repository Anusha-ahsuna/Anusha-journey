import { motion } from "framer-motion";

export default function MentorInMe() {
  const achievements = [
    { icon: "🎓", title: "College Visits", count: "15+", desc: "Campuses reached across the region" },
    { icon: "👥", title: "Students Trained", count: "100+", desc: "Young minds empowered" },
    { icon: "🛠️", title: "Skills Taught", count: "10+", desc: "Technical & soft skills covered" },
    { icon: "💡", title: "Success Stories", count: "50+", desc: "Students placed in tech roles" }
  ];

  const courses = [
    { name: "Frontend Development", tech: ["HTML", "CSS", "JavaScript", "React"], icon: "🌐" },
    { name: "Web Development Fundamentals", tech: ["Responsive Design", "Git", "APIs"], icon: "💻" },
    { name: "Soft Skills Training", tech: ["Communication", "Teamwork", "Problem Solving"], icon: "🗣️" },
    { name: "Career Guidance", tech: ["Resume Building", "Interview Prep", "Industry Insights"], icon: "🎯" }
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-emerald-500/10 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-32 h-32 bg-cyan-500/10 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 right-10 text-5xl opacity-5"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          👨‍🏫
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
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Career at JClick Solutions
            </span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-emerald-400 font-semibold">JClick Solutions</span>, 
            I discovered my calling — transforming curious minds into confident developers, 
            one lesson at a time.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Visual Story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Profile Circle with Animation */}
            <div className="relative mx-auto lg:mx-0 w-fit">
              <motion.div
                className="w-64 h-64 rounded-full bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-2 shadow-2xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="text-8xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    👨‍🏫
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating Achievement Badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-xs">100+</div>
                  <div className="text-xs">Students</div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-emerald-500 rounded-full w-14 h-14 flex items-center justify-center text-white font-bold shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-xs">15+</div>
                  <div className="text-xs">Colleges</div>
                </div>
              </motion.div>
            </div>

            {/* Quote */}
            <motion.div
              className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="text-xl font-bold text-emerald-200 mb-4 italic text-center">
                "Teaching is not filling a bucket, but lighting a fire"
              </blockquote>
              <p className="text-center text-gray-300">
                Every student I mentor becomes a new story of transformation
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-emerald-400 mb-6">
                Empowering the Next Generation
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  At JClick Solutions, I stepped into a role that felt like destiny — 
                  becoming a <span className="text-emerald-400 font-semibold">Technical Trainer</span> 
                  who bridges the gap between academic learning and industry reality.
                </p>
                
                <motion.div
                  className="bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-cyan-200 font-medium">
                    🎯 I witnessed the magical moment when confusion transforms into clarity, 
                    when students' eyes light up with understanding and possibility.
                  </p>
                </motion.div>
                
                <p>
                  Traveling to colleges across the region, I've had the privilege of meeting 
                  diverse minds, each with unique dreams and potential. My mission became clear: 
                  to equip them with both technical skills and the confidence to use them.
                </p>
                
                <motion.div
                  className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-emerald-200 font-medium">
                    🌟 From shy first-year students to confident job-ready graduates — 
                    I've been part of hundreds of transformation stories.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-emerald-400">
            📊 Impact by Numbers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.icon}
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-emerald-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {achievement.count}
                </motion.div>
                <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Courses Taught */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-emerald-400">
            📚 Courses & Skills I Teach
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <motion.span
                    className="text-3xl mr-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {course.icon}
                  </motion.span>
                  <h4 className="text-xl font-bold text-emerald-400">{course.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-8 border border-emerald-300/20 max-w-4xl mx-auto">
            <motion.div
              className="text-6xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              💫
            </motion.div>
            <h4 className="text-3xl font-bold text-emerald-400 mb-4">
              My Teaching Philosophy
            </h4>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I believe every student has the potential to become a problem-solver, 
              a creator, and a leader. My role is not just to teach code, 
              but to nurture confidence and curiosity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-emerald-300 font-medium">Hands-on Learning</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-cyan-300 font-medium">Real Projects</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-teal-300 font-medium">Industry Connect</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-emerald-300 font-medium">Career Guidance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

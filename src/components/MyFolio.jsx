import React from "react";
import { motion } from "framer-motion";

const chapters = [
  {
    title: "Prologue: The Circuit Spark",
    content:
      "I was never just an electronics student — I was a creator in disguise. With a love for Embedded C, Arduino, and IoT, I lit my first LED and realized I could create magic."
  },
  {
    title: "Chapter 1: The Unseen Wave (Pandemic Era)",
    content:
      "Internship in Coimbatore was cut short by COVID. Back in Kanyakumari, I became both a student and a staff during my Masters — teaching Electronics, EVS for UPSC, and Spoken English while leading Cultural Events."
  },
  {
    title: "Chapter 2: The Passport Pause",
    content:
      "I dreamed of going abroad, but my application was rejected. It felt like destiny was anchoring me to Kanyakumari. Maybe this soil was still rooting me for something greater."
  },
  {
    title: "Chapter 3: The Code Awakening",
    content:
      "Joining Spagles Infotech as a Frontend Developer changed everything. I learned frontend development, databases, backend deployment via CyberPanel, and got to speak at colleges about software careers."
  },
  {
    title: "Chapter 4: The Mentor in Me",
    content:
      "At JClick Solutions, I became a Technical Trainer — teaching, mentoring, inspiring. I was speaking with young minds and watching their eyes light up with curiosity."
  },
  {
    title: "Epilogue: Still Loading...",
    content:
      "I’m still learning, still evolving. Rooted in Kanyakumari, but reaching globally. The journey doesn’t end here. It’s just paused between commits."
  }
];

const projects = [
  {
    name: "Restaurant Ordering System",
    description: "A full-featured food ordering app with React, JSON Server, and Django integration. Includes menus, favorites, cart, and dashboard.",
    tech: ["React", "Axios", "Django", "MongoDB"],
    link: "https://github.com/anusha/restaurant-app"
  },
  {
    name: "Student Feedback System",
    description: "A MERN stack app for managing and reviewing student feedback with admin CRUD functionality.",
    tech: ["React", "Node.js", "TypeScript", "MongoDB"],
    link: "https://github.com/anusha/student-feedback"
  },
  {
    name: "Beauty Parlour Website",
    description: "A single-page React.js website with gold theme and secure contact form using Node.js and Nodemailer.",
    tech: ["React", "Tailwind", "Node.js"],
    link: "https://github.com/anusha/beauty-parlour"
  }
];

export default function PortfolioStory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-12">From Circuits to Code: My Journey</h1>
      <div className="space-y-16 max-w-3xl mx-auto">
        {chapters.map((chapter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">{chapter.title}</h2>
            <p className="text-lg leading-relaxed text-gray-300">{chapter.content}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">🚀 My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Project ↗
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">📬 Contact Me</h2>
        <p className="text-gray-300 mb-6">I'm open to collaboration, teaching opportunities, and storytelling tech journeys. Let’s connect!</p>
        <a
          href="mailto:anusha@example.com"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
        >
          Send Email
        </a>
      </div>

      <footer className="mt-24 text-center text-sm text-gray-500">
        Built with 💙 by Anusha | Rooted in Kanyakumari, Reaching Beyond
      </footer>
    </div>
  );
}

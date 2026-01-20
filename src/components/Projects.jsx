import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      name: 'Chat Karo',
      subtitle: 'Real-Time Chat Application',
      date: 'Mar 2025',
      description: 'A real-time chat app supporting one-to-one and group messaging. Features include online/offline indicators, message delivery status, and optimized WebSocket handling for smooth communication across devices.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.IO'],
      liveDemo: 'https://real-time-chat-app-sflh.onrender.com/',
      github: 'https://github.com/SachJaiswal/Real-time-Chat-App'
    },
    {
      name: 'Shrinkk-It',
      subtitle: 'URL Shortener & Analytics Platform',
      date: 'Dec 2025',
      description: 'A full-stack web application for shortening URLs with user authentication, analytics tracking, and QR code generation. Displays total clicks, visit timestamps, IP address, location, and device/browser details.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      liveDemo: 'https://shorturll.online/',
      github: 'https://github.com/SachJaiswal/URL-SHORTNER'
    },
    {
      name: 'Venue Management System',
      subtitle: 'Event Booking Platform',
      date: 'Sept 2024',
      description: 'A Spring Boot-based web application for managing venues and event bookings end-to-end. Includes RESTful APIs, authentication modules, and a responsive UI for venue search, booking, and user management.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Spring Security', 'HTML/CSS'],
      liveDemo: null,
      github: 'https://github.com/SachJaiswal/Venue-Management-System'
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Projects
        </motion.h2>

        <div className="space-y-12 max-w-4xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{project.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-sm font-medium"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

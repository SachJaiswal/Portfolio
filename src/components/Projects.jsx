import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      name: 'AI Document Intelligence Platform (RAG)',
      subtitle: 'Conversational Retrieval & Vector Indexing System',
      date: 'Current',
      featured: true,
      description: 'A scalable Retrieval-Augmented Generation (RAG) platform that enables intelligent conversational querying and contextual extraction across multi-page PDF documents.',
      bullets: [
        'Built PDF ingestion pipeline: parsing, chunking, embedding generation, and vector indexing with Qdrant.',
        'Integrated OpenAI embeddings for semantic search and conversational retrieval over documents.',
        'Optimized response latency using Redis caching and modular backend design.'
      ],
      tech: ['LangChain', 'OpenAI', 'Redis', 'Qdrant', 'Node.js', 'Python', 'FastAPI'],
      liveDemo: null,
      github: 'https://github.com/SachJaiswal'
    },
    {
      name: 'Tripzo – AI Travel Companion',
      subtitle: 'Personalized Travel Planning & Route Optimization',
      date: '2026',
      featured: true,
      description: 'An AI-powered travel planning companion that crafts day-by-day itineraries tailored to user budget, timing, preferences, and real-time transit dynamics.',
      bullets: [
        'Built AI-powered travel planning platform generating personalized day-by-day itineraries based on destination, dates, budget, and travel preferences.',
        'Integrated Google Maps places, weather data, budget estimation, and route optimization for practical trip planning.',
        'Developed AI assistant and trip customization workflows using natural-language prompts.'
      ],
      tech: ['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'OpenAI API', 'Google Maps API'],
      liveDemo: 'https://github.com/SachJaiswal',
      github: 'https://github.com/SachJaiswal'
    },
    {
      name: 'Shrinkk-It – URL Shortener',
      subtitle: 'URL Shortener & Advanced Click Analytics',
      date: 'Dec 2025',
      featured: false,
      description: 'A full-stack URL shortening platform featuring user authentication, QR code generation, and an interactive click analytics dashboard.',
      bullets: [
        'Built full-stack URL shortening platform with authentication, QR code generation, and click analytics.',
        'Designed scalable REST APIs and optimized MongoDB schema for high-performance lookups.',
        'Tracked total clicks, visit timestamps, IP addresses, geolocation, and device/browser breakdowns.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
      liveDemo: 'https://shorturll.online/',
      github: 'https://github.com/SachJaiswal/URL-SHORTNER'
    },
    {
      name: 'Real-Time Chat Application',
      subtitle: 'Instant Messaging & Real-Time Event Communication',
      date: '2025',
      featured: false,
      description: 'A responsive real-time messaging application supporting one-on-one and group discussions with instant WebSocket event synchronization.',
      bullets: [
        'Developed full-stack real-time chat application using React.js, Node.js, and Socket.IO.',
        'Implemented real-time messaging, online/offline status indicators, conversation management, and MongoDB persistence.'
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'Express.js', 'WebSockets'],
      liveDemo: 'https://real-time-chat-app-sflh.onrender.com/',
      github: 'https://github.com/SachJaiswal/Real-time-Chat-App'
    },
    {
      name: 'Venue Management System',
      subtitle: 'Enterprise Event & Venue Booking System',
      date: 'Sept 2024',
      featured: false,
      description: 'An enterprise Spring Boot application for scheduling and managing venue reservations, user access permissions, and booking audits.',
      bullets: [
        'Architected modular RESTful services with Spring Boot and relational database persistence in MySQL.',
        'Integrated Spring Security authentication and role-based authorization for administrative workflows.'
      ],
      tech: ['Java', 'Spring Boot', 'MySQL', 'Spring Security', 'REST APIs'],
      liveDemo: null,
      github: 'https://github.com/SachJaiswal/Venue-Management-System'
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            A selection of AI platforms, full-stack applications, and backend systems engineered with modern frameworks and robust database designs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                project.featured
                  ? 'bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-950/20 border-accent/40 shadow-sm'
                  : 'bg-white dark:bg-gray-800/80 border-gray-200 dark:border-gray-700/80'
              }`}
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent dark:bg-accent/20 dark:text-blue-300">
                          <Sparkles className="w-3 h-3" />
                          AI / Featured
                        </span>
                      )}
                    </div>
                    <p className="text-accent dark:text-blue-400 text-xs sm:text-sm font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700/70 text-gray-600 dark:text-gray-400 text-xs font-medium whitespace-nowrap self-start">
                    {project.date}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Resume bullet points */}
                <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-gray-100 dark:border-gray-700/60">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2.5">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-xs sm:text-sm font-medium shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-100 dark:bg-gray-700/70 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-xs sm:text-sm font-medium"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

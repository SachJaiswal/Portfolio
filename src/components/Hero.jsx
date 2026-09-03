import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Briefcase, Sparkles } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden pt-28 pb-16">
      <div className="container-max text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Software Engineer @ Corbin Technology Solutions</span>
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Sachin Jaiswal
          </h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4"
          >
            Software Engineer & Full Stack Developer
          </motion.p>

          {/* Location / Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent" />
              Mumbai, Maharashtra, India
            </span>
          </motion.div>

          {/* Professional Summary Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building enterprise web applications, AI-powered solutions, and scalable backend systems with React.js, TypeScript, Node.js, and Spring Boot.
          </motion.p>

          {/* Quick Metrics / Highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-10"
          >
            <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/80">
              <p className="text-xl sm:text-2xl font-bold text-accent">4+</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Production Software</p>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/80">
              <p className="text-xl sm:text-2xl font-bold text-accent">15+</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">RESTful APIs</p>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/80">
              <p className="text-xl sm:text-2xl font-bold text-accent">RAG & GenAI</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">LLM Integration</p>
            </div>
            <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/80">
              <p className="text-xl sm:text-2xl font-bold text-accent">9.29 </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">CGPA (B.E.)</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium shadow-sm hover:shadow"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 font-medium"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/SachJaiswal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300 shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sachinjaiswal04/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sachinjaiswal382004@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero


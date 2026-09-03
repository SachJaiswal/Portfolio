import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer (Full Stack)',
      company: 'Corbin Technology Solutions Pvt. Ltd.',
      period: 'Feb 2026 – Present',
      location: 'Mumbai, India',
      isCurrent: true,
      tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'OpenAI API', 'AWS', 'Redis', 'GitHub Actions', 'REST APIs'],
      bullets: [
        'Build and maintain 4+ production web applications using React.js, TypeScript, Node.js, and Express.js, following reusable and service-oriented design patterns.',
        'Design and develop 15+ RESTful APIs connecting frontend with backend using MongoDB and PostgreSQL, focusing on scalable and maintainable architecture.',
        'Implement Generative AI features using OpenAI API integration and prompt engineering for AI-powered application workflows.',
        'Deploy applications on AWS, use Redis for caching, and build CI/CD pipelines with GitHub Actions for automated testing and deployment.',
        'Build responsive role-based UIs and troubleshoot production issues to improve application reliability and user workflows.'
      ]
    },
    {
      title: 'Android Intern',
      company: 'Pace Institution for Science',
      period: 'Jan 2023 – Jul 2023',
      location: 'Mumbai, India',
      isCurrent: false,
      tech: ['Java', 'Firebase Authentication', 'Firestore', 'XML', 'Android Studio'],
      bullets: [
        'Developed UI screens for an educational Android application using Java and XML.',
        'Integrated Firebase Authentication and Firestore Database for secure user login and real-time data storage.',
        'Improved app stability by organizing database structure and performing module-wise testing.'
      ]
    },
    {
      title: 'Full Stack Web Developer Intern',
      company: 'Cyber Point Computer',
      period: 'Jul 2022 – Aug 2022',
      location: 'Mumbai, India',
      isCurrent: false,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'AWS EC2', 'Cloudinary', 'SEO'],
      bullets: [
        'Updated and improved the company website using responsive HTML, CSS, and modern JavaScript.',
        'Handled website deployment and hosting on AWS EC2 with server configuration and monitoring.',
        'Implemented image asset optimization using Cloudinary and integrated search engine optimization (SEO) elements.'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Track record of shipping production-grade full-stack web applications, architecting RESTful services, and building AI-enhanced workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                exp.isCurrent
                  ? 'bg-white dark:bg-gray-800 border-accent/40 shadow-md shadow-accent/5 ring-1 ring-accent/20'
                  : 'bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700/80'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-700 dark:text-gray-300 font-medium">
                      <span className="text-accent">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap bg-gray-100 dark:bg-gray-700/60 px-2.5 py-1 rounded-full w-fit shrink-0">
                    <Calendar className="w-3 h-3 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 mb-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack pinned to bottom */}
              <div className="flex flex-wrap gap-1.5 pt-3 mt-auto border-t border-gray-100 dark:border-gray-700/60">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

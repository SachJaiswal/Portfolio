import { motion } from 'framer-motion'
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react'

const About = () => {
  const skills = [
    'React.js',
    'TypeScript',
    'Node.js',
    'Express.js',
    'Spring Boot 3',
    'Java',
    'JavaScript',
    'OpenAI API / GenAI',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'Docker',
    'AWS EC2',
    'REST APIs'
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Bio */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                I am a <span className="font-semibold text-gray-900 dark:text-white">Software Engineer and Full Stack Developer</span> with hands-on experience building enterprise web applications, AI-powered solutions, and scalable backend systems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Proficient in modern engineering workflows using <span className="text-accent font-medium">React.js, Node.js, TypeScript, and MongoDB</span>, coupled with robust enterprise backend knowledge in <span className="text-accent font-medium">Java and Spring Boot 3</span>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My work spans diverse problem domains including enterprise LMS platforms, intelligent travel systems, high-throughput REST APIs, authentication security, analytics tracking, and real-time event-driven architectures.
              </p>
            </motion.div>

            {/* Leadership & Co-Curricular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4 border-t border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Leadership & Co-Curricular
                </h3>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    CSI-TCET & Rotaract TCET
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    2023 – 2024 • Thakur College, Mumbai
                  </span>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Led operations for 5,000+ attendee tech fest, coordinating 4 teams, 10+ sponsors, and 10+ events—growing YoY participation by 25%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Managed sponsorships, faculty coordination, and end-to-end event execution; won Box Cricket and Volleyball at T-Spark.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Education & Key Skills Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>

              {/* Degree 1 */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      B.E. in Computer Engineering
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Thakur College of Engineering and Technology
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded">
                    CGPA: 9.29
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Graduation: 2026 • Mumbai
                </p>
              </div>

              {/* Degree 2 */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Diploma in Computer Engineering
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Vivekanand Education Society’s Polytechnic
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded">
                    87.31%
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Completed: 2023 • Mumbai
                </p>
              </div>
            </motion.div>

            {/* Core Competencies chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-gray-700/60"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

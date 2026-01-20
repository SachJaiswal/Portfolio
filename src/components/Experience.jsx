import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Android Intern',
      company: 'Pace Institution for Science',
      period: 'Jan 2023 – Jul 2023',
      location: 'Mumbai',
      tech: ['Java', 'Firebase', 'XML', 'Android Studio', 'Firestore'],
      bullets: [
        'Developed UI screens for an educational Android application using Java and XML.',
        'Integrated Firebase Authentication and Firestore Database for user login and data storage.',
        'Improved app stability by organizing database structure and performing module-wise testing.'
      ]
    },
    {
      title: 'Full Stack Web Developer Intern',
      company: 'Cyber Point Computer',
      period: 'Jul 2022 – Aug 2022',
      location: 'Mumbai',
      tech: ['HTML', 'CSS', 'JavaScript', 'AWS EC2', 'Cloudinary'],
      bullets: [
        'Updated and improved the company website using HTML, CSS, and JavaScript.',
        'Handled website deployment and hosting on AWS EC2 with basic server configuration.',
        'Implemented image optimization using Cloudinary and added basic SEO elements.'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-12 max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 ml-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
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

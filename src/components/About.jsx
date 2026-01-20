import { motion } from 'framer-motion'

const About = () => {
  const skills = ['Java', 'JavaScript', 'React', 'Node.js', 'Spring Boot', 'MongoDB', 'MySQL', 'Tailwind CSS', 'Express.js', 'REST APIs']

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
          About
        </motion.h2>

        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a motivated Computer Engineering student with hands-on experience in full-stack web development 
              and Android applications. My expertise spans the MERN stack, Spring Boot, and modern web technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about building efficient, scalable applications and continuously learning new technologies. 
              Currently seeking opportunities to apply my technical skills in real-world software development projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 pt-4"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              B.E. in Computer Engineering
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Thakur College of Engineering and Technology
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              CGPA: 8.89 • Expected 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

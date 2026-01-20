import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS','Python']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Spring Boot']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL','Firebase','PostgreSQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Android Studio','Cloudinary','AWS EC2','Render','Vercel','Docker']
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                  >
                    {skill}
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

export default Skills

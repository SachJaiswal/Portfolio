import { motion } from 'framer-motion'
import { Code2, Layers, Database, Wrench, Cpu, Sparkles } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'Spring Boot 3', 'Tailwind CSS']
    },
    {
      title: 'Databases & Performance',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Partitioning', 'Full-Text Indexing', 'Query Optimization']
    },
    {
      title: 'AI & Vector Tech',
      icon: Sparkles,
      skills: ['OpenAI API', 'LangChain', 'Qdrant (Vector DB)', 'Prompt Engineering', 'RAG Pipelines']
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      skills: ['Docker', 'AWS EC2', 'Git', 'GitHub Actions', 'Postman', 'Vercel', 'Render', 'Cursor', 'Antigravity']
    },
    {
      title: 'Concepts & Architecture',
      icon: Cpu,
      skills: ['REST APIs', 'WebSocket / Socket.IO', 'CI/CD Automation', 'Linux', 'Microservices / Modular Architecture', 'AWS Basics']
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Core technologies and engineering proficiencies utilized across production systems, AI workflows, and cloud architectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-accent">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-100 dark:border-gray-700 hover:border-accent/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

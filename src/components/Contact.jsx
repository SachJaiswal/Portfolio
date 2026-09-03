import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => {
      setIsSubmitted(false)
    }, 6000)
  }

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, full-stack projects, or having a chat about software engineering.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">Email</p>
                <a
                  href="mailto:sachinjaiswal382004@gmail.com"
                  className="text-gray-900 dark:text-white hover:text-accent transition-colors font-medium text-sm sm:text-base break-all"
                >
                  sachinjaiswal382004@gmail.com
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">Phone</p>
                <a
                  href="tel:+917208741875"
                  className="text-gray-900 dark:text-white hover:text-accent transition-colors font-medium text-sm sm:text-base"
                >
                  +91-7208741875
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">Location</p>
                <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">
                  Mumbai, Maharashtra, India
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/SachJaiswal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium border border-gray-200 dark:border-gray-700"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sachinjaiswal04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium border border-gray-200 dark:border-gray-700"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {isSubmitted && (
              <div className="p-4 rounded-xl flex items-start gap-3 text-sm bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                <p className="leading-relaxed">Thank you for your message! I'll get back to you soon.</p>
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-gray-900 dark:text-gray-100"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-gray-900 dark:text-gray-100"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-gray-900 dark:text-gray-100 resize-none"
                placeholder="Hi Sachin, I'd like to talk about..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 font-medium shadow-sm"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

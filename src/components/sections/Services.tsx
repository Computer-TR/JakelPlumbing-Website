'use client'

import { motion } from 'framer-motion'
import { FaWrench, FaFire, FaBolt, FaTractor, FaWater, FaFlask } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: FaWrench,
      title: 'Plumbing Services',
      description: 'Complete plumbing solutions including repairs, installations, and maintenance for all your needs.',
    },
    {
      icon: FaFire,
      title: 'Heating Systems',
      description: 'Expert heating system installation, repair, and maintenance to keep you warm year-round.',
    },
    {
      icon: FaBolt,
      title: 'Electrical Services',
      description: 'Professional electrical installation, repair, and safety inspections for residential and commercial.',
    },
    {
      icon: FaTractor,
      title: 'Excavation',
      description: 'Professional excavation services for construction, utilities, and land preparation projects.',
    },
    {
      icon: FaWater,
      title: 'Water System/Cross Connection',
      description: 'Water system services and cross-connection control to ensure safe, clean water supply.',
    },
    {
      icon: FaFlask,
      title: 'Soil Testing/Septic Systems',
      description: 'Comprehensive soil testing and septic system installation, repair, and maintenance services.',
    },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-500 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark">
            Complete Plumbing, Heating & Electrical Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to full installations, we handle all your mechanical and electrical needs with expertise and care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group p-8 rounded-2xl glass-effect hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-700 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white text-3xl" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-dark group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="h-1 bg-gradient-to-r from-primary-700 to-accent-500 mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-primary-700 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Request a Service
          </a>
        </motion.div>
      </div>
    </section>
  )
}
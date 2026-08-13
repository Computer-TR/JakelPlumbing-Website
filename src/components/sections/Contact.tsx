// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

// export default function Contact() {
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [error, setError] = useState('')

//   const contactInfo = [
//     { icon: FaPhone, title: 'Call Us', info: '(715) 223-6563', link: 'tel:+17152236563' },
//     { icon: FaEnvelope, title: 'Email Us', info: 'info@jakelplumbing.com', link: 'mailto:info@jakelplumbing.com' },
//     { icon: FaMapMarkerAlt, title: 'Visit Us', info: '800 Old Highway 29, Abbotsford, WI', link: 'https://maps.google.com/?q=800+Old+Highway+29+Abbotsford+WI' },
//     { icon: FaClock, title: 'Working Hours', info: 'Mon-Fri: 7:00 AM – 5:00 PM', link: '#' },
//   ]

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault()

//   const form = e.currentTarget // capture BEFORE any await

//   setLoading(true)
//   setError('')
//   setSuccess(false)

//   const formData = new FormData(form)
//   formData.append('access_key', '2465fbdf-962b-4dce-a46a-34e221578283')

//   try {
//     console.log('Submitting form...')

//     const res = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       body: formData
//     })

//     const text = await res.text()
//     console.log('Raw response:', text, 'Status:', res.status)

//     // Success cases where body is empty (very common)
//     if (!text && (res.status === 200 || res.status === 204)) {
//       setSuccess(true)
//       form.reset()
//       return
//     }

//     let data: any = {}
//     try {
//       data = JSON.parse(text)
//     } catch {
//       if (res.ok) {
//         setSuccess(true)
//         form.reset()
//         return
//       }
//       throw new Error('Unexpected response from server')
//     }

//     if (data.success) {
//       setSuccess(true)
//       form.reset()
//     } else {
//       throw new Error(data.message || 'Web3Forms rejected the request')
//     }

//   } catch (err: any) {
//     console.error('Form submit error:', err)
//     setError(err.message || 'Failed to send message')
//   } finally {
//     setLoading(false)
//   }
// }



//   return (
//     <section id="contact" className="section-padding bg-white">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="text-accent-500 font-semibold text-lg">Get In Touch</span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark">
//             Contact Us Today
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Have a plumbing, heating, or electrical need? We're here to help with expert service you can trust.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="glass-effect p-8 rounded-3xl"
//           >
//             <h3 className="text-2xl font-bold mb-6 text-dark">Send Us a Message</h3>

//             {/* Feedback messages */}
//             {success && <p className="text-green-600 font-medium mb-4">Your message has been sent successfully!</p>}
//             {error && <p className="text-red-600 font-medium mb-4">{error}</p>}

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Honeypot spam protection - hidden field */}
//               <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="John Doe"
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="(715) 123-4567"
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="john@example.com"
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Service Type</label>
//                 <select
//                   name="service"
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
//                 >
//                   <option value="">Select a service</option>
//                   <option>Plumbing</option>
//                   <option>Heating</option>
//                   <option>Electrical</option>
//                   <option>Excavation</option>
//                   <option>Water System</option>
//                   <option>Septic System</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">Message</label>
//                 <textarea
//                   name="message"
//                   rows={4}
//                   placeholder="Describe your needs..."
//                   required
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-700 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-primary-700 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all disabled:opacity-50"
//               >
//                 {loading ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             {contactInfo.map((item, index) => (
//               <motion.a
//                 key={index}
//                 href={item.link}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ x: 10, transition: { duration: 0.2 } }}
//                 className="flex items-start space-x-4 p-6 glass-effect rounded-2xl hover:shadow-lg transition-all cursor-pointer group"
//               >
//                 <div className="w-14 h-14 bg-gradient-to-br from-primary-700 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                   <item.icon className="text-white text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-lg text-dark mb-1">{item.title}</h4>
//                   <p className="text-gray-600">{item.info}</p>
//                 </div>
//               </motion.a>
//             ))}

//             {/* Emergency CTA */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="bg-gradient-to-br from-accent-500 to-accent-600 p-8 rounded-3xl text-white text-center"
//             >
//               <h3 className="text-2xl font-bold mb-3">Emergency Service?</h3>
//               <p className="mb-6 text-white/90">
//                 We're available for emergency plumbing, heating, and electrical services
//               </p>
//               <a
//                 href="tel:+17152236563"
//                 className="inline-block bg-white text-accent-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
//               >
//                 Call Now: (715) 223-6563
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Contact() {
  const contactInfo = [
    { icon: FaPhone, title: 'Call Us', info: '(715) 223-6563', link: 'tel:+17152236563' },
    { icon: FaEnvelope, title: 'Email Us', info: 'info@jakelplumbing.com', link: 'mailto:info@jakelplumbing.com' },
    { icon: FaMapMarkerAlt, title: 'Visit Us', info: '800 Old Highway 29, Abbotsford, WI', link: 'https://maps.google.com/?q=800+Old+Highway+29+Abbotsford+WI' },
    { icon: FaClock, title: 'Working Hours', info: 'Mon-Fri: 7:00 AM – 5:00 PM', link: '#' },
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-500 font-semibold text-lg">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark">
            Contact Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a plumbing, heating, or electrical need? We're here to help with expert service you can trust.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col items-center text-center p-8 glass-effect rounded-2xl hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-700 to-accent-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="text-white text-2xl" />
              </div>
              <h4 className="font-bold text-lg text-dark mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.info}</p>
            </motion.a>
          ))}
        </div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative overflow-hidden bg-gradient-to-br from-accent-500 to-accent-600 p-10 md:p-14 rounded-3xl text-white text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Emergency Service?</h3>
            <p className="mb-8 text-white/90 text-lg">
              We're available for emergency plumbing, heating, and electrical services — day or night.
            </p>
            <a
              href="tel:+17152236563"
              className="inline-block bg-white text-accent-600 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Call Now: (715) 223-6563
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

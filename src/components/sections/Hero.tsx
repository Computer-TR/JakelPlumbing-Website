// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { FaCheckCircle, FaClock, FaShieldAlt } from 'react-icons/fa'

// export default function Hero() {
//   const features = [
//     { icon: FaClock, text: '24/7 Emergency Service' },
//     { icon: FaShieldAlt, text: 'Licensed & Insured' },
//     { icon: FaCheckCircle, text: 'Satisfaction Guaranteed' },
//   ]

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute w-96 h-96 bg-primary-700/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
//         <div className="absolute w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
//       </div>

//       <div className="container-custom relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center px-4 py-20">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             <div className="inline-block">
//               <motion.span
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold"
//               >
//                 🔧 Trusted Since 1993
//               </motion.span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold leading-tight text-dark">
//               Expert Plumbing, Heating & Electrical
//               <span className="block text-gradient mt-2">
//                 Solutions You Can Trust
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 leading-relaxed">
//               Jakel Plumbing, Heating & Electrical has been serving Wisconsin with professional services for residential, commercial, agricultural, and industrial clients since 1993.
//             </p>

//             {/* Features */}
//             <div className="flex flex-wrap gap-6">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 + index * 0.1 }}
//                   className="flex items-center space-x-2 text-gray-700"
//                 >
//                   <feature.icon className="text-accent-500 text-xl" />
//                   <span className="font-medium">{feature.text}</span>
//                 </motion.div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-wrap gap-4"
//             >
//               <a
//                 href="#contact"
//                 className="bg-gradient-to-r from-primary-700 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
//               >
//                 Get Free Quote
//               </a>
//               <a
//                 href="tel:+17152236563"
//                 className="glass-effect text-dark px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all"
//               >
//                 Call: (715) 223-6563
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right - Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="relative h-[500px] lg:h-[600px] w-full"
//           >
//             <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
//               <Image
//                 src="/Sign.jpg"
//                 alt="Jakel Plumbing, Heating & Electrical Services"
//                 fill
//                 style={{ objectFit: 'cover' }}
//                 priority
//               />
//               {/* Optional overlay for better contrast */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
//         >
//           <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
//         </motion.div>
//       </motion.div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCheckCircle, FaClock, FaShieldAlt } from 'react-icons/fa'

export default function Hero() {
  const features = [
    { icon: FaClock, text: '24/7 Emergency Service' },
    { icon: FaShieldAlt, text: 'Licensed & Insured' },
    { icon: FaCheckCircle, text: 'Satisfaction Guaranteed' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-700/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold"
              >
                🔧 Trusted Since 1993
              </motion.span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-dark">
              Expert Plumbing, Heating & Electrical
              <span className="block text-gradient mt-2">
                Solutions You Can Trust
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Jakel Plumbing, Heating & Electrical Contractors Inc has been serving Wisconsin with professional services for residential, commercial, agricultural, and industrial clients since 1993.
            </p>

            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <feature.icon className="text-accent-500 text-xl" />
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="bg-gradient-to-r from-primary-700 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                Get Free Quote
              </a>
              <a href="tel:+17152236563" className="glass-effect text-dark px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all">
                Call: (715) 223-6563
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-6 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-4 font-medium">Authorized Partner:</p>
              <div className="flex items-center gap-8 flex-wrap">
                <div className="relative h-12 w-32">
                  <Image
                    src="/logo1.png"
                    alt="Authorized Partner"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="relative h-12 w-32">
                  <Image
                    src="/logo2.png"
                    alt="Authorized Partner"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] w-full"
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Sign.jpg"
                alt="Jakel Plumbing, Heating & Electrical Services"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}

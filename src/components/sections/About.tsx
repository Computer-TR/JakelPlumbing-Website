'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaAward, FaUsers, FaClock, FaThumbsUp } from 'react-icons/fa'

export default function About() {
  const stats = [
    { icon: FaAward, number: '30+', label: 'Years Experience' },
    { icon: FaUsers, number: '10000+', label: 'Happy Clients' },
    { icon: FaClock, number: '24/7', label: 'Available Service' },
    { icon: FaThumbsUp, number: '100%', label: 'Satisfaction Rate' },
  ]

  const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img5.jpg',
    '/img6.jpg',
    '/img7.jpg',
    '/img8.jpg',
    '/img9.jpg',
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-50 to-purple-50">
              {/* Carousel for desktop */}
              <div className="hidden lg:block h-full w-full">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation
                  loop
                  className="h-full w-full about-swiper"
                >
                  {images.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full w-full flex items-center justify-center p-0">
                        <div className="relative w-full h-full">
                          <Image
                            src={src}
                            alt={`Jakel Plumbing photo ${index + 1}`}
                            fill
                            style={{ objectFit: 'contain' }}
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Mobile carousel */}
              {/* <div className="block lg:hidden h-full w-full relative">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop
                  slidesPerView={1}
                  className="h-full w-full"
                >
                  {images.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full w-full">
                        <Image
                          src={src}
                          alt={`Jakel Plumbing photo ${index + 1}`}
                          fill
                          style={{ objectFit: 'contain' }}
                          priority={index === 0}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div> */}


              {/* Static image for mobile */}
              <div className="block lg:hidden h-full w-full relative">
                <Image
                  src={images[0]}
                  alt="Jakel Plumbing"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 glass-effect p-6 rounded-2xl shadow-xl mx-auto max-w-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-700 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaAward className="text-white text-2xl" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-dark">Certified</p>
                  <p className="text-gray-600">Licensed Professionals</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-accent-500 font-semibold text-lg">About Us</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 text-dark">
                Your Trusted Experts Since 1993
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                Jakel Plumbing, Heating & Electrical Contractors, Inc. is a full-service mechanical and electrical contracting business based in Abbotsford, Wisconsin. Founded in 1993 by Paul A. Jakel, we've been serving clients throughout Wisconsin for over three decades.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                We specialize in plumbing, heating, cooling, electrical installation and repair, excavation, water system and cross-connection services, and soil testing/septic systems for residential, commercial, agricultural, food, and industrial sectors.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl glass-effect hover:shadow-xl transition-shadow"
                >
                  <stat.icon className="text-4xl text-primary-700 mx-auto mb-3" />
                  <p className="text-2xl sm:text-3xl font-bold text-dark mb-2">{stat.number}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-primary-700 to-accent-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Learn More About Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .about-swiper {
          width: 100% !important;
        }

        .about-swiper .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-swiper .swiper-button-next,
        .about-swiper .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.6);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .about-swiper .swiper-button-next:hover,
        .about-swiper .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }

        .about-swiper .swiper-button-next::after,
        .about-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .about-swiper .swiper-pagination {
          bottom: 20px !important;
        }

        .about-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.6;
          width: 12px;
          height: 12px;
        }

        .about-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
        }
      `}</style>
    </section>
  )
}

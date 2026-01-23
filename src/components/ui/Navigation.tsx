'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    // { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          <Link href="/" className="flex items-center">
            <div className="relative w-36 h-36">
              <Image
                src="/logo-bg.png"
                alt="Jakel Plumbing Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-700 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+17152236563"
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-700 to-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <FaPhone className="text-sm" />
              <span>Call Now</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-primary-700 font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              
              <a
                href="tel:+17152236563"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-700 to-accent-500 text-white px-6 py-3 rounded-full font-semibold"
              >
                <FaPhone className="text-sm" />
                <span>Call Now</span>
              </a>  
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
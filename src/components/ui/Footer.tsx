// 'use client'

// import Link from 'next/link'
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
// import Image from 'next/image'

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-gradient-to-br from-dark to-primary-900 text-white">
//       <div className="container-custom px-4 py-16">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Company Info */}
//           <div>
//             <Link href="/" className="flex items-center mb-6">
//               <div className="relative w-40 h-40">
//                 <Image
//                   src="/logo.jpg"
//                   alt="Jakel Plumbing Logo"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </Link>

//             <p className="text-gray-400 mb-6 leading-relaxed">
//               Your trusted partner for plumbing, heating, and electrical services since 1993. Professional, reliable, and available when you need us.
//             </p>

//             <div className="flex space-x-4">
//               <a
//                 href="https://www.facebook.com/jakelplumbing/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Jakel Plumbing on Facebook"
//                 className="w-10 h-10 bg-white/10 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-all hover:scale-110"
//               >
//                 <FaFacebook />
//               </a>
//             </div>

//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">Quick Links</h3>
//             <ul className="space-y-3">
//               {['Home', 'Services', 'About', 'Contact'].map((link) => (
//                 <li key={link}>
//                   <Link
//                     href={`#${link.toLowerCase()}`}
//                     className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
//                   >
//                     <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 transition-all mr-0 group-hover:mr-2" />
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">Our Services</h3>
//             <ul className="space-y-3">
//               {[
//                 'Plumbing',
//                 'Heating Systems',
//                 'Electrical',
//                 'Excavation',
//                 'Water Systems',
//                 'Septic Systems',
//               ].map((service) => (
//                 <li key={service}>
//                   <a
//                     href="#services"
//                     className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
//                   >
//                     <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 transition-all mr-0 group-hover:mr-2" />
//                     {service}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start space-x-3">
//                 <FaPhone className="text-accent-500 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-sm">Call Us</p>
//                   <a href="tel:+17152236563" className="hover:text-accent-500 transition-colors">
//                     (715) 223-6563
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-start space-x-3">
//                 <FaEnvelope className="text-accent-500 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-sm">Email Us</p>
//                   <a
//                     href="mailto:info@jakelplumbing.com"
//                     className="hover:text-accent-500 transition-colors"
//                   >
//                     info@jakelplumbing.com
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-start space-x-3">
//                 <FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" />
//                 <div>
//                   <p className="text-gray-400 text-sm">Location</p>
//                   <p>800 Old Highway 29<br />Abbotsford, WI</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <p className="text-gray-400 text-sm">
//             © {currentYear} Jakel Plumbing, Heating & Electrical, Inc. All rights reserved.
//           </p>
//           <div className="flex space-x-6 text-sm">
//             <Link href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
//               Privacy Policy
//             </Link>
//             <Link href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
//               Terms of Service
//             </Link>
//             <Link href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
//               Sitemap
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-dark to-primary-900 text-white">
      <div className="container-custom px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="flex items-center mb-4">
                <div className="relative w-40 h-40">
                  <Image
                    src="/logo.jpg"
                    alt="Jakel Plumbing Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              
              {/* Additional Logos */}
              <div className="flex gap-4 items-center">
                <div className="relative w-24 h-24 bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-all">
                  <Image
                    src="/logo2.png"
                    alt="Partner Logo 1"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-24 h-24 bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-all">
                  <Image
                    src="/logo1.png"
                    alt="Partner Logo 2"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for plumbing, heating, cooling and electrical services since 1993. Professional, reliable, and available when you need us.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/jakelplumbing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jakel Plumbing on Facebook"
                className="w-10 h-10 bg-white/10 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <FaFacebook />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 transition-all mr-0 group-hover:mr-2" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Plumbing',
                'Heating Systems',
                'Electrical',
                'Excavation',
                'Water Systems',
                'Septic Systems',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-accent-500 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent-500 transition-all mr-0 group-hover:mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-accent-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <a href="tel:+17152236563" className="hover:text-accent-500 transition-colors">
                    (715) 223-6563
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-accent-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <a
                    href="mailto:info@jakelplumbing.com"
                    className="hover:text-accent-500 transition-colors"
                  >
                    info@jakelplumbing.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p>800 Old Highway 29<br />Abbotsford, WI</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Jakel Plumbing, Heating & Electrical Contractors Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

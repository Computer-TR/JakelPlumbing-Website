// import Navigation from '../components/ui/Navigation'
// import Hero from '../components/sections/Hero'
// import Services from '../components/sections/Services'
// import About from '../components/sections/About'
// import Contact from '../components/sections/Contact'
// import Footer from '../components/ui/Footer'

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Navigation />
//       <Hero />
//       <Services />
//       <About />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }

import type { Metadata } from 'next'
import Navigation from '../components/ui/Navigation'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Footer from '../components/ui/Footer'

export const metadata: Metadata = {
  title: 'Jakel Plumbing, Heating & Electrical | Abbotsford, WI | Licensed Contractors Since 1993',
  description: 'Jakel Plumbing, Heating & Electrical offers professional plumbing, heating, electrical, excavation, water systems, and septic services in Abbotsford, Wisconsin. Serving residential, commercial, agricultural, and industrial clients since 1993. Licensed, insured, and family-owned. Call (715) 223-6563 for expert service.',
  keywords: [
    'plumber Abbotsford WI',
    'heating contractor Wisconsin',
    'electrician Abbotsford',
    'plumbing heating electrical',
    'excavation Abbotsford',
    'septic system Wisconsin',
    'water system installation',
    'HVAC contractor',
    'emergency plumber',
    'commercial plumbing',
    'residential electrical',
    'Marathon County contractor',
    'Paul Jakel plumbing',
    'licensed plumber Wisconsin',
    'insured electrician',
  ],
  openGraph: {
    title: 'Jakel Plumbing, Heating & Electrical | Abbotsford, WI',
    description: 'Professional plumbing, heating, electrical, excavation, water systems, and septic services since 1993. Licensed & insured. Serving residential, commercial, agricultural, and industrial clients.',
    url: 'https://www.jakelplumbing.com',
    siteName: 'Jakel Plumbing, Heating & Electrical',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Jakel Plumbing, Heating & Electrical - Abbotsford, WI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakel Plumbing, Heating & Electrical | Abbotsford, WI',
    description: 'Professional plumbing, heating, electrical, excavation, water systems, and septic services since 1993. Licensed & insured.',
    images: ['/logo.jpg'],
  },
  alternates: {
    canonical: 'https://www.jakelplumbing.com',
  },
}

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-700 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      
      <Navigation />
      
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <Services />
        
        {/* About Section */}
        <About />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// export const metadata: Metadata = {
//   title: {
//     default: 'Jakel Plumbing - Professional Plumbing Services 24/7',
//     template: '%s | Jakel Plumbing',
//   },
//   description: 'Professional plumbing services available 24/7. Emergency repairs, installations, drain cleaning, and more. Licensed & insured plumbers.',
//   keywords: ['plumbing services', 'emergency plumber', 'drain cleaning', 'water heater repair', 'pipe installation'],
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={inter.variable}>
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   )
// }

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jakelplumbing.com'), // Replace with your actual domain
  
  title: {
    default: 'Jakel Plumbing, Heating & Electrical | Abbotsford, WI | Since 1993',
    template: '%s | Jakel Plumbing, Heating & Electrical',
  },
  
  description: 'Jakel Plumbing, Heating & Electrical provides expert plumbing, heating, electrical, excavation, water systems, and septic services in Abbotsford, WI. Licensed, insured, and trusted since 1993. Call (715) 223-6563.',
  
  keywords: [
    'plumbing services Abbotsford WI',
    'heating services Wisconsin',
    'electrical contractor Abbotsford',
    'excavation services',
    'septic system installation',
    'water system services',
    'emergency plumber Wisconsin',
    'HVAC services',
    'licensed electrician',
    'commercial plumbing',
    'residential plumbing',
    'Jakel Plumbing',
    'Marathon County plumber',
  ],
  
  authors: [{ name: 'Jakel Plumbing, Heating & Electrical, Inc.' }],
  
  creator: 'Jakel Plumbing, Heating & Electrical, Inc.',
  
  publisher: 'Jakel Plumbing, Heating & Electrical, Inc.',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jakelplumbing.com',
    siteName: 'Jakel Plumbing, Heating & Electrical',
    title: 'Jakel Plumbing, Heating & Electrical | Abbotsford, WI',
    description: 'Expert plumbing, heating, electrical, excavation, water systems, and septic services in Abbotsford, WI since 1993. Licensed & insured. Call (715) 223-6563.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Jakel Plumbing, Heating & Electrical Logo',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Jakel Plumbing, Heating & Electrical | Abbotsford, WI',
    description: 'Expert plumbing, heating, electrical, excavation, water systems, and septic services since 1993. Licensed & insured.',
    images: ['/logo.jpg'],
    // creator: '@jakelplumbing', // Replace with actual Twitter handle if you have one
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  alternates: {
    canonical: 'https://www.jakelplumbing.com',
  },
  
  category: 'business',

  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Local Business Schema.org structured data
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.jakelplumbing.com',
    name: 'Jakel Plumbing, Heating & Electrical, Inc.',
    image: 'https://www.jakelplumbing.com/logo.jpg',
    url: 'https://www.jakelplumbing.com',
    telephone: '+17152236563',
    email: 'info@jakelplumbing.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '800 Old Highway 29',
      addressLocality: 'Abbotsford',
      addressRegion: 'WI',
      postalCode: '54405',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.9463889, // Add actual coordinates
      longitude: -90.3165278,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Paul A. Jakel',
    },
    foundingDate: '1993',
    priceRange: '$$',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 44.9463889,
        longitude: -90.3165278,
      },
      geoRadius: '50000', // 50km radius
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing, Heating & Electrical Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plumbing Services',
            description: 'Professional plumbing installation, repair, and maintenance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Heating Services',
            description: 'Heating system installation, repair, and maintenance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical Services',
            description: 'Licensed electrical installation and repair services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Excavation Services',
            description: 'Professional excavation for construction and utilities',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Water System Services',
            description: 'Water system installation and cross-connection services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Septic System Services',
            description: 'Soil testing and septic system installation and maintenance',
          },
        },
      ],
    },
    sameAs: [
      // Add your social media profiles here
      'https://www.facebook.com/jakelplumbing/',
    ],
  }

  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {/* Structured Data */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        
        {children}
        
        {/* Google Analytics - Add your GA4 tracking ID */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script> */}
      </body>
    </html>
  )
}
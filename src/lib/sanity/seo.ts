// src/lib/sanity/seo.ts

export const SEO = {
  titleTemplate: '%s | Your Plumbing Company',
  defaultTitle: 'Professional Plumbing Services | Your Plumbing Company',
  description:
    'Professional plumbing services for residential and commercial properties. Emergency plumbing, repairs, installations, and maintenance. Licensed and insured plumbers.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Your Plumbing Company',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Your Plumbing Company',
      },
    ],
  },
  twitter: {
    handle: '@yourcompany',
    site: '@yourcompany',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
} as const

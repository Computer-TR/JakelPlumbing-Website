import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f1f7',
          100: '#e8e4ef',
          200: '#d5cde2',
          300: '#b8aacf',
          400: '#9580b8',
          500: '#7a63a3',
          600: '#68548d',
          700: '#443669', // Main purple rgb(68, 54, 105)
          800: '#3a2d59',
          900: '#11092e', // Deep purple rgb(17, 9, 46)
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a7',
          400: '#f87171',
          500: '#d81b1f', // Main red rgb(216, 27, 31)
          600: '#881115', // Dark red rgb(136, 17, 21)
          700: '#7f1d1d',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        dark: {
          DEFAULT: '#111113', // Near black rgb(17, 17, 19)
          light: '#1f1f23',
          lighter: '#2a2a2f',
        }
      },
    },
  },
  plugins: [],
}

export default config
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        primary: 'var(--primary)',
        alert: 'var(--alert)',
        success: 'var(--success)',
      },
      backgroundImage: {
        'sign-in-hero-background': "url('/images/sign-in-hero-background.png')",
        'background-blur': "url('/images/background-blur.svg')",
      },
    },
    fontFamily: {
      sans: ['var(--font-poppins)'],
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config

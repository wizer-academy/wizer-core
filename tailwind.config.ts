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
<<<<<<< HEAD
        alert: 'var(--alert)',
        success: 'var(--success)',
      },
      backgroundImage: {
        'sign-in-hero-background': "url('/images/sign-in-hero-background.png')",
        'background-blur': "url('/images/background-blur.svg')",
=======
      },
      backgroundImage: {
        'sign-in-hero-background': "url('/images/sign-in-hero-background.png')",
        'sign-in-background': "url('/images/sign-in-background.png')",
>>>>>>> 3b0e00b (feat: add structure of sign in and sign up page)
      },
    },
    fontFamily: {
      sans: ['var(--font-poppins)'],
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config

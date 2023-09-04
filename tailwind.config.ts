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
      },
      backgroundImage: {
        'sign-in-hero-background': "url('/images/sign-in-hero-background.png')",
        'sign-in-background': "url('/images/sign-in-background.png')",
      },
    },
    fontFamily: {
      sans: ['var(--font-poppins)'],
    },
  },
  plugins: [],
}
export default config

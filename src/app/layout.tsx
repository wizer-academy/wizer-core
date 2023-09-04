import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Wizer',
    default: 'Wizer',
  },
  description: 'Plataforma de Streaming Educacional inovadora!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark antialiased ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}

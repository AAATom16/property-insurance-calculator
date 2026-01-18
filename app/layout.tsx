import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kalkulačka pojištění majetku',
  description: 'Spočítejte si pojistné na váš majetek',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}


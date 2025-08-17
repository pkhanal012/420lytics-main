import type { Metadata, Viewport } from 'next'
import { Courier_Prime } from 'next/font/google'
import './globals.css'

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '420lytics - AI-Powered Cannabis Analytics Platform',
  description: 'Semantic AI-powered analytics for cannabis distributors. Real-time dashboards, SKU analysis, and intelligent insights for cannabis data operations.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0a'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={courierPrime.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Blue Coast SUP — SUP Rental Malaga | Paddle Board Rental Malaga',
  description: 'Affordable SUP rentals in Malaga with convenient pickup and delivery across the Costa del Sol. Rent a paddle board in Malaga from 30€.',
  keywords: 'SUP Rental Malaga, Paddle Board Rental Malaga, SUP Malaga, Rent SUP Malaga, paddleboard malaga, alquiler sup malaga',
  openGraph: {
    title: 'Blue Coast SUP — Paddle Board Rental Malaga',
    description: 'Explore Malaga from the water. Affordable SUP rentals with delivery across the Costa del Sol.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Blue Coast SUP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Coast SUP — SUP Rental Malaga',
    description: 'Explore Malaga from the water. Affordable paddle board rentals from 30€.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

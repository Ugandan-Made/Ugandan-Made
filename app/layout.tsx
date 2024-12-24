import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Made in Uganda',
  description: 'Showcasing Ugandan-made tech tools, libraries, and technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 py-8 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


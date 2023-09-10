import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { QueryProvider } from './contexts/QueryContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie',
  description: 'Movie database',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <QueryProvider>
        <body className={inter.className}>
          <Navbar />
    
          <main className="w-full">
            {children}      
          </main>
    
          <Footer />
        </body>
      </QueryProvider>
    </html>
  )
}

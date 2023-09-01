import './globals.css'
import { Inter } from 'next/font/google'

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
      <body className={inter.className}>
      <nav className="w-full flex items-center">
        <h2>Movie.io</h2>
      </nav>

      <main>
        {children}      
      </main>
      </body>
    </html>
  )
}

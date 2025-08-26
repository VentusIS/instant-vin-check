import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'

export const metadata = {
  title: 'Bid Atlantic Cars',
  description: 'Find your next car from the USA auctions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

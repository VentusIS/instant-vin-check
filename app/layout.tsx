import './globals.css'
import Footer from './components/Footer'

export const metadata = {
  title: 'Bid Atlantic Cars',
  description: 'Find your next car from the USA auctions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

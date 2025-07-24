import './globals.css'
import ClientLayout from './ClientLayout'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Berkah Jaya',
  description: 'Katalog Usaha Meubel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Footer/>
      </body>
    </html>
  )
}

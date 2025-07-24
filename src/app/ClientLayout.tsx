'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/navbar'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideNavbar = pathname?.startsWith('/produk')

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  )
}

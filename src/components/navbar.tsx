'use client'

import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
    <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/images/gambarkayu.jpg" alt="Logo" width={36} height={36} />
              <span className="text-lg font-bold text-gray-900">BERKAH JAYA</span>
            </div>
          </Link>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
            <li className="pt-1.5 font-dm text-sm font-medium text-gray-900 hover:underline">
                <a href="#beranda">Beranda</a>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-gray-900 hover:underline">
                <a href="#produk">Produk</a>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-gray-900 hover:underline">
                <a href="#tentang">Tentang</a>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-gray-900 hover:underline">
                <a href="#kontak">Kontak</a>
            </li>
        </ul>
        {/*Burger Button*/}
        <div className="flex-grow"></div>
        <div className="relative flex items-center justify-center md:hidden">
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="text-slate-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-auto text-slate-900">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* <div className="flex-grow"></div>
        <div className="relative flex items-center justify-center md:hidden">
            <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-auto text-slate-900"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
            </button>
        </div> */}
    </nav>
    {/* Mobile Menu */}
    {menuOpen && (
      <div className="md:hidden bg-white border-t border-slate-100 shadow px-6 py-4 space-y-4">
        <a href="#beranda" className="block text-gray-900" onClick={() => setMenuOpen(false)}>Beranda</a>
        <a href="#produk" className="block text-gray-900" onClick={() => setMenuOpen(false)}>Produk</a>
        <a href="#tentang" className="block text-gray-900" onClick={() => setMenuOpen(false)}>Tentang</a>
        <a href="#kontak" className="block text-gray-900" onClick={() => setMenuOpen(false)}>Kontak</a>
      </div>
    )}
</header>
  )
}

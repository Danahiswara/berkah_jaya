// src/app/produk/page.tsx
'use client'

import { useState } from 'react'
import produkData from '@/data/produk.json'
import ProdukCard from '@/components/produkcard'
import ProdukModal from '@/components/produkmodal'
import { Produk } from '@/types/Produk'
import Link from 'next/link'

export default function HalamanProduk() {
  const [selectedProduk, setSelectedProduk] = useState<Produk | null>(null)

  return (
    <div className="px-4 py-12 space-y-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <button className="text-yellow-700 font-semibold hover:underline">← Kembali ke Beranda</button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">Katalog Produk Lengkap</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produkData.map((produk) => (
            <ProdukCard key={produk.id} produk={produk} onClick={() => setSelectedProduk(produk)} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="https://wa.me/6281229715706">
            <button className="bg-yellow-700 text-white px-6 py-2 rounded-xl hover:bg-yellow-800 border-4">Pesan</button>
          </Link>
        </div>
      </div>

      {selectedProduk && (
        <ProdukModal produk={selectedProduk} onClose={() => setSelectedProduk(null)} />
      )}
    </div>
  )
}

// src/components/ProdukCard.tsx
'use client'

import React from 'react'
import { Produk } from '../types/Produk'
import Image from 'next/image'

interface Props {
  produk: Produk
  onClick?: () => void
}

export default function ProdukCard({ produk, onClick }: Props) {
  return (
    <div onClick={onClick} className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="w-full h-64 flex items-center justify-center bg-white">
        <Image src={produk.gambar} alt={produk.nama} className="max-w-full max-h-full object-center object-contain" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{produk.nama}</h3>
        <p className="text-sm text-gray-600">{produk.harga}</p>
      </div>
    </div>
  )
}

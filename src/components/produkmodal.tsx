// src/components/ProdukModal.tsx
'use client'

import React from 'react'
import { Produk } from '../types/Produk'

interface Props {
  produk: Produk
  onClose: () => void
}

export default function ProdukModal({ produk, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-lg max-w-md w-full relative p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
        >
          &times;
        </button>
        <img src={produk.gambar} alt={produk.nama} className="w-full h-64 object-contain rounded-md mb-4 bg-white" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{produk.nama}</h2>
        <p className="text-sm text-gray-600 mb-2">{produk.deskripsi}</p>
        <p className="text-lg font-semibold text-green-700">{produk.harga}</p>
      </div>
    </div>
  )
}
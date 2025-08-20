import produkList from '@/data/produk.json'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Produk = {
  id: string
  nama: string
  harga: string
  gambar: string
  deskripsi: string
}

export default async function ProdukDetail(
  { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const list = produkList as unknown as Produk[]
  const produk = list.find((p: Produk) => p.id === id)

  if (!produk) return notFound()

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <Image
          src={produk.gambar}
          alt={produk.nama}
          className="w-full h-64 object-contain bg-white"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">{produk.nama}</h1>
          <p className="text-lg font-semibold text-green-600 mb-4">{produk.harga}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{produk.deskripsi}</p>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const list = produkList as unknown as Produk[]
  return list.map((p) => ({ id: p.id }))
}
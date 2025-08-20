'use client'

import { useState } from 'react'
import produkData from '@/data/produk.json'
import ProdukCard from '@/components/produkcard'
import ProdukModal from '@/components/produkmodal'
import { Produk } from '@/types/Produk'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const produkUnggulan = produkData.filter(p => p.unggulan).slice(0, 4)
  const [selectedProduk, setSelectedProduk] = useState<Produk | null>(null)

  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section 
        id="beranda"
        className="relative w-full h-[100vh] bg-cover bg-center flex items-center justify-center px-20 text-white mask-b-from-80% mask-b-to-100%"
        style={{ backgroundImage: "url('/images/landingpage.jpg')" }}>
        <div className="relative z-10 text-center max-w-xl px-4 py-5">
          <div className="absolute rounded-3xl inset-0 bg-black/50"></div>
          <h1 className="text-6xl md:text-10xl font-sans font-black leading-tight drop-shadow-md text-blue-500 text-shadow-black text-shadow-lg">
            BERKAH JAYA
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md text-gray-50">
            Pusatnya Kayu <br />
            Jati dan Kalimantan
          </h2>
          <p className="mt-4 text-lg text-white font-semibold text-justify bg-black border-4 border-yellow-500 rounded-2xl p-2">
            Menyediakan produk furnitur berkualitas dari kayu jati dan kalimantan, dibuat dengan ketelitian dan keahlian pengrajin lokal. 
            Cocok untuk mempercantik rumah, kantor, hingga ruang usaha Anda.</p>
        </div>
      </section>

      {/* Section Promosi */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
        <div className="w-full md:w-1/2 text-left md:text-center  bg-yellow-700/30 rounded-2xl py-3">
          <h2 className="text-3xl font-bold text-yellow-900 mb-4 px-10">Temukan Kualitas Mebel Terbaik</h2>
          <p className="text-gray-900 font-semibold text-justify px-10 lg:px-20">
            Berkah Jaya adalah solusi terbaik untuk kebutuhan furnitur rumah Anda. Kami menghadirkan produk-produk berkualitas dari kayu jati dan kalimantan, 
            terkenal karena kekuatan dan keindahan alaminya.
            Setiap produk dikerjakan dengan penuh ketelitian dan mengutamakan detail oleh pengrajin lokal berpengalaman. Kami percaya bahwa furnitur tidak hanya 
            sekadar pelengkap ruangan, tetapi juga cerminan dari gaya dan kenyamanan hidup.
            <br /><br />
            Bergabunglah dengan ratusan pelanggan yang telah merasakan kualitas dan layanan terbaik dari Berkah Jaya!</p>
          <div className="text-center mt-5 mb-5">
          <Link href="https://wa.me/6281229715706">
            <button className="bg-yellow-700 text-white px-6 py-2 rounded-xl hover:bg-yellow-800">Pesan Sekarang ➡️</button>
          </Link>
        </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mb-3">
          <Image
            src="/images/gambarolahkayucrop.jpg" 
            alt="Promosi Kayu"
            width={400}
            height={300}
            className="rounded-4xl w-full max-w-md object-cover px-4"
          />
        </div>
      </section>

      {/* Produk Section */}
      <section id="produk" className="p-4 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-900">Produk Unggulan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {produkUnggulan.map((produk) => (
            <ProdukCard key={produk.id} produk={produk} onClick={() => setSelectedProduk(produk)} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/produk">
            <button className="bg-yellow-700 text-white px-6 py-2 rounded-xl hover:bg-yellow-800">Lihat Semua</button>
          </Link>
        </div>
      </section>

      {/* Tentang Section */}
      <section id="tentang" className="relative p-8 md:p-16 bg-yellow-700/50 rounded-4xl scroll-mt-24 overflow-hidden">
        <div className="hidden md:block absolute left-2 lg:left-20 bottom-0">
          <Image src="/images/wood-sign.png" alt="Dekorasi Kayu Kiri" width={500} height={500} className=" h-80 lg:h-100 object-contain scale-x-[-1]" />
        </div>
        <div className="hidden md:block absolute right-2 lg:right-20 bottom-0">
          <Image src="/images/wood-sign.png" alt="Dekorasi Kayu Kanan" width={500} height={500} className="h-80 lg:h-100 object-contain" />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-4 text-center text-yellow-950">Tentang Kami</h2>
          <p className="text-justify max-w-2xl lg:max-w-4xl mx-auto font-medium bg-white/50 rounded-xl p-5">
            Usaha meubel ini merupakan usaha rumahan yang telah berdiri sejak 2022. 
            Kami memproduksi berbagai jenis furnitur dari kayu jati dan kalimantan dengan kualitas tinggi.
            Menerima desain kustom untuk memenuhi kebutuhan dan selera konsumen.
            <br />
            Dengan mengandalkan bahan baku yang terpilih dan tenaga kerja lokal yang berpengalaman, kami menghadirkan produk yang tidak hanya kuat dan tahan lama, 
            tetapi juga memiliki nilai estetika tinggi.
            <br />
            Kepuasan pelanggan adalah prioritas kami. Oleh karena itu, setiap proses produksi dilakukan dengan penuh ketelitian dan dedikasi. 
            Kami percaya bahwa setiap furnitur memiliki cerita dan kami siap membantu Anda mewujudkannya.
          </p>
          {/* <div className="mt-6 flex justify-center">
            <Image src="/images/Pas Foto 3x4.jpg" alt="Foto Pemilik Usaha" className="w-23 h-23 rounded-full object-cover border-2 border-yellow-700 shadow-md" />
          </div> */}
          <p className="text-center text-lg font-bold mb-4 text-yellow-950">
            Mangsuri<br />
            Owner Berkah Jaya
          </p>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="px-20 py-16">
        <h2 className="text-3xl text-center font-bold mb-4">Hubungi Kami</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 max-w-5xl mx-auto">
          {/* Kontak Info */}
          <div className="relative md:w-1/2 w-full bg-cover bg-center rounded-2xl shadow-xl p-6"
            style={{
              backgroundImage:"url('/images/wood-texture.jpg')",
              backgroundSize:'cover',
              backgroundPosition:'center',
            }}>
            <div className="backdrop-brightness-85 p-4 rounded-2xl space-y-6">
              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-green-600 text-3xl flex-shrink-0"/>
                <div>
                  <p className="text-xl font-semibold mb-2">Whatsapp: </p>
                  <a 
                    href="https://wa.me/6281229715706" 
                    className="text-yellow-900 underline text-lg font-semibold" 
                    target="_blank" 
                    rel="noopener noreferrer">Berkah Jaya</a>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4">
                  <FaInstagram className="text-pink-600 text-3xl flex-shrink-0"/>
                  <div>
                    <p className="text-xl font-semibold mb-2">Instagram:</p>
                    <a 
                      href="https://instagram.com/ceritakesongo" 
                      className="text-yellow-900 underline text-lg font-semibold" 
                      target="_blank" 
                      rel="noopener noreferrer">@berkahjaya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Google Maps */}
          <div className="w-fit max-w-3xl h-fit mx-auto rounded overflow-hidden justify-center items-center">
            <p className="text-xl font-semibold mb-2">Lokasi:</p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96697.08715852437!2d110.46653137155404!3d-7.262235477498254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7083001326720d%3A0x1b1812f67f58e466!2sToko%20Kayu%20Berkah%20Jaya!5e1!3m2!1sid!2sid!4v1752901298656!5m2!1sid!2sid" 
              width="240" 
              height="200" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
      

      {/* Modal Detail Produk */}
      {selectedProduk && (
        <ProdukModal produk={selectedProduk} onClose={() => setSelectedProduk(null)} />
      )}
    </div>
  )
}
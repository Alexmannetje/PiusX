'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

const fotos = {
  '2023-2024': [
    { src: '/piusx.jpg'},
    { src: '/piusxlogo.jpg',},
    { src: '/piusxgroep.jpg'},
    { src: '/alexander M.jpg'},
    { src: '/borg S.jpg'},
    { src: '/dago V.jpg'},
    { src: '/dario F.jpg'},
    { src: '/eline B.jpg',},
    { src: '/elisa J.jpg'},
    { src: '/emilie H.jpg'},
    { src: '/hanne F.jpg'},
    { src: '/jabir M.jpg'},
  ],
  '2024-2025': [
    { src: '/jens C.jpg'},
    { src: '/joppe D.jpg'},
    { src: '/logojonggivers.jpg'},
  ],
};

export default function FotosPage() {
  const [selectedYear, setSelectedYear] = useState('2023-2024');

  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 md:px-6 my-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Foto&apos;s
        </h1>

        <div className="mb-6 flex justify-center space-x-4">
          {Object.keys(fotos).map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                selectedYear === year ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {fotos[selectedYear].map((foto, index) => (
            <div key={index} className="relative w-full h-60 rounded-md overflow-hidden">
              <Image
                src={foto.src}
                alt={foto.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
        
      </section>
      <Footer />
    </div>
  );
}

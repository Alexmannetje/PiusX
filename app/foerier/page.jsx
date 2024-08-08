'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function FoerierPage() {
  const [selectedFoerier, setSelectedFoerier] = useState(null);

  const foeriers = [
    { name: 'Foerier Kapoenen', file: '/path/to/kapoenen.docx', logo: '/logokapoenen.jpg' },
    { name: 'Foerier Wouters', file: '/path/to/wouters.docx', logo: '/logowouters.jpg' },
    { name: 'Foerier Jonggivers', file: '/path/to/jonggivers.docx', logo: '/logojonggivers.jpg' },
    { name: 'Foerier Givers', file: '/path/to/givers.docx', logo: '/logogivers.jpg' },
  ];

  const openFoerier = (file) => {
    setSelectedFoerier(file);
  };

  const closeFoerier = () => {
    setSelectedFoerier(null);
  };

  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 md:px-6 my-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Foeriers
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {foeriers.map((foerier, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-md shadow-lg cursor-pointer hover:bg-gray-100 flex flex-col items-center"
              onClick={() => openFoerier(foerier.file)}
              style={{ minHeight: '250px', justifyContent: 'center' }}
            >
              <Image
                src={foerier.logo}
                alt={`${foerier.name} Logo`}
                width={160}
                height={160}
                className="mb-4"
                style={{ objectFit: 'contain' }}
              />
              <h2 className="text-2xl font-bold text-center">{foerier.name}</h2>
            </div>
          ))}
        </div>

        {selectedFoerier && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-md shadow-lg relative max-w-full w-full sm:w-11/12 md:w-3/4 lg:w-1/2">
              <button
                className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-800"
                onClick={closeFoerier}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">Foerier Document</h2>
              <iframe
                src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                  selectedFoerier
                )}`}
                width="100%"
                height="600px"
                frameBorder="0"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

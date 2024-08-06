"use client"

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const nieuwsbrievenData = [
  {
    titel: 'Test',
    inhoud: 'brief komt hier'
  },
];

export default function NieuwsbrievenPage() {
  const [selectedNieuwsbrief, setSelectedNieuwsbrief] = useState(null);

  const openModal = (nieuwsbrief) => {
    setSelectedNieuwsbrief(nieuwsbrief);
  };

  const closeModal = () => {
    setSelectedNieuwsbrief(null);
  };

  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 md:px-6 my-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Nieuwsbrieven
        </h1>
        <div className="bg-background p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Beschikbare Nieuwsbrieven</h2>
          <ul className="space-y-4">
            {nieuwsbrievenData.map((nieuwsbrief, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-md shadow-sm cursor-pointer hover:bg-gray-100"
                onClick={() => openModal(nieuwsbrief)}
              >
                <h3 className="text-xl font-semibold">{nieuwsbrief.titel}</h3>
              </li>
            ))}
          </ul>
        </div>

        {selectedNieuwsbrief && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-2xl">
              <h2 className="text-2xl font-bold mb-4">{selectedNieuwsbrief.titel}</h2>
              <p>{selectedNieuwsbrief.inhoud}</p>
              <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700"
                onClick={closeModal}
              >
                Sluiten
              </button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

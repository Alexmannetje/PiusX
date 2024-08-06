"use client"

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const data = {
  '2023-2024': [
    { datum: '15 september 2024', gebeurtenis: 'Overgang' },
    { datum: '16-28 juli 2024', gebeurtenis: 'kamp' }
  ],
  '2024-2025': [
    { datum: '15 september 2024', gebeurtenis: 'Overgang' },
    { datum: '2025', gebeurtenis: 'Pius X dag' },
    { datum: 'juli 2025', gebeurtenis: 'Kamp' }
  ]
};

export default function KalenderPage() {
  const [selectedYear, setSelectedYear] = useState('2023-2024');

  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 md:px-6 my-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Belangrijke Data
        </h1>

        <div className="mb-6 flex justify-center space-x-4">
          {Object.keys(data).map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                selectedYear === year ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {data[selectedYear].map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-1">{item.datum}</h2>
                <p className="text-md text-gray-700">{item.gebeurtenis}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

const fotos = {
  '2023-2024': {
    'Overgang': [
      { src: '/piusx.jpg' },
      { src: '/piusxlogo.jpg' },
    ],
    'Groepsdag': [
      { src: '/piusxgroep.jpg' },
      { src: '/alexander M.jpg' },
    ],
    'Kamp': [
      { src: '/borg S.jpg' },
      { src: '/dago V.jpg' },
    ],
  },
  '2024-2025': {
    'Overgang': [
      { src: '/jens C.jpg' },
      { src: '/joppe D.jpg' },
    ],
    'Groepsdag': [
      { src: '/logojonggivers.jpg' },
    ],
  },
};

export default function FotosPage() {
  const [selectedYear, setSelectedYear] = useState('2023-2024');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect om de eerste activiteit van het geselecteerde jaar automatisch te selecteren
  useEffect(() => {
    if (selectedYear && fotos[selectedYear]) {
      const activities = Object.keys(fotos[selectedYear]);
      if (activities.length > 0) {
        setSelectedActivity(activities[0]);
      } else {
        setSelectedActivity(null);
      }
    }
  }, [selectedYear]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    if (selectedActivity) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % fotos[selectedYear][selectedActivity].length);
    }
  };

  const prevImage = () => {
    if (selectedActivity) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + fotos[selectedYear][selectedActivity].length) % fotos[selectedYear][selectedActivity].length);
    }
  };

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

        {selectedYear && selectedActivity && (
          <div className="mb-6 flex justify-center space-x-4">
            {Object.keys(fotos[selectedYear]).map((activity) => (
              <button
                key={activity}
                onClick={() => setSelectedActivity(activity)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  selectedActivity === activity ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {activity}
              </button>
            ))}
          </div>
        )}

        {selectedYear && selectedActivity && fotos[selectedYear][selectedActivity] ? (
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {fotos[selectedYear][selectedActivity].map((foto, index) => (
              <div
                key={index}
                className="relative w-full h-40 sm:h-48 md:h-60 rounded-md overflow-hidden cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  src={foto.src}
                  alt={`Foto ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Geen foto&apos;s beschikbaar voor deze activiteit.</p>
        )}
      </section>

      {isOpen && selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-3xl focus:outline-none"
            onClick={prevImage}
          >
            &#8249;
          </button>
          <div className="w-full max-w-md sm:max-w-lg md:max-w-3xl">
            <Image
              src={fotos[selectedYear][selectedActivity][currentIndex].src}
              alt={`Foto ${currentIndex + 1}`}
              width={800}
              height={600}
              objectFit="contain"
              className="rounded-md"
            />
          </div>
          <button
            className="absolute right-4 text-white text-3xl focus:outline-none"
            onClick={nextImage}
          >
            &#8250;
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

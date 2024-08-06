'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function HuurLokaalPage() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoonnummer: '',
    bericht: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verwerk de inzending van het formulier, bijv. door een API-aanroep te doen
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 md:px-6 my-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Huur ons Lokaal
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="relative w-full h-64">
            <Image
              src="/piusx.jpg"
              alt="Lokaal 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/piusxlogo.jpg"
              alt="Lokaal 2"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/piusxgroep.jpg"
              alt="Lokaal 3"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Belangrijke Informatie</h2>
            <p className="text-lg mb-4 text-center">
              Ons lokaal is beschikbaar voor verhuur voor verschillende evenementen en activiteiten. Hieronder vindt u enkele belangrijke informatie:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Borg vereist voor gebroken dingen.</li>
              <li>Rdgdgg</li>
              <li>Volledig uitgeruste keuken.</li>
              <li>Gevgndh.</li>
              <li>dgdgdg</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Neem contact met ons op</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">
                  Naam
                </label>
                <input
                  type="text"
                  name="naam"
                  id="naam"
                  value={formData.naam}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="relative">
                <label htmlFor="telefoonnummer" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="text"
                  name="telefoonnummer"
                  id="telefoonnummer"
                  value={formData.telefoonnummer}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="relative">
                <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht
                </label>
                <textarea
                  name="bericht"
                  id="bericht"
                  value={formData.bericht}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Verstuur
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

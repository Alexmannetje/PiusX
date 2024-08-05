"use client"

import { useState } from 'react';
import Navbar from '@/components/navbar';

export default function InschrijvingPage() {
  const [formData, setFormData] = useState({
    naam: '',
    telefoonnummer: '',
    email: '',
    leeftijd: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier zou je de formdata kunnen verzenden naar een server of API
    console.log('Form data submitted:', formData);
    // Reset formulier na verzenden
    setFormData({
      naam: '',
      telefoonnummer: '',
      email: '',
      leeftijd: '',
    });
  };

  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 md:px-6 my-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Inschrijving Kinderen
        </h1>
        <div className="bg-background p-6 rounded-md shadow-md">
          <p className="mb-4 text-center text-muted-foreground">
            We bieden 3 gratis proefdagen aan! Na de proeflessen kunnen kinderen zich inschrijven.<br />
            Voor leden die Wouter zijn of ouder, is het verplicht om een hemd en das te hebben. T-shirts en dassen kunnen bij ons worden gekocht.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="naam" className="block text-sm font-medium text-gray-700">
                Naam
              </label>
              <input
                type="text"
                id="naam"
                name="naam"
                value={formData.naam}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="telefoonnummer" className="block text-sm font-medium text-gray-700">
                Telefoonnummer
              </label>
              <input
                type="tel"
                id="telefoonnummer"
                name="telefoonnummer"
                value={formData.telefoonnummer}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="leeftijd" className="block text-sm font-medium text-gray-700">
                Leeftijd
              </label>
              <input
                type="number"
                id="leeftijd"
                name="leeftijd"
                value={formData.leeftijd}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Verzenden
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

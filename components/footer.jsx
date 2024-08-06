// components/Footer.js
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo en Naam */}
          <div className="flex flex-col items-center md:items-center">
            <div className="relative flex items-center justify-center mb-2">
              <Image src="/piusxlogo.jpg" width={60} height={60} alt="Pius X Logo" />
            </div>
            <span className="text-xl font-bold">Pius X</span>
          </div>

          {/* Contactinformatie */}
          <div className="flex flex-col items-center md:items-center">
            <h2 className="text-lg font-semibold mb-2">Algemene Contactgegevens</h2>
            <p className="text-sm mb-1">Email: piusx mail</p>
            <p className="text-sm mb-1">Telefoon: eventuele nummer</p>
            <p className="text-sm">Adres: Peter Benoitlaan 23, 2100 Antwerpen</p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm">&copy; 2024 Scouts Pius X</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

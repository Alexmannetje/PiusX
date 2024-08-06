import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

const fotos = {
  '2023-2024': [
    { src: '/foto1.jpg', alt: 'Foto 1' },
    { src: '/foto2.jpg', alt: 'Foto 2' },
    { src: '/foto3.jpg', alt: 'Foto 3' },
    // Voeg hier meer foto's toe voor het schooljaar 2023-2024
  ],
  // Voeg hier andere schooljaren toe
};

export default function FotosPage() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-4 md:px-6 my-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Foto&apos;s
        </h1>
        
        {Object.keys(fotos).map((jaar) => (
          <div key={jaar} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">{jaar}</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {fotos[jaar].map((foto, index) => (
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
          </div>
        ))}
        
      </section>
      <Footer />
    </div>
  );
}

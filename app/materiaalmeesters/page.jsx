import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Image from "next/image";

export default function Materiaalmeesters() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto my-12 p-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Materiaalmeesters
        </h1>
        <div className="flex flex-wrap justify-around gap-8 mb-8">
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/lucas J.jpg"
                alt="Lucas J"
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Lucas Janvier</h2>
            <p className="text-muted-foreground text-center">Lightning-Mcqueen rode Trotse Hauki</p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/rune W.jpg"
                alt="Rune W."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Rune Wouters</h2>
            <p className="text-muted-foreground text-center">Woestijn roosbruine Warmbloedige Dryomys</p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/dario F.jpg"
                alt="Dario F."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Dario F.</h2>
            <p className="text-muted-foreground text-center">Markante Amazillia</p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/jens C.jpg"
                alt="Jens C."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Jens Claessens</h2>
            <p className="text-muted-foreground text-center">Safier blauwe Bedachtzame Apella</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex-1 bg-background p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Over de Materiaalmeesters</h2>
            <p className="text-muted-foreground mb-4">beschrijving </p>
            <p className="text-muted-foreground mb-4">
              <strong>Email:</strong> maestro@example.com
            </p>
            <p className="text-muted-foreground">
              <strong>Telefoon:</strong> nummer
            </p>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-96">
              <Image
                src="/materiaalmeesters.jpg"
                alt="Groepsfoto materiaalmeesters"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

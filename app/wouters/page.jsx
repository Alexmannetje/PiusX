import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Image from "next/image";

export default function Wouters() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto my-12 p-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Leiding Wouters
        </h1>
        <div className="flex flex-wrap justify-around gap-8 mb-8">
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/eline B.jpg"
                alt="Eline B."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Eline Briels</h2>
            <p className="text-muted-foreground text-center">Totem: </p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/alexander M.jpg"
                alt="Alexander M."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Alexander Mannaerts</h2>
            <p className="text-muted-foreground text-center">Totem: Curieuze Kraanvogel</p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/seppe V.jpg"
                alt="Seppe V."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Seppe Van De Parre</h2>
            <p className="text-muted-foreground text-center">
              Totem: Oprechte Klauwier
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex-1 bg-background p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Over de wouterleiding</h2>
            <p className="text-muted-foreground mb-4">beschrijving </p>
            <p className="text-muted-foreground mb-4">
              <strong>Email:</strong> wouters@example.com
            </p>
            <p className="text-muted-foreground">
              <strong>Telefoon:</strong> nummer
            </p>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-96">
              <Image
                src="/wouterleiding.jpg"
                alt="Groepsfoto wouterleiding"
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

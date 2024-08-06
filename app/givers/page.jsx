import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Image from "next/image";

export default function Givers() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto my-12 p-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Leiding givers
        </h1>
        <div className="flex flex-wrap justify-around gap-8 mb-8">
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/elisa J.jpg"
                alt="Elisa J."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Elisa Janvier</h2>
            <p className="text-muted-foreground text-center">Frizzleshizzle oranje Altruïstische Caprinae </p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/lowik S.jpg"
                alt="Lowik S."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Lowik Schrijvers</h2>
            <p className="text-muted-foreground text-center">Mantis groen Trouwhartig Vogelbekdier</p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/victor D.jpg"
                alt="Victor D."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Victor Delathouwer</h2>
            <p className="text-muted-foreground text-center">Roadrunner blauwe Snaakse Arassari</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex-1 bg-background p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Over de giverleiding</h2>
            <p className="text-muted-foreground mb-4">beschrijving </p>
            <p className="text-muted-foreground mb-4">
              <strong>Email:</strong> givers@example.com
            </p>
            <p className="text-muted-foreground">
              <strong>Telefoon:</strong> nummer
            </p>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-96">
              <Image
                src="/giverleiding.jpg"
                alt="Groepsfoto giverleiding"
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

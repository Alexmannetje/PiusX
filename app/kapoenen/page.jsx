import Navbar from "@/components/navbar";
import Image from "next/image";

export default function KapoenenPage() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto my-12 p-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Leiding Kapoenen
        </h1>
        <div className="flex flex-wrap justify-around gap-8 mb-8">
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/milan V.jpg"
                alt="Milan V.B."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Milan V.B.</h2>
            <p className="text-muted-foreground text-center">Totem: </p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/jabir M.jpg"
                alt="Jabir M."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Jabir M.</h2>
            <p className="text-muted-foreground text-center">Totem: </p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/borg S.jpg"
                alt="Borg S."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Borg S.</h2>
            <p className="text-muted-foreground text-center">
              Totem: Noeste Hathi
            </p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/lucas B.jpg"
                alt="Lucas B."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Lucas B.</h2>
            <p className="text-muted-foreground text-center">
              Totem: Levenslustige Conejo
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex-1 bg-background p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Over de Kapoenenleiding</h2>
            <p className="text-muted-foreground mb-4">beschrijving </p>
            <p className="text-muted-foreground mb-4">
              <strong>Email:</strong> kapoenen@example.com
            </p>
            <p className="text-muted-foreground">
              <strong>Telefoon:</strong> nummer
            </p>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-96">
              <Image
                src="/kapoenenleiding.jpg"
                alt="Groepsfoto Kapoenenleiding"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

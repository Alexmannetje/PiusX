import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Groepsleiding() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto my-12 p-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Groepsleiding
        </h1>
        <div className="flex flex-wrap justify-around gap-8 mb-8">
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/yassin A.jpg"
                alt="Yassin A."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Yassin Akkabouz</h2>
            <p className="text-muted-foreground text-center">Totem: </p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/Emilie H.jpg"
                alt="Emilie H."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Emilie Heuten</h2>
            <p className="text-muted-foreground text-center">Totem: </p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/milan V.jpg"
                alt="Milan V."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Milan Van Besien</h2>
            <p className="text-muted-foreground text-center">
              Totem:
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex-1 bg-background p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Over de groepsleiding</h2>
            <p className="text-muted-foreground mb-4">beschrijving </p>
            <p className="text-muted-foreground mb-4">
              <strong>Email:</strong> groepsleiding@example.com
            </p>
            <p className="text-muted-foreground">
              <strong>Telefoon:</strong> nummer
            </p>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-96">
              <Image
                src="/groepsleiding.jpg"
                alt="Groepsfoto groepsleiding"
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

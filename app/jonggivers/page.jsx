import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
import Image from "next/image";

export default function Jonggivers() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto my-12 p-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Leiding Jonggivers
        </h1>
        <div className="flex flex-wrap justify-around gap-8 mb-8">
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/joppe D.jpg"
                alt="Joppe D."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Joppe Dechamps</h2>
            <p className="text-muted-foreground text-center">Totem: </p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/dago V.jpg"
                alt="Dago V."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Dago Vilain</h2>
            <p className="text-muted-foreground text-center">Totem: Ongedwongen Salangaan</p>
          </div>
          <div className="rounded-md border bg-background p-4 shadow-sm w-64">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/rik F.jpg"
                alt="Rik F."
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <h2 className="text-lg font-semibold text-center">Rik Firens</h2>
            <p className="text-muted-foreground text-center">
              Totem: Welwillend Zeepaardje
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex-1 bg-background p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Over de jonggiverleiding</h2>
            <p className="text-muted-foreground mb-4">Bij de jonggivers leer je je scouts vaardigheden ontwikkelen. Sjorren, kaartlezen, vuur maken, koken, het hoort er allemaal bij. Deze vaardigheden worden op kamp benut en er wordt aangeleerd zelfstandig te werk te gaan. Naast deze technieken worden doorheen het jaar natuurlijk allerlei super leuke vergaderingen en spellen gespeeld, en streven we ernaar een hechte groep te worden met zowel leiding als leden.</p>
            <p className="text-muted-foreground mb-4">
              <strong>Email:</strong> jonggivers@example.com
            </p>
            <p className="text-muted-foreground">
              <strong>Telefoon:</strong> nummer
            </p>
          </div>
          <div className="flex-1">
            <div className="relative w-full h-96">
              <Image
                src="/jonggiverleiding.jpg"
                alt="Groepsfoto jonggiverleiding"
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

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-muted py-6 md:py-12 lg:py-18">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Welkom bij Scouts PiusX
                </h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Ontdek het avontuur met de warme groep van PiusX.
                </p>
              </div>
              <div className="relative flex-1 min-h-[300px] md:min-h-[400px]">
                <Image
                  src="/piusxgroep.jpg"
                  alt="PiusX groep"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  style={{ opacity: 1 }}
                />
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-muted to-transparent"
                    style={{ width: "33%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Aankomende Evenementen
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Bekijk onze aankomende evenementen en activiteiten.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-md border bg-background p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Kamp</h3>
                  <p className="mt-2 text-muted-foreground">
                    Kom meer te weten over ons kamp in de grote vakantie.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      juli 2024
                    </span>
                    <Link
                      href="/kalender"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}
                    >
                      Meer Informatie
                    </Link>
                  </div>
                </div>
                <div className="rounded-md border bg-background p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Overgang</h3>
                  <p className="mt-2 text-muted-foreground">
                    De start van het scoutsjaar begint altijd met een leuke
                    overgang.
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      15 september 2024
                    </span>
                    <Link
                      href="kalender"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}
                    >
                      Meer Informatie
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="relative flex-1 min-h-[300px] md:min-h-[400px]">
                <Image
                  src="/piusx.png"
                  alt="PiusX Logo"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Doe mee met het Avontuur
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Word een Scout en begin aan een reis van persoonlijke groei,
                  leiderschap en heel veel plezier.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/inschrijven"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Word Lid
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:py-8">
          <div className="flex items-center gap-2">
            <Image src="/piusxlogo.png" width={32} height={32} alt="logo" />
            <span className="text-lg font-bold">Pius X</span>
          </div>
          <p className="text-sm text-primary-foreground/80">
            &copy; 2024 Scouts
          </p>
        </div>
      </footer>
    </div>
  );
}
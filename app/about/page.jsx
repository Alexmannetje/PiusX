import Navbar from "@/components/Navbar";
import Image from "next/image";

const InfoPage = () => {
  return (
    <div>
      <Navbar />

      <main className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <section className="mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Onze Leiding
            </h1>
            <div className="grid gap-8">
              <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-4">
                <div className="rounded-md border bg-background p-4 shadow-sm">
                  <div className="relative w-full h-48">
                    <Image
                      src="/kapoenenleiding.jpg"
                      alt="Leiding Kapoenen"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-4">
                    Leiding Kapoenen
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Naam: Milan V.B., Jabir M., Borg S., Lucas B.
                  </p>
                  <p className="text-muted-foreground">Email: kapoenen mail</p>
                  <p className="text-muted-foreground">
                    Telefoon: +eventuele nummmer
                  </p>
                </div>
                <div className="rounded-md border bg-background p-4 shadow-sm">
                  <div className="relative w-full h-48">
                    <Image
                      src="/wouterleiding.jpg"
                      alt="Leiding Wouters"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-4">
                    Leiding Wouters
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Naam: Eline B., Alexander M., Seppe V.D.P.
                  </p>
                  <p className="text-muted-foreground">Email: wouter mail</p>
                  <p className="text-muted-foreground">
                    Telefoon: eventuele nummer
                  </p>
                </div>
                <div className="rounded-md border bg-background p-4 shadow-sm">
                  <div className="relative w-full h-48">
                    <Image
                      src="/jonggiverleiding.jpg"
                      alt="Leiding Jonggivers"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-4">
                    Leiding Jonggivers
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Naam: Joppe D., Dago V., Rik F.
                  </p>
                  <p className="text-muted-foreground">Email: jogi mail</p>
                  <p className="text-muted-foreground">
                    Telefoon: eventuele nummer
                  </p>
                </div>
                <div className="rounded-md border bg-background p-4 shadow-sm">
                  <div className="relative w-full h-48">
                    <Image
                      src="/giverleiding.jpg"
                      alt="Leiding Givers"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-4">Leiding Givers</h2>
                  <p className="mt-2 text-muted-foreground">
                    Naam: Elisa J., Lowik S., Victor D.
                  </p>
                  <p className="text-muted-foreground">Email: giver mail</p>
                  <p className="text-muted-foreground">
                    Telefoon: eventuele nummer
                  </p>
                </div>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                <div className="rounded-md border bg-background p-4 shadow-sm">
                  <div className="relative w-full h-48">
                    <Image
                      src="/jonggiverleiding.jpg"
                      alt="Leiding Jonggivers"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-4">Groepsleiding</h2>
                  <p className="mt-2 text-muted-foreground">
                    Naam: Yassin A., Emilie H., Milan V.B.
                  </p>
                  <p className="text-muted-foreground">Email: groeps mail</p>
                  <p className="text-muted-foreground">
                    Telefoon: eventuele nummer
                  </p>
                </div>
                <div className="rounded-md border bg-background p-4 shadow-sm">
                  <div className="relative w-full h-48">
                    <Image
                      src="/jonggiverleiding.jpg"
                      alt="Leiding Jonggivers"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mt-4">
                    Materiaalmeesters
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Naam: Rune W., Lucas J., Dario F., Jens C.
                  </p>
                  <p className="text-muted-foreground">Email: mail?</p>
                  <p className="text-muted-foreground">
                    Telefoon: eventuele nummer
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Algemene Contactgegevens
            </h1>
            <div className="rounded-md border bg-background p-4 shadow-sm">
              <h2 className="text-lg font-semibold">
                Algemene Contactinformatie
              </h2>
              <p className="mt-2 text-muted-foreground">Email: piusx mail</p>
              <p className="text-muted-foreground">
                Telefoon: eventuele nummer
              </p>
              <p className="text-muted-foreground">
                Adres: Peter Benoitlaan 23, 2100 Antwerpen
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default InfoPage;

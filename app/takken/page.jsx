import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const InfoPage = () => {
  return (
    <div>
      <Navbar />

      <main className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <section className="mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Onze Leidingsploeg
            </h1>
            <div className="grid gap-8">
              <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-4">
                <div className="rounded-md border bg-background p-4 shadow-sm flex flex-col items-center text-center">
                  <Link href="/kapoenen" className="w-full">
                    <div className="relative w-full h-60 mb-4">
                      <Image
                        src="/kapoenenleiding.jpg"
                        alt="groepsfoto kapoenenleiding"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-md"
                      />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">
                      Kapoenenleiding
                    </h2>
                    <p className="text-md">Klik voor meer info</p>
                  </Link>
                </div>
                <div className="rounded-md border bg-background p-4 shadow-sm flex flex-col items-center text-center">
                  <Link href="/wouters" className="w-full">
                    <div className="relative w-full h-60 mb-4">
                      <Image
                        src="/wouterleiding.jpg"
                        alt="groepsfoto Wouterleiding"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-md"
                      />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">
                      Wouterleiding
                    </h2>
                    <p className="text-md">Klik voor meer info</p>
                  </Link>
                </div>
                <div className="rounded-md border bg-background p-4 shadow-sm flex flex-col items-center text-center">
                  <Link href="/jonggivers" className="w-full">
                    <div className="relative w-full h-60 mb-4">
                      <Image
                        src="/jonggiverleiding.jpg"
                        alt="groepsfoto Jonggiverleiding"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-md"
                      />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">
                      Jonggiverleiding
                    </h2>
                    <p className="text-md">Klik voor meer info</p>
                  </Link>
                </div>
                <div className="rounded-md border bg-background p-4 shadow-sm flex flex-col items-center text-center">
                  <Link href="/givers" className="w-full">
                    <div className="relative w-full h-60 mb-4">
                      <Image
                        src="/giverleiding.jpg"
                        alt="groepsfoto Giverleiding"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-md"
                      />
                    </div>
                    <h2 className="text-lg font-semibold mb-2">Giverleiding</h2>
                    <p className="text-md">Klik voor meer info</p>
                  </Link>
                </div>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                <Link
                  href="/groepsleiding"
                  className="rounded-md border bg-background p-4 shadow-sm flex flex-col items-center text-center"
                >
                  <div className="relative w-full h-60 mb-4">
                    <Image
                      src="/groepsleiding.jpg"
                      alt="Groepsfoto Groepsleiding"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mb-2">groepsleiding</h2>
                  <p className="text-md">Klik voor meer info</p>
                </Link>
                <Link
                  href="/materiaalmeesters"
                  className="rounded-md border bg-background p-4 shadow-sm flex flex-col items-center text-center"
                >
                  <div className="relative w-full h-60 mb-4">
                    <Image
                      src="/Materiaalmeesters.jpg"
                      alt="Groepsfoto Materiaalmeesters"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                  </div>
                  <h2 className="text-lg font-semibold mb-2">
                    materiaal meesters
                  </h2>
                  <p className="text-md">Klik voor meer info</p>
                </Link>
              </div>
            </div>
          </section>
         
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InfoPage;

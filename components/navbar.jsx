import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/piusxlogo.jpg"
            width={32}
            height={32}
            alt="logo"
          />
          <span className="text-3xl font-bold">Pius X</span>
        </Link>
        <nav className="flex gap-4">
        <Link
            href="/foerier"
            className="rounded-md px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Foerier
          </Link>
          
          <Link
            href="/kalender"
            className="rounded-md px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Kalender
          </Link>
          <Link
            href="/nieuwsbrieven"
            className="rounded-md px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Nieuwsbrieven
          </Link>
          <Link
            href="/fotos"
            className="rounded-md px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Foto&apos;s
          </Link>
          
          <Link
            href="/takken"
            className="rounded-md px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Takken
          </Link>
          <Link
            href="/inschrijven"
            className="rounded-md px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Inschrijven
          </Link>
          <Link
            href="/verhuur"
            className="rounded-md px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Verhuur
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src="/piusxlogo.jpg" width={32} height={32} alt="logo" />
          <span className="text-2xl md:text-3xl font-bold">Pius X</span>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className="hidden md:flex gap-4">
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

        {isOpen && (
          <nav className="md:hidden absolute top-16 left-0 w-full bg-primary text-primary-foreground shadow-lg z-10">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <Link
                  href="/foerier"
                  className="block px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                  onClick={toggleMenu}
                >
                  Foerier
                </Link>
              </li>
              <li>
                <Link
                  href="/kalender"
                  className="block px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                  onClick={toggleMenu}
                >
                  Kalender
                </Link>
              </li>
              <li>
                <Link
                  href="/nieuwsbrieven"
                  className="block px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                  onClick={toggleMenu}
                >
                  Nieuwsbrieven
                </Link>
              </li>
              <li>
                <Link
                  href="/fotos"
                  className="block px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                  onClick={toggleMenu}
                >
                  Foto&apos;s
                </Link>
              </li>
              <li>
                <Link
                  href="/takken"
                  className="block px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                  onClick={toggleMenu}
                >
                  Takken
                </Link>
              </li>
              <li>
                <Link
                  href="/inschrijven"
                  className="block px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                  onClick={toggleMenu}
                >
                  Inschrijven
                </Link>
              </li>
              <li>
                <Link
                  href="/verhuur"
                  className="block px-4 py-2 text-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                  onClick={toggleMenu}
                >
                  Verhuur
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

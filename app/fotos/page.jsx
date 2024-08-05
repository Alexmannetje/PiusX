import Navbar from "@/components/navbar";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-muted p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Nog Meer Komt Aan!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We zijn bezig met het voorbereiden van iets geweldigs. Blijf op de
            hoogte!
          </p>
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Terug naar Home
          </Link>
        </div>
      </div>
    </div>
  );
}

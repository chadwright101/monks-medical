import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen bg-[#2D2C33] px-10">
      <div className="grid gap-10 justify-items-center max-w-[700px]">
        <h1 className="text-4xl text-center lg:text-7xl text-[#A77655]">
          Something new and exciting is coming soon...
        </h1>
        <Image
          src="/monks-medical-logo-1.svg"
          alt="Monk's Medical Logo"
          width={400}
          height={400}
          className="image-pulse py-8 border-y-2 border-white"
        />
        <ul className="grid gap-4 justify-items-center lg:gap-1">
          <li>
            <Link
              href="mailto:monksmedical@gmail.com"
              className="text-[#DDC3A0] hover:text-[#DDC3A0]/80 p-2 -m-2 lg:p-0 lg:m-0"
            >
              monksmedical@gmail.com
            </Link>
          </li>
          <li>
            <Link
              href="tel:+27440200431"
              className="text-[#DDC3A0] hover:text-[#DDC3A0]/80 p-2 -m-2 lg:p-0 lg:m-0"
            >
              +27 44 020 0431
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

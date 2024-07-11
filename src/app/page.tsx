import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center">
        <Image
          src="/Commodore64BasicAnimated.webp"
          alt="Commodore 64 Basic"
          width={800}
          height={451}
          priority
        />
      </div>
    </main>
  );
}

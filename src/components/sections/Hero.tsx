import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/monkey.png"
        alt="Tungjai Mady (TJ)"
        width={200}
        height={200}
        className="rounded-full mb-8"
      />
      <h1 className="text-5xl font-bold text-white">Tungjai Mady (TJ)</h1>
      <p className="text-xl text-gray-400 mt-4">Software Developer
      </p>
    </section>
  );
}

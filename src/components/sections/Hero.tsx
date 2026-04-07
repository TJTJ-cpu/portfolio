import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/profile/me.jpg"
        alt="Tungjai Mady (TJ)"
        width={275}
        height={275}
        className="rounded-full mb-8 h-auto"
      />
      <h1 className="text-5xl font-bold text-white">Tungjai Mady (TJ)</h1>
      <p className="text-xl text-gray-400 mt-4">Software Developer
      </p>
      <div className="flex gap-4 mt-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Get in Touch
        </a>
        <a
          href="/documents/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Resume
        </a>

        <a/>
      </div>
    </section>
  );
}

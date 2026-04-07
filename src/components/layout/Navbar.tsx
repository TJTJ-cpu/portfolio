export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-white font-bold text-lg">Tungjai Mady (TJ)</a>
        <div className="flex gap-6">
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#education" className="text-gray-300 hover:text-white">Education</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}
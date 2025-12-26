import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2940&auto=format&fit=crop"
          alt="Romantic Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <main className="relative z-10 text-center px-6 animate-in fade-in zoom-in duration-1000">
        <h1 className="text-5xl md:text-7xl font-thin text-white tracking-widest mb-4 drop-shadow-lg font-serif italic">
          Amour
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-8">
          Where love finds its home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/u/ab1" className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/50 rounded-full text-white transition-all duration-300">
                Greeting
            </Link>
            <Link href="/u/ab2" className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/50 rounded-full text-white transition-all duration-300">
                Music
            </Link>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="absolute bottom-6 z-10 text-white/50 text-xs tracking-widest uppercase">
        Designed with Love
      </footer>
    </div>
  );
}

import Image from 'next/image';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#f57d3b' }}>
      <Navbar />
      <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg1.png"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 text-white">
          <h1 className="font-raleway text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
            Higher Study Cell
          </h1>
          <p className="font-inter text-2xl md:text-3xl lg:text-4xl font-light italic max-w-3xl leading-relaxed">
            Bharati Vidyapeeth&apos;s College of Engineering, New Delhi
          </p>
        </div>
      </div>
    </div>
  );
}

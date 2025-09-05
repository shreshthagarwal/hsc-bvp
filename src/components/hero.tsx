import Image from 'next/image';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full" style={{ backgroundColor: '#f57d3b' }}>
      <Navbar />
      <div className="relative w-full h-screen p-2.5">
        <div className="relative w-full h-full">
          <Image
            src="/hero-bg.png"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
            style={{
              objectFit: 'contain',
              padding: '10px'
            }}
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Higher Study Cell</h1>
            <p className="text-lg md:text-xl">Bharati Vidyapeeth's College of Engineering, New Delhi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

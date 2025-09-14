'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? 'text-orange-700 font-semibold' : 'text-orange-800 hover:text-orange-700';
  };
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto">
      <div className="bg-[#FFF9F0] bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-3 flex justify-between items-center border border-orange-100">
        {/* Logo */}
        <div className="relative h-12 w-32">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              fill 
              className="object-contain"
              priority
            />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-10">
          <Link href="/" className={`${isActive('/')} transition-colors text-base font-medium`}>
            Home
          </Link>
          <Link href="/events" className={`${isActive('/events')} transition-colors text-base font-medium`}>
            Events
          </Link>
          <Link href="/alumni" className={`${isActive('/alumni')} transition-colors text-base font-medium`}>
            Alumni
          </Link>
          <Link href="/resources" className={`${isActive('/resources')} transition-colors text-base font-medium`}>
            Resources
          </Link>
          <Link href="/archive" className={`${isActive('/archive')} transition-colors text-base font-medium`}>
            Archive
          </Link>
          <a 
            href="https://www.bvcoend.ac.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white bg-orange-600 hover:bg-orange-700 transition-colors text-base font-medium px-4 py-2 rounded-lg"
          >
            College Website
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
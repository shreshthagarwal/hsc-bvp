'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? 'text-white font-bold' : 'text-white hover:text-gray-100';
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-4 flex justify-between items-center bg-transparent">
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
      <div className="flex space-x-8 px-6 py-3 rounded-full">
        <Link href="/" className={`${isActive('/')} transition-colors font-semibold text-lg`}>Home</Link>
        <Link href="/events" className={`${isActive('/events')} transition-colors font-semibold text-lg`}>Events</Link>
        <Link href="/alumni" className={`${isActive('/alumni')} transition-colors font-semibold text-lg`}>Alumni</Link>
        <Link href="/resources" className={`${isActive('/resources')} transition-colors font-semibold text-lg`}>Resources</Link>
        <Link href="/archive" className={`${isActive('/archive')} transition-colors font-semibold text-lg`}>Archive</Link>
        <a 
          href="https://www.bvcoend.ac.in/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-100 transition-colors font-semibold text-lg"
        >
          College Website
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
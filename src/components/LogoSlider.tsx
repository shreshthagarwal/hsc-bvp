'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const logos = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
  ];

  // Duplicate the logos array to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    let animationFrameId: number;
    let position = 0;
    const speed = 0.1; // Reduced speed for slower scrolling

    const animate = () => {
      position -= speed;
      
      // Reset position to create infinite loop
      if (position <= -100) {
        position = 0;
      }
      
      slider.style.transform = `translateX(${position}%)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="relative h-[30vh] w-full overflow-hidden">
        <div 
          ref={sliderRef}
          className="absolute top-0 left-0 flex h-full w-[300%] items-center"
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="relative h-full w-1/3 flex-shrink-0 px-4 flex items-center"
            >
              <Image
                src={logo}
                alt={`Logo ${index % logos.length + 1}`}
                layout="fill"
                objectFit="contain"
                className="select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;

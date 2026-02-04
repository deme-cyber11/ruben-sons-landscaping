'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  title?: string;
  description?: string;
  location?: string;
  size?: 'default' | 'large';
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before',
  afterAlt = 'After',
  title,
  description,
  location,
  size = 'default',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const aspectClass = size === 'large' ? 'aspect-[16/10]' : 'aspect-[4/3]';

  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      {title && (
        <div className="bg-charcoal text-white px-4 py-2 text-center font-medium">
          {title}
        </div>
      )}
      <div
        ref={containerRef}
        className={`relative ${aspectClass} cursor-ew-resize select-none`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after comparison slider"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setSliderPosition((p) => Math.max(0, p - 5));
          if (e.key === 'ArrowRight') setSliderPosition((p) => Math.min(100, p + 5));
        }}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
          <span className="absolute bottom-4 right-4 bg-cta-green text-white px-3 py-1 rounded-full text-sm font-medium">
            After
          </span>
          {/* Location Badge Overlay */}
          {location && (
            <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </div>
          )}
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: `${100 / (sliderPosition / 100)}%` }}>
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <span className="absolute bottom-4 left-4 bg-charcoal text-white px-3 py-1 rounded-full text-sm font-medium">
            Before
          </span>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </div>
      {/* Description Section */}
      {description && (
        <div className="bg-white p-4 border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
}

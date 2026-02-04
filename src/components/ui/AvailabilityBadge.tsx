'use client';

import { useState, useEffect } from 'react';

interface AvailabilityBadgeProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

export default function AvailabilityBadge({ variant = 'default', className = '' }: AvailabilityBadgeProps) {
  const [slots, setSlots] = useState(3);

  useEffect(() => {
    // Randomize between 2-5 slots for realism
    setSlots(Math.floor(Math.random() * 4) + 2);
  }, []);

  if (variant === 'compact') {
    return (
      <span className={`inline-flex items-center gap-1.5 text-amber-700 text-xs font-medium ${className}`}>
        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
        Limited availability
      </span>
    );
  }

  if (variant === 'inline') {
    return (
      <span className={`inline-flex items-center gap-2 text-amber-700 text-sm font-medium ${className}`}>
        <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
        Only {slots} slots left this week
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
      </span>
      <span className="text-amber-800 text-sm font-semibold">
        Only {slots} slots left this week
      </span>
    </div>
  );
}

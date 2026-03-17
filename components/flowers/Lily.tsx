'use client';

export default function Lily() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <line x1="50" y1="65" x2="50" y2="100" stroke="#5C8C3A" strokeWidth="2" />
      <line x1="48" y1="80" x2="30" y2="92" stroke="#4A6B2E" strokeWidth="1.5" />
      <line x1="52" y1="85" x2="70" y2="95" stroke="#4A6B2E" strokeWidth="1.5" />
      
      {/* Petals - Lily shape */}
      <path d="M 50 15 Q 45 30 48 50 Q 50 55 52 50 Q 55 30 50 15 Z" fill="#E8C4F0" />
      <path d="M 38 28 Q 28 38 30 55 Q 32 58 36 50 Q 42 38 38 28 Z" fill="#D9A8E5" />
      <path d="M 62 28 Q 72 38 70 55 Q 68 58 64 50 Q 58 38 62 28 Z" fill="#D9A8E5" />
      <path d="M 35 48 Q 22 55 28 68 Q 32 68 38 60 Q 40 53 35 48 Z" fill="#D9A8E5" />
      <path d="M 65 48 Q 78 55 72 68 Q 68 68 62 60 Q 60 53 65 48 Z" fill="#D9A8E5" />
      <path d="M 50 55 Q 45 65 50 72 Q 55 65 50 55 Z" fill="#D9A8E5" />
      
      {/* Center details */}
      <circle cx="50" cy="45" r="5" fill="#C478DA" opacity="0.7" />
      <circle cx="48" cy="43" r="1.5" fill="#A84AC8" />
      <circle cx="52" cy="43" r="1.5" fill="#A84AC8" />
    </svg>
  );
}

'use client';

export default function Tulip() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <line x1="50" y1="65" x2="50" y2="100" stroke="#5C8C3A" strokeWidth="2.5" />
      <line x1="48" y1="78" x2="35" y2="88" stroke="#4A6B2E" strokeWidth="1.5" />
      <line x1="52" y1="82" x2="65" y2="92" stroke="#4A6B2E" strokeWidth="1.5" />
      
      {/* Petals - Tulip shape */}
      <path d="M 50 15 Q 45 35 48 55 Q 50 58 52 55 Q 55 35 50 15 Z" fill="#E8A8D8" />
      <path d="M 40 25 Q 35 40 36 60 Q 38 63 42 58 Q 44 40 40 25 Z" fill="#D97FC4" />
      <path d="M 60 25 Q 65 40 64 60 Q 62 63 58 58 Q 56 40 60 25 Z" fill="#D97FC4" />
      
      {/* Center details */}
      <ellipse cx="50" cy="50" rx="6" ry="12" fill="#C85BA6" opacity="0.6" />
    </svg>
  );
}

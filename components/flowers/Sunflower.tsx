'use client';

export default function Sunflower() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <line x1="50" y1="65" x2="50" y2="100" stroke="#5C8C3A" strokeWidth="2.5" />
      <line x1="48" y1="80" x2="30" y2="92" stroke="#4A6B2E" strokeWidth="1.5" />
      <line x1="52" y1="85" x2="70" y2="95" stroke="#4A6B2E" strokeWidth="1.5" />
      
      {/* Large petals */}
      <ellipse cx="50" cy="10" rx="6" ry="14" fill="#F4A937" />
      <ellipse cx="65" cy="16" rx="6" ry="14" fill="#F4A937" transform="rotate(45 65 16)" />
      <ellipse cx="74" cy="30" rx="6" ry="14" fill="#F4A937" transform="rotate(90 74 30)" />
      <ellipse cx="76" cy="48" rx="6" ry="14" fill="#F4A937" transform="rotate(135 76 48)" />
      <ellipse cx="65" cy="62" rx="6" ry="14" fill="#F4A937" transform="rotate(180 65 62)" />
      <ellipse cx="50" cy="70" rx="6" ry="14" fill="#F4A937" />
      <ellipse cx="35" cy="62" rx="6" ry="14" fill="#F4A937" transform="rotate(-135 35 62)" />
      <ellipse cx="24" cy="48" rx="6" ry="14" fill="#F4A937" transform="rotate(-90 24 48)" />
      <ellipse cx="26" cy="30" rx="6" ry="14" fill="#F4A937" transform="rotate(-45 26 30)" />
      <ellipse cx="35" cy="16" rx="6" ry="14" fill="#F4A937" transform="rotate(-45 35 16)" />
      
      {/* Center - Brown with texture */}
      <circle cx="50" cy="40" r="14" fill="#8B6F47" />
      <circle cx="45" cy="35" r="2" fill="#6B5035" opacity="0.6" />
      <circle cx="55" cy="35" r="2" fill="#6B5035" opacity="0.6" />
      <circle cx="50" cy="45" r="2" fill="#6B5035" opacity="0.6" />
      <circle cx="48" cy="40" r="1.5" fill="#5C4428" opacity="0.5" />
      <circle cx="52" cy="40" r="1.5" fill="#5C4428" opacity="0.5" />
    </svg>
  );
}

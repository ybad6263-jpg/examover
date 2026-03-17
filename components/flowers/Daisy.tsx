'use client';

export default function Daisy() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <line x1="50" y1="60" x2="50" y2="100" stroke="#5C8C3A" strokeWidth="2" />
      <line x1="48" y1="75" x2="30" y2="88" stroke="#4A6B2E" strokeWidth="1.5" />
      <line x1="52" y1="80" x2="70" y2="92" stroke="#4A6B2E" strokeWidth="1.5" />
      
      {/* Petals - White daisy */}
      <circle cx="50" cy="20" r="7" fill="#F5E6D3" />
      <circle cx="60" cy="25" r="7" fill="#F5E6D3" />
      <circle cx="65" cy="35" r="7" fill="#F5E6D3" />
      <circle cx="60" cy="45" r="7" fill="#F5E6D3" />
      <circle cx="50" cy="50" r="7" fill="#F5E6D3" />
      <circle cx="40" cy="45" r="7" fill="#F5E6D3" />
      <circle cx="35" cy="35" r="7" fill="#F5E6D3" />
      <circle cx="40" cy="25" r="7" fill="#F5E6D3" />
      
      {/* Center - Yellow */}
      <circle cx="50" cy="35" r="9" fill="#F5D547" />
      <circle cx="48" cy="33" r="2.5" fill="#E6C53F" opacity="0.7" />
      <circle cx="52" cy="33" r="2.5" fill="#E6C53F" opacity="0.7" />
      <circle cx="50" cy="37" r="2.5" fill="#E6C53F" opacity="0.7" />
    </svg>
  );
}

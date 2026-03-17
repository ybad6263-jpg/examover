'use client';

export default function Rose() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <line x1="50" y1="70" x2="50" y2="100" stroke="#9B6B5C" strokeWidth="2" />
      <line x1="48" y1="80" x2="35" y2="90" stroke="#7A9B5C" strokeWidth="1.5" />
      <line x1="52" y1="85" x2="65" y2="92" stroke="#7A9B5C" strokeWidth="1.5" />
      
      {/* Petals - Rose shape */}
      <circle cx="50" cy="35" r="8" fill="#C74461" opacity="0.9" />
      <circle cx="56" cy="32" r="9" fill="#D95472" opacity="0.85" />
      <circle cx="60" cy="38" r="8" fill="#C74461" opacity="0.9" />
      <circle cx="58" cy="44" r="8" fill="#B83754" opacity="0.95" />
      <circle cx="50" cy="45" r="9" fill="#A62847" opacity="0.9" />
      <circle cx="42" cy="42" r="8" fill="#B83754" opacity="0.95" />
      <circle cx="40" cy="35" r="8" fill="#C74461" opacity="0.9" />
      <circle cx="42" cy="28" r="9" fill="#D95472" opacity="0.85" />
      <circle cx="50" cy="25" r="10" fill="#E55A88" opacity="0.8" />
    </svg>
  );
}

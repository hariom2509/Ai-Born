import React from "react";

interface OpenSeaIconProps {
  className?: string;
}

export default function OpenSeaIcon({ className = "w-4 h-4" }: OpenSeaIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.805 4.582a.375.375 0 0 1 .527.058l5.882 7.028a.375.375 0 0 1-.097.558l-5.69 3.473a.375.375 0 0 1-.57-.32v-3.778l-3.328 1.942a.375.375 0 0 1-.555-.382l1.397-6.07a.375.375 0 0 1 .286-.282l2.148-.227zm.252 2.37-1.42 4.093 2.39-1.395V6.952zm-1.89 8.68 3.51-2.048v3.134l-3.51-1.086z" />
    </svg>
  );
}

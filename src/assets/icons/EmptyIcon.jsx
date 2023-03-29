import React from "react";

function EmptyIcon() {
  return (
    <svg
      width="64px"
      height="64px"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#0A0A0A"
    >
      <defs>
        <linearGradient x1="15.313%" y1="100%" x2="84.687%" y2="0%" id="empty">
          <stop stopColor="#E646B6" offset="60%"></stop>
          <stop stopColor="#FF6666" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        d="M8 4H4v3M4 11v2M11 4h2M11 20h2M20 11v2M17 4h3v3M7 20H4v-3M17 20h3v-3"
        stroke="#0A0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9 12h3m3 0h-3m0 0V9m0 3v3"
        stroke="url(#empty)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export { EmptyIcon };

import React from "react";

function NavIcon({ setMobileMenu }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-wGray hover:stroke-primaryWText sm:hidden transition-color dark:stroke-bGray dark:hover:stroke-primaryBText"
      onClick={() => setMobileMenu(true)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  );
}

export { NavIcon };

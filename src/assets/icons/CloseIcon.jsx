import React from "react";

function CloseIcon({ setMobileMenu }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setMobileMenu(false)}
      className="z-50 stroke-wGray hover:stroke-primaryWText sm:hidden transition-all dark:stroke-bGray dark:hover:stroke-primaryBText absolute top-5 left-5"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export { CloseIcon };

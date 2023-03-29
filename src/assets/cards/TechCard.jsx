import React from "react";

function TechCard({ technology }) {
  return (
    <li className="flex items-center gap-2 text-sm dark:text-secondaryBText text-secondaryWText">
      <img
        src={technology.icon}
        className="w-auto h-4 object-cover"
        alt={technology.name}
        loading="lazy"
      />
      {technology.name}
    </li>
  );
}

export { TechCard };

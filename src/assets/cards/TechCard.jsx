import Image from "next/image";
import React from "react";

function TechCard({ technology }) {
  return (
    <li className="flex items-center gap-2 text-sm dark:text-secondaryBText text-secondaryWText">
      <Image
        src={technology.icon}
        className="w-auto h-4"
        width={100}
        height={100}
        alt={technology.name}
        loading="lazy"
      />
      {technology.name}
    </li>
  );
}

export { TechCard };

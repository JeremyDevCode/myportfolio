import React from "react";
import menu from "../data/menu.json";

function Menu() {
  return (
    <>
      <ul className="sm:flex hidden items-center justify-center list-none gap-10 w-full h-full bg-bgBlack dark:text-bGray text-wGray text-sm font-medium">
        {menu.map((option) => (
          <li
            key={option.id}
            className="dark:hover:text-primaryBText hover:text-primaryWText"
          >
            <a href={`#${option.name.toLowerCase()}`}>{option.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export { Menu };

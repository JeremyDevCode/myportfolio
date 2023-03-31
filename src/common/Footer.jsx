import React from "react";
import { VscWidget } from "../components/VscWidget";
import { Logo } from "./Logo";
import menu from "../data/menu.json";

function Footer() {
  return (
    <footer className="flex items-center mt-10 lg:w-full w-[90%]">
      <div className="flex items-center justify-between py-8 lg:w-full w-[90%] gap-12 my-0 mx-auto border-t-[1px] border-[#FFFFFF12]">
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-lg font-extrabold dark:text-primaryBText text-primaryWText">
            <Logo />
            Jeremy Mosquera
          </div>
          <span className="dark:text-secondaryBText text-secondaryWText lg:text-lg lg:w-[60%] text-xs">
            Frontend Developer with a passion for building unforgettable
            websites.
          </span>
          <VscWidget />
        </section>
        <section className="flex flex-col">
          <ul className="flex flex-col gap-6 text-xs font-medium list-none dark:text-bGray text-wGray sm:text-sm">
            {menu.map((option) => (
              <li
                key={option.id}
                className="dark:hover:text-primaryBText hover:text-primaryWText"
              >
                <a href={`#${option.name.toLowerCase()}`}>{option.name}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
}

export { Footer };

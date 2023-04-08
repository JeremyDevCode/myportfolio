import React from "react";
import { ConsoleIcon } from "../assets/icons/ConsoleIcon";
import { ContactIcon } from "../assets/icons/ContactIcon";
import { DocumentIcon } from "../assets/icons/DocumentIcon";
import { GearIcon } from "../assets/icons/GearIcon";
import { RocketIcon } from "../assets/icons/RocketIcon";

function Presentation() {
  return (
    <main
      className="sm:h-screen lg:min-h-[832px] sm:min-h-[500px] min-h-[500px] h-[95vh] py-0 flex flex-col items-center justify-center text-center gap-16 sm:gap-8"
      id="home"
    >
      <h1 className="text-2xl font-semibold sm:text-3xl dark:text-bGray text-wGray dark:selection:bg-bgWhite dark:selection:text-wGray selection:text-bGray selection:bg-bgBlack">
        Jeremy Mosquera
      </h1>
      <p className="lg:leading-[1.25] sm:leading-[1.25] leading-[1.25] sm:text-6xl text-4xl dark:text-primaryBText text-primaryWText font-extrabold lg:w-[70%] w-[90%] dark:selection:bg-bgWhite dark:selection:text-primaryWText selection:bg-bgBlack selection:text-primaryBText">
        Developer with a passion for building websites
        <br />
        <span className="dark:text-primaryBButton text-Highlighted dark:selection:text-Highlighted selection:text-primaryBButton">
          unforgettable
        </span>
      </p>

      <ul className="flex justify-between items-start w-[80%] lg:w-[45%] select-none">
        <li className="flex flex-col items-center justify-start gap-1 text-center text-secondaryBText">
          <span className="flex items-center gap-2 text-2xl font-bold sm:text-3xl dark:text-primaryBText text-primaryWText">
            +3
            <RocketIcon />
          </span>
          <p className="text-sm leading-5 dark:text-secondaryBText text-secondaryWText">
            Years of <br />
            experience
          </p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 text-center text-secondaryBText">
          <span className="flex items-center gap-2 text-2xl font-bold sm:text-3xl dark:text-primaryBText text-primaryWText">
            +100k
            <ConsoleIcon />
          </span>
          <p className="text-sm leading-5 dark:text-secondaryBText text-secondaryWText">
            Lines of <br />
            written code
          </p>
        </li>
        <li className="flex flex-col items-center justify-start gap-1 text-center text-secondaryBText">
          <span className="flex items-center gap-2 text-2xl font-bold sm:text-3xl dark:text-primaryBText text-primaryWText">
            +1k
            <GearIcon />
          </span>
          <p className="text-sm leading-5 dark:text-secondaryBText text-secondaryWText">
            bugs
            <br />
            solved
          </p>
        </li>
      </ul>
      <div className="flex items-center gap-10 select-none">
        <a
          href="#contact"
          className="flex items-center justify-center gap-4 py-4 font-bold border-0 text-primaryWText w-fit dark:bg-primaryBButton bg-Highlighted hover:opacity-90 px-7 rounded-2xl"
        >
          <p className="whitespace-nowrap lg:text-xl">Contact now</p>
          <ContactIcon />
        </a>
        <a
          href="/Jeremy Mosquera - Public CV.pdf"
          download
          className="flex items-center justify-center gap-4 py-4 font-bold border-0 dark:text-primaryWText w-fit dark:bg-primaryBText bg-secondaryWButton text-primaryBText hover:opacity-90 px-7 rounded-2xl"
          aria-label="Download CV"
        >
          <p className="hidden whitespace-nowrap sm:block lg:text-xl">
            Download CV
          </p>
          <DocumentIcon />
        </a>
      </div>
    </main>
  );
}

export { Presentation };

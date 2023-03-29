import React from "react";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { ContactsIcon } from "../assets/icons/ContactsIcon";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { JobsIcon } from "../assets/icons/JobsIcon";
import { ProjectIcon } from "../assets/icons/ProjectIcon";
import menu from "../data/menu.json";
function MobileMenu({ mobileMenu, setMobileMenu }) {
  return (
    <>
      <div
        className={`absolute ${
          mobileMenu ? "top-0" : "top-[-100%]"
        } duration-500 transition-all w-full h-screen flex-col flex items-center justify-center list-none gap-20 dark:bg-bgBlack bg-bgWhite dark:text-bGray text-wGray text-2xl font-medium`}
      >
        <CloseIcon setMobileMenu={setMobileMenu} />
        <ul className="flex flex-col items-start justify-center gap-20">
          {menu?.map((option) => (
            <li
              key={option.id}
              className="flex items-center justify-center gap-5 dark:hover:text-primaryBText hover:text-primaryWText"
            >
              {option.name === "Home" && <HomeIcon />}
              {option.name === "Projects" && <ProjectIcon />}
              {option.name === "Experience" && <JobsIcon />}
              {option.name === "Contact" && <ContactsIcon />}
              <a
                href={`#${option.name.toLowerCase()}`}
                onClick={() => setMobileMenu(false)}
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export { MobileMenu };

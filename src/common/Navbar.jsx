import React, { useEffect, useState } from "react";
import { NavIcon } from "../assets/icons/NavIcon";
import { Menu } from "../components/Menu";
import { MobileMenu } from "../components/MobileMenu";
import { ThemeToggle } from "../components/ThemeToggle";
import { Logo } from "./Logo";

function Navbar({ currentTheme, setTheme }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [mobileMenu]);

  return (
    <nav className="flex items-center justify-center mb-5">
      <div className="flex items-center justify-between lg:fixed lg:top-0 lg:backdrop-blur w-11/12 h-8 sm:py-8 pt-4 my-0 z-50">
        <Logo />
        <Menu />
        <NavIcon setMobileMenu={setMobileMenu} />
        <ThemeToggle currentTheme={currentTheme} setTheme={setTheme} />
      </div>
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </nav>
  );
}

export { Navbar };

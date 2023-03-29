import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Jobs } from "../components/Jobs";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";
import { useLocalStorage } from "../modules/useLocalStorage";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const container = useRef();

  useEffect(() => {
    const hash = window.location.hash;
    if (container.current && hash) {
      const section = container.current.querySelector(hash);

      if (section) {
        section.scrollIntoView();
      }
    }
  }, [container]);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className={`${theme}`}>
      <div
        className={`sm:w-full w-full sm:h-fit flex items-center justify-center dark:bg-bgBlack bg-bgWhite`}
      >
        <Head>
          <title>{"Jeremy <Frontend/>"}</title>
          <meta
            name="description"
            content="Jeremy Mosquera Frontend Developer Portfolio"
          ></meta>
        </Head>

        <div className="sm:px-[15%]">
          <Navbar currentTheme={theme} setTheme={setTheme} />
          <div
            ref={container}
            className="flex flex-col items-center justify-center"
          >
            <Presentation />
            <About />
            <Projects />
            <Jobs />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

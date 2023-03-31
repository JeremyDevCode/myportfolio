import Head from "next/head";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Jobs } from "../components/Jobs";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";
import { useLocalStorage } from "../modules/useLocalStorage";

export default function Home() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  return (
    <div className={`${theme}`}>
      <div
        className={`sm:w-full w-full sm:h-fit flex items-center justify-center dark:bg-bgBlack bg-bgWhite`}
      >
        <Head>
          <title>{"Portfolio"}</title>
          <meta name="og:site_name" content="Jeremy Mosquera" />
          <meta
            name="description"
            content="Front-end developer excited to collaborate with teams that share my passion for programming, strive to promote personal growth, and seek to use their skills to make a positive impact through the development of innovative products and services."
          ></meta>

          <meta itemProp="name" content="Portfolio" />
          <meta
            itemProp="description"
            content="Front-end developer excited to collaborate with teams that share my passion for programming, strive to promote personal growth, and seek to use their skills to make a positive impact through the development of innovative products and services."
          />
          <meta
            itemProp="image"
            content="http://res.cloudinary.com/deohsoirn/image/upload/v1680056455/Portfolio/additionalImages/myHouse_wyasnd.png"
          />

          <meta
            property="og:url"
            content="https://jeremyportfolio.vercel.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio" />
          <meta
            name="og:description"
            content="Front-end developer excited to collaborate with teams that share my passion for programming, strive to promote personal growth, and seek to use their skills to make a positive impact through the development of innovative products and services."
          ></meta>
          <meta
            property="og:image"
            content="https://res.cloudinary.com/deohsoirn/image/upload/v1680056455/Portfolio/additionalImages/myHouse_wyasnd.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1700" />
          <meta property="og:image:height" content="1700" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Portfolio" />
          <meta
            name="twitter:description"
            content="Front-end developer excited to collaborate with teams that share my passion for programming, strive to promote personal growth, and seek to use their skills to make a positive impact through the development of innovative products and services."
          />
          <meta
            name="twitter:image"
            content="http://res.cloudinary.com/deohsoirn/image/upload/v1680056455/Portfolio/additionalImages/myHouse_wyasnd.png"
          />
        </Head>

        <div className="sm:px-[15%]">
          <Navbar currentTheme={theme} setTheme={setTheme} />
          <div className="flex flex-col items-center justify-center">
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

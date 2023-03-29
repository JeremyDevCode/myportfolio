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
          <title>{"Jeremy <Frontend/>"}</title>
          <meta
            name="description"
            content="Jeremy Mosquera Frontend Developer Portfolio"
          ></meta>

          <meta itemProp="name" content="Jeremy <Frontend/>" />
          <meta
            itemProp="description"
            content="Jeremy Mosquera Frontend Developer Portfolio testing text only for test the metadata"
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
          <meta property="og:title" content="Jeremy <Frontend/>" />
          <meta
            name="og:description"
            content="Jeremy Mosquera Frontend Developer Portfolio"
          ></meta>
          <meta
            property="og:image"
            content="https://res.cloudinary.com/deohsoirn/image/upload/v1680056455/Portfolio/additionalImages/myHouse_wyasnd.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Jeremy <Frontend/>" />
          <meta
            name="twitter:description"
            content="Jeremy Mosquera Frontend Developer Portfolio"
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

import Image from "next/image";
import React from "react";
import javascriptLogo from "../assets/images/javascriptLogo.png";
import myHouse from "../assets/images/myHouse.png";

function About() {
  return (
    <section className="flex lg:flex-row flex-col w-[90%] sm:w-[100%] h-full items-center justify-center gap-16 pb-1 sm:py-5">
      <article className="flex flex-col items-start justify-center gap-8">
        <h1 className="lg:text-5xl text-3xl dark:text-primaryBText primaryWText font-extrabold">
          About me
        </h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="lg:text-xl sm:text-lg text-sm dark:text-secondaryBText secondaryWText">
            My coding journey began in 2019, where I eagerly delved into
            languages such as C++, Java, and{" "}
            <span className="font-extrabold lg:text-xl sm:text-lg text-sm bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Javascript
            </span>
            .
          </p>
          <p className="lg:text-xl sm:text-lg text-sm dark:text-secondaryBText secondaryWText">
            As of now, my focus has shifted towards frontend development. I am
            driven by collaboration with teams who share my passion for
            programming, strive towards promoting personal growth and seek to
            utilizing their skills to generate a positive impact through the
            development of innovative products and services.
          </p>
        </div>
      </article>
      <Image
        className="sm:w-[425px] w-[425px] bg-cover"
        src={myHouse}
        alt="My house projection"
      />
    </section>
  );
}

export { About };

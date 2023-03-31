import React from "react";
import { GithubCard } from "../assets/cards/GithubCard";
import { GmailCard } from "../assets/cards/GmailCard";
import { LinkedinCard } from "../assets/cards/LinkedinCard";

function Contact() {
  return (
    <section
      className="flex flex-col sm:w-full w-[90%] gap-12 py-5"
      id="contact"
    >
      <h1 className="text-3xl font-extrabold lg:text-5xl dark:text-primaryBText text-primaryWText">
        Contact
      </h1>
      <ul className="flex flex-wrap items-center justify-start gap-8 list-none lg:justify-center">
        <GmailCard />
        <LinkedinCard />
        <GithubCard />
      </ul>
    </section>
  );
}

export { Contact };

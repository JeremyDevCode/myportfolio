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
      <h1 className="text-4xl dark:text-primaryBText text-primaryWText font-extrabold">
        Contact
      </h1>
      <ul className="flex items-center justify-start lg:justify-center flex-wrap gap-8 list-none">
        <GmailCard />
        <LinkedinCard />
        <GithubCard />
      </ul>
    </section>
  );
}

export { Contact };

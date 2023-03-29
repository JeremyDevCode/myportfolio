import React from "react";
import { GmailIcon } from "../icons/GmailIcon";

function GmailCard() {
  return (
    <li className="flex items-center justify-center relative gap-2 rounded-xl overflow-hidden">
      <GmailIcon />
      <div className="flex flex-col justify-center">
        <small className="dark:text-bGray text-wGray font-medium">
          Send me an email:
        </small>
        <a
          className="text-lg font-bold dark:text-primaryBText text-primaryWText hover:underline decoration-1"
          href="mailto:jeremydevcode@gmail.com"
        >
          jeremydevcode@gmail.com
        </a>
      </div>
    </li>
  );
}

export { GmailCard };

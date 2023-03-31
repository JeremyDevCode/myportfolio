import Image from "next/image";
import React from "react";
import vscLogo from "../assets/images/vscLogo.png";

function VscWidget() {
  return (
    <div className="flex items-center gap-2 pt-5 text-sm font-semibold dark:text-bGray text-wGray">
      <Image className="h-[40px] w-[40px]" src={vscLogo} alt="vscLogo" />
      <p>
        Coding now (
        <span className="font-extrabold dark:text-primaryBButton text-Highlighted">
          index.js
        </span>
        )
      </p>
    </div>
  );
}

export { VscWidget };

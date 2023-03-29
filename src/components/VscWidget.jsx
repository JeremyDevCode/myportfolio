import Image from "next/image";
import React from "react";
import vscLogo from "../assets/images/vscLogo.png";

function VscWidget() {
  return (
    <div className="flex items-center gap-2 dark:text-bGray text-wGray text-sm font-semibold pt-5">
      <Image className="h-[40px] w-[40px]" src={vscLogo} alt="vscLogo" />
      <p>
        Coding now (
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
          index.js
        </span>
        )
      </p>
    </div>
  );
}

export { VscWidget };

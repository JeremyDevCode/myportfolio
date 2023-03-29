import Image from "next/image";
import React from "react";
import vscLogo from "../assets/images/vscLogo.png";

function VscWidget() {
  return (
    <div className="flex items-center gap-2 dark:text-bGray text-wGray text-sm font-semibold pt-5">
      <Image className="h-[40px] w-[40px]" src={vscLogo} alt="vscLogo" />
      <p>
        Coding now (
        <span className="text-primaryBButton font-extrabold">index.js</span>)
      </p>
    </div>
  );
}

export { VscWidget };

import React from "react";
import { AccordionIcon } from "../assets/icons/AccordionIcon";

function Accordion({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-fit min-w-[124px] p-3 dark:bg-[#FFF1] bg-[#0001] rounded-lg dark:text-bgWhite text-bgBlack font-semibold sm:gap-2 gap-1 dark:hover:text-bgBlack dark:hover:bg-bgWhite hover:text-bgWhite hover:bg-bgBlack transition-colors mt-4"
    >
      <AccordionIcon open={open} />
      {!open && <span>See more</span>}
      {open && <span>See less</span>}
    </button>
  );
}

export { Accordion };

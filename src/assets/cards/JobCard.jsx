import React, { useState } from "react";
import { Accordion } from "../../components/Accordion";
import { EmptyIcon } from "../icons/EmptyIcon";
import PeaceIcon from "../icons/PeaceIcon";
import { TechCard } from "./TechCard";
import style from "../../styles/Animation.module.css";
import Image from "next/image";

function JobCard({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      key={job.id}
      className="relative z-10 flex flex-col gap-4 pl-6 sm:even:translate-x-full sm:even:pr-0 sm:w-2/4 sm:odd:pl-0 sm:odd:pr-6 group"
    >
      <span className="absolute top-0 left-[-10px] h-5 w-5 rounded-full bg-primaryBButton sm:group-odd:left-[calc(100%-10px)]"></span>
      <div className="sm:absolute dark:bg-bgWhite text-primaryWText bg-[#00000011] top-0 p-2 flex flex-col justify-center items-center gap-4 h-[120px] w-[120px] object-contain rounded-3xl right-12 group-odd:left-[calc(100%+1.5rem)] group-even:left-[calc(-120px-1.5rem)] text-center">
        {job.picture ? (
          <Image
            className="w-full h-full"
            src={job.picture}
            width={120}
            height={120}
            alt={`Logo of ${job.Company} where I worked as a ${job.title}`}
            loading="lazy"
          />
        ) : job.id === "Personal" ? (
          <PeaceIcon />
        ) : (
          <div className={style.animated}>
            <EmptyIcon />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-extrabold dark:text-primaryBText text-primaryWText">
            {job.title}
          </h1>
          <span className="text-lg font-semibold dark:text-bGray text-wGray">
            {job.company}
          </span>
          <span className="mt-1 text-base font-medium dark:text-secondaryBText text-secondaryWText">
            {job.time}
          </span>
        </div>
        <p className="text-lg mt-5 dark:text-secondaryBText text-secondaryWText">
          {job.description}
        </p>
        <div
          className={`flex flex-col overflow-hidden ${
            open ? "max-h-[500px]" : "max-h-[0px]"
          } transition-all duration-500`}
        >
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="text-xl font-bold dark:text-primaryBText text-primaryWText">
              Activities
            </h2>
            <ul
              role="list"
              className={`${
                job.activities && "pl-5"
              } text-base marker:text-secondaryWText dark:marker:text-secondaryBText dark:text-secondaryBText text-secondaryWText list-disc  space-y-3`}
            >
              {job.activities ? (
                job.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))
              ) : (
                <p className="text-[#e0474c]">
                  There are no activities assigned for this section yet.
                </p>
              )}
            </ul>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="text-xl font-bold dark:text-primaryBText text-primaryWText">
              Technologies
            </h2>
            <ul className="flex flex-wrap mb-0 gap-x-4 gap-y-2">
              {job.technologies ? (
                job.technologies.map((technology) => (
                  <TechCard key={technology.name} technology={technology} />
                ))
              ) : (
                <p className="text-[#e0474c]">
                  There are no technologies assigned for this section yet.
                </p>
              )}
            </ul>
          </div>
        </div>
        <Accordion open={open} onClick={() => setOpen((prev) => !prev)} />
        {/* <div class="accordion">
          <div class="accordion-section">
            <span class="accordion-title">Actividades</span>
            <ul>
              {activities.map((activity) => (
                <li>{activity}</li>
              ))}
            </ul>
          </div>
          <div class="accordion-section">
            <span class="accordion-title">Tecnologías</span>
            <ul class="tech-list">
              {technologies.map((technology) => (
                <TechItem name={technology.name} icon={technology.icon} />
              ))}
            </ul>
          </div>
        </div>
        <AccordionButton dataTarget={id} /> */}
      </div>
    </article>
  );
}

export { JobCard };

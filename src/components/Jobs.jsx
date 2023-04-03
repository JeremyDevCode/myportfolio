import React from "react";
import { JobCard } from "../assets/cards/JobCard";
import jobs from "../data/jobs.json";

function Jobs() {
  return (
    <section
      className="flex sm:w-full w-[90%] flex-col gap-12 pb-16"
      id="experience"
    >
      <h1 className="font-extrabold lg:text-5xl text-4xl dark:text-primaryBText primaryWText">
        Experience
      </h1>
      <div className="relative flex flex-col gap-20">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
        <div className="absolute border-l-[1px] border-dashed border-bGray2 left-0 h-full sm:left-2/4 z-0"></div>
      </div>
    </section>
  );
}

export { Jobs };

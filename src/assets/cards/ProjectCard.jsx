import React from "react";
import { Modal } from "../../components/Modal";
import { GithubIcon } from "../icons/GithubIcon";
import { RepoIcon } from "../icons/RepoIcon";

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col w-full h-full gap-2 overflow-hidden bg-transparent">
      <div
        className="flex flex-col items-center justify-center w-full h-full overflow-hidden cursor-pointer rounded-xl projectModalOpen"
        data-target={`project-${project.id}`}
      >
        <img
          src={project.carouselImages[0].image}
          className="w-full h-full transition-transform duration-300 rounded-xl hover:scale-105"
          width={1200}
          height={950}
          alt={project.id}
        />
      </div>
      <div className="flex justify-between items-center gap-2 m-w-[100%] overflow-hidden">
        <div className="flex flex-col items-start justify-center gap-1 pb-5 mt-2 overflow-hidden">
          <h1 className="text-lg font-bold sm:text-xl dark:text-primaryBText primaryWText">
            {project.title}
          </h1>
          <p className="w-[100%] sm:text-lg text-base lg:truncate dark:text-bGray text-wGray">
            {project.resume}
          </p>
        </div>
        <div className="flex gap-2 w-fit">
          <a
            href={project.repository}
            className="p-2 group/links dark:hover:bg-primaryBText hover:bg-primaryWText rounded-xl"
            target="_blank"
          >
            <GithubIcon className="dark:stroke-secondaryBText stroke-secondaryWText dark:group-hover/links:stroke-bgBlack group-hover/links:stroke-bgWhite" />
          </a>
          <a
            href={project.site}
            className="p-2 group/links dark:hover:bg-primaryBText hover:bg-primaryWText rounded-xl"
            target="_blank"
          >
            <RepoIcon className="dark:stroke-secondaryBText stroke-secondaryWText dark:group-hover/links:stroke-bgBlack group-hover/links:stroke-bgWhite" />
          </a>
        </div>
      </div>
      <Modal project={project} />
    </article>
  );
}

export { ProjectCard };

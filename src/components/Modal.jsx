import React from "react";
import { TechCard } from "../assets/cards/TechCard";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { RepoIcon } from "../assets/icons/RepoIcon";
import { Carousel } from "./Carousel";

function Modal({ project }) {
  return (
    <section
      data-visible="false"
      className="fixed hidden data-[visible=true]:flex items-center justify-center top-0 left-0 w-screen h-full bg-[#00000088] z-50 backdrop-blur-sm overflow-y-hidden"
      id={`project-${project?.id}`}
    >
      <div
        className="absolute w-full h-full projectModalClose"
        data-target={`project-${project?.id}`}
      ></div>
      <article className="flex flex-col lg:flex-row max-h-[1024px] max-w-[100%] sm:max-w-[90%] overflow-hidden bg-[#F5F5F5] dark:bg-[#181818] lg:h-fit h-full">
        <Carousel project={project.id} images={project?.carouselImages} />
        <div className="flex flex-col gap-8 px-8 my-5 sm:my-12 lg:w-2/5 relative bg-[#F5F5F5] dark:bg-[#181818]">
          <h1 className="text-2xl font-extrabold text-primaryWText dark:text-primaryBText sm:text-3xl">
            {project?.title}
          </h1>
          <div className="flex items-center gap-2">
            {" "}
            <a
              href={project.repository}
              className="flex items-center justify-center p-3 pr-4 gap-1 sm:gap-2 font-semibold text-sm text-[#252525] dark:text-[#CCCCCC] bg-[#00000011] dark:bg-[#FFFFFF11] dark:hover:bg-primaryBText hover:bg-[#111111] dark:hover:text-bgBlack hover:text-[#FAFBFC] rounded-lg transition-colors"
              target="_blank"
            >
              <GithubIcon width="18" height="18" />
              GitHub
            </a>
            <a
              href={project.site}
              className="flex items-center justify-center p-3 pr-4 gap-1 sm:gap-2 font-semibold text-sm text-[#252525] dark:text-[#CCCCCC] bg-[#00000011] dark:bg-[#FFFFFF11] dark:hover:bg-primaryBText hover:bg-[#111111] dark:hover:text-bgBlack hover:text-[#FAFBFC] rounded-lg transition-colors"
              target="_blank"
            >
              <RepoIcon width="18" height="18" />
              Ir al sitio
            </a>
          </div>
          <p className="text-[#252525] dark:text-[#CCCCCC] text-[0.91rem]">
            {project?.description}
          </p>
          <div className="flex flex-col gap-3 mb-1">
            <h2 className="dark:text-primaryBText text-primaryWText font-bold text-[0.91rem]">
              Tecnologías
            </h2>
            <ul className="flex flex-wrap mb-0 gap-x-4 gap-y-2 text-light-texto-secondary dark:text-dark-texto-secondary">
              {project?.technologies.map((technology) => (
                <TechCard key={technology.name} technology={technology} />
              ))}
            </ul>
          </div>
          <button
            className="dark:hover:bg-[#FFFFFF11] dark:hover:text-[#F3F3F3] bg-transparent p-[5px] dark:text-secondaryBText text-[#6A6A6A] hover:text-[#252525] hover:bg-[#CCCCCC11] absolute top-0 right-5 lg:p-2 rounded-md transition-colors projectModalClose"
            data-target={`project-${project?.id}`}
          >
            <svg
              className="h-[18px] w-[18px] lg:w-[20px] lg:h-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </article>
    </section>
  );
}

export { Modal };

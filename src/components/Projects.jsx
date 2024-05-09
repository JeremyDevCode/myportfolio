import React, { useEffect } from "react";
import { ProjectCard } from "../assets/cards/ProjectCard";
import projects from "../data/projects.json";
import { StarIcon } from "../assets/icons/StarIcon";
import { NormalStarIcon } from "../assets/icons/NormalStarIcon";
import { CONSTANTS } from "../../constants";

const { WITH_SNEAK_PEEKS } = CONSTANTS;

function Projects() {
  useEffect(() => {
    const openModalButtons = document.querySelectorAll(".projectModalOpen");
    const closeModalButtons = document.querySelectorAll(".projectModalClose");
    openModalButtons.forEach((element) => {
      element.addEventListener("click", (e) => {
        const modalId = e.currentTarget.getAttribute("data-target");
        const modal = document.getElementById(modalId);
        document.addEventListener("keydown", (e) => {
          if (e.code === "Escape") {
            modal.setAttribute("data-visible", "false");
            document.body.style.overflow = "auto";
          }
        });
        modal.setAttribute("data-visible", "true");
        document.body.style.overflow = "hidden";
      });
    });

    closeModalButtons.forEach((element) => {
      element.addEventListener("click", (e) => {
        const modalId = e.currentTarget.getAttribute("data-target");
        const modal = document.getElementById(modalId);
        modal.setAttribute("data-visible", "false");
        document.body.style.overflow = "auto";
      });
    });
  }, []);

  return (
    <section
      className="relative flex flex-col w-[90%] sm:w-full gap-12 py-16"
      id="projects"
    >
      <div className="flex items-end gap-10">
        <h1 className="font-extrabold lg:text-5xl text-4xl dark:text-primaryBText primaryWText">
          Projects
        </h1>
        {WITH_SNEAK_PEEKS && (
          <button className="mt-[-40px] flex items-center justify-center gap-5 dark:bg-[#0D0F12] md:border-2 border-[1px] dark:border-[#999] border-[#0D0F12] bg-[#F2F2F2] text-[#0D0F12] dark:text-[#E3E6E8] py-2 px-4 rounded-lg dark:hover:border-[#FFF159] hover:border-[#51D1F6] dark:hover:text-[#FFF159] hover:text-[#51D1F6] transition-all text-[0.9rem] md:text-base text-xs font-semibold">
            <NormalStarIcon />
            <StarIcon />
            <span>Sneak Peeks</span>
          </button>
        )}
      </div>
      <div className="grid gap-8 lg:grid-cols-2 place-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export { Projects };

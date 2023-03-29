import React, { useEffect } from "react";
import { ProjectCard } from "../assets/cards/ProjectCard";
import projects from "../data/projects.json";

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
      className="flex flex-col w-[90%] sm:w-full gap-12 py-16"
      id="projects"
    >
      <h1 className="text-4xl font-extrabold dark:text-primaryBText primaryWText">
        Projects
      </h1>
      <div className="grid gap-8 lg:grid-cols-2 place-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export { Projects };

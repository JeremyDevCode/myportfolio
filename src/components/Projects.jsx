import React, { useEffect } from "react";
import { ProjectCard } from "../assets/cards/ProjectCard";
import projects from "../data/projects.json";

function Projects({ tutorial, setTutorial }) {
  useEffect(() => {
    const openModalButtons = document.querySelectorAll(".projectModalOpen");
    const closeModalButtons = document.querySelectorAll(".projectModalClose");
    openModalButtons.forEach((element) => {
      element.addEventListener("click", (e) => {
        setTutorial(1);
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
      <h1 className="lg:text-5xl text-3xl font-extrabold dark:text-primaryBText primaryWText">
        Projects
      </h1>
      <div
        className={`hidden ${
          tutorial ? "sm:hidden" : "sm:block"
        } absolute select-none top-24 left-1/3`}
      >
        <img
          className="w-10"
          src="https://res.cloudinary.com/deohsoirn/image/upload/v1680126970/Portfolio/additionalImages/pointer_yuvj2a.gif"
        />
      </div>
      <div
        className={`hidden ${
          tutorial ? "sm:hidden" : "sm:block"
        } absolute select-none top-16 left-[38%] dark:bg-[#FFFFFF11] bg-[#00000011] dark:text-primaryBText text-primaryWText w-fit px-4 py-3 rounded-lg`}
      >
        <p>Click to see Magic ✨</p>
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
